# AI-Workflow

AI-Workflow is a production-grade Engineering Operating System designed to govern and contextualize AI assistants (like Antigravity, Claude, or Copilot). AI-Workflow is an engineering workflow framework for AI-assisted software development. It guides AI assistants through a governed development process but does not replace engineering judgment, testing, security validation, or human review.

Most AI coding assistants act like junior engineers and lack long-term context. When introduced to a large repository, they may misinterpret dependencies, violate architectural boundaries, or write code that works locally but fails in a broader context. AI-Workflow is designed to mitigate this by providing defined engineering boundaries, machine-readable project maps, and persistent project memory.

## 1. Installation

Install the CLI globally to use AI-Workflow across any of your projects:

```bash
npm install -g @ai-workflow/cli
```

## 2. Initialize a Project

Navigate to any codebase (new or existing) and initialize the AI-Workflow intelligence layer:

```bash
cd your-project
ai-workflow init
```

This command generates a hidden `.ai-workflow/` directory. This folder is the "brain" of your project. It contains `PROJECT_MAP.md`, `TODO.md`, `CURRENT_TASK.md`, and other files that the AI will use to maintain global context across sessions.

## 3. Basic CLI Commands

- `ai-workflow init`: Scaffolds the `.ai-workflow` directory and generates the initial intelligence files.
- `ai-workflow map`: Triggers the workspace scanner to detect your frameworks/languages and regenerate `PROJECT_MAP.md`.
- `ai-workflow doctor`: Validates the `.ai-workflow` knowledge base integrity.

## 4. How to start working with an AI assistant

Once you have run `ai-workflow init`, you must instruct your AI assistant to read and maintain the intelligence directory.

1. Open your project in your AI IDE (e.g., Antigravity, Cursor) or CLI tool.
2. Open the **[AI_OPERATING_SOP.md](./AI_OPERATING_SOP.md)** file found in the root of this repository.
3. **Copy the entire SOP** and paste it into your AI assistant's system prompt or active context window.
4. Prompt the AI: *"Read the `.ai-workflow/` directory and proceed with the first task in `TODO.md`."*

The AI will now automatically update your `PROJECT_STATUS.md`, maintain your `DECISIONS.md`, and log its work in `SESSION_LOG.md` without you having to ask.

---

## Advanced Documentation

The primary onboarding flow requires only this README and the AI_OPERATING_SOP. For advanced architectural specifications, governance rules, and troubleshooting, refer to the optional `docs/` folder:

- [Architecture & Specifications](docs/architecture/)
- [Philosophy](docs/reference/PHILOSOPHY.md)
- [Troubleshooting](docs/guides/TROUBLESHOOTING.md)
- [Getting Started Deep Dive](docs/getting-started/GETTING_STARTED.md)
- [Disclaimer](DISCLAIMER.md)
