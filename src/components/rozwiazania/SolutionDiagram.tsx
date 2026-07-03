// Schematyczne ilustracje (SVG) dla stron rozwiązań — zamiast szarych placeholderów.
// Każdy diagram jest lekką grafiką liniową w kolorach marki, spójną stylistycznie.
// Realne zdjęcia podmienimy później w danych (heroImage); diagram jest dobrym stanem przejściowym.

type DiagramProps = {
  slug: string;
};

// Wspólne ramy dla wszystkich diagramów — jednolity format i tło.
function Frame({ children, bg = "var(--surface)" }: { children: React.ReactNode; bg?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      width="100%"
      style={{ display: "block", height: "auto", borderRadius: "calc(var(--radius) - 2px)" }}
    >
      <rect x="0" y="0" width="480" height="360" rx="14" fill={bg} />
      {children}
    </svg>
  );
}

const ink = "var(--text)";
const gold = "var(--accent)";
const line = "var(--border)";

function Wentylacja() {
  return (
    <Frame>
      {/* membrana / linia sufitu */}
      <rect x="40" y="74" width="400" height="52" rx="10" fill="#ffffff" stroke={line} strokeWidth="2" />
      {/* liniowy nawiew wtopiony w sufit */}
      <rect x="150" y="94" width="180" height="9" rx="4.5" fill={gold} />
      {/* strumienie powietrza */}
      <g fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" opacity="0.85">
        <path d="M180 128 C176 170 150 190 156 232" />
        <path d="M240 128 C240 176 240 200 240 240" />
        <path d="M300 128 C304 170 330 190 324 232" />
      </g>
      <g fill={gold} opacity="0.85">
        <path d="M156 232 l-8 -12 l16 0 z" />
        <path d="M240 240 l-8 -12 l16 0 z" />
        <path d="M324 232 l-8 -12 l16 0 z" />
      </g>
      {/* podłoga */}
      <line x1="60" y1="300" x2="420" y2="300" stroke={line} strokeWidth="2" strokeDasharray="4 8" />
    </Frame>
  );
}

function SystemMagnetyczny() {
  return (
    <Frame>
      {/* ukryta szyna */}
      <rect x="60" y="150" width="360" height="16" rx="8" fill={ink} />
      {/* poświaty */}
      <g fill={gold} opacity="0.16">
        <ellipse cx="130" cy="220" rx="46" ry="26" />
        <ellipse cx="245" cy="212" rx="60" ry="22" />
        <ellipse cx="360" cy="250" rx="40" ry="24" />
      </g>
      {/* spot */}
      <path d="M118 166 h24 l-6 22 h-12 z" fill={ink} />
      <circle cx="130" cy="192" r="6" fill={gold} />
      {/* moduł liniowy */}
      <rect x="210" y="168" width="72" height="12" rx="6" fill={ink} />
      <rect x="214" y="178" width="64" height="5" rx="2.5" fill={gold} />
      {/* lampa wisząca */}
      <line x1="360" y1="166" x2="360" y2="214" stroke={ink} strokeWidth="3" />
      <path d="M344 214 h32 l-6 20 h-20 z" fill={ink} />
      <circle cx="360" cy="234" r="5" fill={gold} />
      {/* punkty magnetyczne */}
      <g fill={gold}>
        <circle cx="130" cy="158" r="4" />
        <circle cx="246" cy="158" r="4" />
        <circle cx="360" cy="158" r="4" />
      </g>
    </Frame>
  );
}

function GwiazdneNiebo() {
  const stars = [
    [70, 90, 2.4], [120, 70, 1.6], [165, 110, 2], [210, 82, 1.4], [255, 120, 2.6],
    [300, 78, 1.8], [345, 108, 1.5], [390, 84, 2.2], [95, 150, 1.7], [150, 185, 2.4],
    [205, 160, 1.5], [262, 195, 2], [318, 165, 1.6], [372, 198, 2.3], [80, 232, 1.8],
    [135, 262, 2.2], [192, 240, 1.5], [248, 272, 2.5], [305, 244, 1.7], [360, 270, 2],
    [415, 150, 1.6], [55, 190, 1.5], [420, 232, 1.9]
  ] as const;
  const sparkles = [[150, 185], [255, 120], [360, 270]] as const;
  return (
    <Frame bg="var(--surface)">
      <rect x="40" y="46" width="400" height="268" rx="14" fill="#1f2333" />
      <g fill="#ffffff">
        {stars.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} opacity={0.55 + (i % 3) * 0.15} />
        ))}
      </g>
      <g stroke={gold} strokeWidth="1.6" strokeLinecap="round">
        {sparkles.map(([cx, cy], i) => (
          <g key={i}>
            <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} />
            <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} />
          </g>
        ))}
      </g>
    </Frame>
  );
}

