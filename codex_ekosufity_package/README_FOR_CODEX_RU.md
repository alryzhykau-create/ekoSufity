# Как использовать этот пакет в Codex

Этот пакет подготовлен для внедрения SEO-контента и технической SEO-оптимизации сайта **EkoSufity**.

## Что внутри

```txt
AGENTS.md
README_FOR_CODEX_RU.md
content/ekoSufityContent.json
prompts/01_MASTER_PROMPT.md
prompts/02_SPRINT_TECHNICAL_SEO.md
prompts/03_SPRINT_CONTENT_IMPLEMENTATION.md
prompts/04_SPRINT_IMAGES_PERFORMANCE.md
prompts/05_SPRINT_LOCAL_SEO.md
docs/eko_sufity_content_implementation_pack.md
docs/SEO_IMPLEMENTATION_CHECKLIST.md
docs/IMAGE_ASSET_PLAN.md
docs/NEXT_IMPLEMENTATION_NOTES.md
snippets/seo-helpers.example.ts
```

## Куда положить файлы в репозитории

Рекомендуемая структура:

```txt
AGENTS.md
/docs/content/eko_sufity_content_implementation_pack.md
/src/data/ekoSufityContent.json
```

Если в проекте нет `src`, можно использовать:

```txt
/data/ekoSufityContent.json
```

Главное: Codex должен найти JSON и использовать его как источник текстов.

## Как запускать работу

### Вариант 1: Codex Web / GitHub

1. Подключить GitHub-репозиторий сайта к Codex.
2. Создать новую задачу.
3. Вставить текст из `prompts/01_MASTER_PROMPT.md`.
4. После завершения проверить diff.
5. Запустить build/lint.
6. Создать PR или применить изменения.

### Вариант 2: Codex CLI локально

1. Открыть терминал в папке репозитория.
2. Установить Codex CLI, если он ещё не установлен.
3. Запустить Codex.
4. Вставить текст из `prompts/01_MASTER_PROMPT.md`.

## Какой prompt использовать первым

Первым используй:

```txt
prompts/01_MASTER_PROMPT.md
```

Если хочешь двигаться безопаснее по шагам:

1. `02_SPRINT_TECHNICAL_SEO.md`
2. `03_SPRINT_CONTENT_IMPLEMENTATION.md`
3. `04_SPRINT_IMAGES_PERFORMANCE.md`
4. `05_SPRINT_LOCAL_SEO.md`

## Важное правило

Не проси Codex “сделать SEO в топ” одним сообщением. Нужно просить конкретные изменения: metadata, schema, sitemap, данные страниц, alt-тексты, внутренние ссылки, сборка.
