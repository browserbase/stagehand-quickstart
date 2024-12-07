# Stagehand Quickstart

This is a quickstart for [Stagehand](https://github.com/browserbase/stagehand), the AI interface to the web.

## Getting Started

### Prerequisites

- Node.js
- NPM
- An OpenAI API key, set as the `OPENAI_API_KEY` environment variable
- [Optional] A [Browserbase](https://browserbase.com) account. To run on Browserbase, set the `BROWSERBASE_API_KEY` and `BROWSERBASE_PROJECT_ID` environment variable.

### Installing

```bash
npm install
```

## Running the Script

1. Copy the `.env.example` file to `.env` and fill in the values.

```bash
cp .env.example .env
```

2. Run the script:

```bash
npm start
```

## Notes

- This runs locally by default. To run on Browserbase, set the `BROWSERBASE_API_KEY` and `BROWSERBASE_PROJECT_ID` environment variables.
- You can mark `debugDom: false` to hide the debug rectangles.
- You can mark `headless: true` to run in headless mode.
- This runs on GPT-4o by default. To use Claude, set the `ANTHROPIC_API_KEY` environment variable and set the `modelName` parameter in `init()` to `claude-3-5-sonnet-20241022`.