function SufityWielopoziomowe() {
  return (
    <Frame>
      {/* przekrój: górny strop */}
      <path d="M50 96 H430" stroke={line} strokeWidth="2" strokeDasharray="4 8" />
      {/* poziom pierwszy i uskok */}
      <path
        d="M60 120 H250 V172 H430"
        fill="none"
        stroke={ink}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* poświata LED w uskoku (efekt pływający) */}
      <defs>
        <linearGradient id="wielo-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={gold} stopOpacity="0.55" />
          <stop offset="1" stopColor={gold} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="250" y="176" width="180" height="70" fill="url(#wielo-glow)" />
      <rect x="252" y="174" width="176" height="6" rx="3" fill={gold} />
      {/* drugi, niższy poziom */}
      <rect x="90" y="130" width="150" height="30" rx="6" fill="#ffffff" stroke={line} strokeWidth="2" />
    </Frame>
  );
}

function SzczelinaCienia() {
  return (
    <Frame>
      {/* ściana */}
      <rect x="70" y="70" width="34" height="234" fill="#efe9e0" stroke={line} strokeWidth="2" />
      {/* sufit „oderwany” od ściany — szczelina cienia */}
      <rect x="118" y="70" width="300" height="40" rx="4" fill="#ffffff" stroke={line} strokeWidth="2" />
      {/* cienista szczelina */}
      <rect x="104" y="70" width="14" height="40" fill={ink} opacity="0.85" />
      {/* delikatne podświetlenie w szczelinie */}
      <rect x="118" y="106" width="300" height="5" rx="2.5" fill={gold} opacity="0.8" />
      {/* opis kierunku: strzałka do detalu */}
      <g stroke={ink} strokeWidth="2" fill="none" opacity="0.5">
        <path d="M230 150 V116" strokeLinecap="round" />
        <path d="M224 128 l6 -12 l6 12" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Frame>
  );
}

function SufitZNadrukiem() {
  return (
    <Frame>
      <defs>
        <linearGradient id="nadruk-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfe0f2" />
          <stop offset="1" stopColor="#eef6ee" />
        </linearGradient>
      </defs>
      {/* rama sufitu z nadrukiem */}
      <rect x="52" y="60" width="376" height="240" rx="10" fill="url(#nadruk-sky)" stroke={line} strokeWidth="2" />
      {/* słońce */}
      <circle cx="150" cy="130" r="30" fill={gold} opacity="0.9" />
      {/* chmury */}
      <g fill="#ffffff" opacity="0.95">
        <ellipse cx="300" cy="120" rx="46" ry="20" />
        <ellipse cx="270" cy="132" rx="30" ry="16" />
        <ellipse cx="336" cy="132" rx="26" ry="14" />
        <ellipse cx="220" cy="200" rx="40" ry="17" />
        <ellipse cx="350" cy="215" rx="34" ry="15" />
      </g>
      {/* narożnik „wydruku” */}
      <path d="M428 60 l0 26 l-26 0 z" fill="#ffffff" stroke={line} strokeWidth="2" />
    </Frame>
  );
}

function SufitPodswietlany() {
  return (
    <Frame>
      <defs>
        <radialGradient id="podsw-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor="#fff4e2" />
          <stop offset="0.6" stopColor="#fbe3bf" />
          <stop offset="1" stopColor="#f3d199" />
        </radialGradient>
      </defs>
      {/* ukryte źródła światła nad membraną */}
      <g fill={gold} opacity="0.5">
        {[80, 130, 180, 230, 280, 330, 380].map((x) => (
          <circle key={x} cx={x} cy="70" r="4" />
        ))}
      </g>
      {/* świecąca membrana translucent */}
      <rect x="52" y="92" width="376" height="180" rx="12" fill="url(#podsw-glow)" stroke={line} strokeWidth="2" />
      {/* równe światło — subtelne promienie */}
      <g stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.5">
        <line x1="120" y1="150" x2="150" y2="230" />
        <line x1="240" y1="140" x2="240" y2="240" />
        <line x1="360" y1="150" x2="330" y2="230" />
      </g>
      {/* podłoga */}
      <line x1="70" y1="300" x2="410" y2="300" stroke={line} strokeWidth="2" strokeDasharray="4 8" />
    </Frame>
  );
}

const diagrams: Record<string, () => React.ReactElement> = {
  wentylacja: Wentylacja,
  "system-magnetyczny": SystemMagnetyczny,
  "gwiazdne-niebo": GwiazdneNiebo,
  "sufity-wielopoziomowe": SufityWielopoziomowe,
  "szczelina-cienia": SzczelinaCienia,
  "sufit-z-nadrukiem": SufitZNadrukiem,
  "sufit-podswietlany": SufitPodswietlany
};

export function hasDiagram(slug: string) {
  return slug in diagrams;
}

export function SolutionDiagram({ slug }: DiagramProps) {
  const Diagram = diagrams[slug];
  if (!Diagram) return null;
  return <Diagram />;
}
