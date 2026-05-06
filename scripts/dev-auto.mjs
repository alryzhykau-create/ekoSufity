import { spawn } from "node:child_process";
import { createServer } from "node:net";

const host = process.env.HOST || "127.0.0.1";
const startPort = Number(process.env.PORT || 3000);
const maxPort = startPort + 50;

function canUsePort(port) {
  return new Promise((resolve, reject) => {
    const server = createServer();

    server.once("error", (error) => {
      if (error && error.code === "EADDRINUSE") {
        resolve(false);
        return;
      }

      reject(error);
    });

    server.once("listening", () => {
      server.close(() => {
        resolve(true);
      });
    });

    server.listen(port, host);
  });
}

async function findPort() {
  for (let port = startPort; port <= maxPort; port += 1) {
    try {
      if (await canUsePort(port)) {
        return port;
      }
    } catch (error) {
      if (error && error.code === "EPERM") {
        throw new Error(
          `This environment cannot open localhost ports (${host}:${port}). Run npm run dev:auto in your local terminal instead.`,
        );
      }

      throw error;
    }
  }

  throw new Error(`No free port found from ${startPort} to ${maxPort}.`);
}

async function main() {
  const port = await findPort();
  const url = `http://${host}:${port}`;

  console.log(`Starting Next.js on ${url}`);

  const child = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["next", "dev", "--hostname", host, "--port", String(port)],
    {
      stdio: "inherit",
      env: process.env,
    },
  );

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
