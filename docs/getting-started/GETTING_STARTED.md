# Getting Started

This guide merges installation, quick start, and onboarding for both new and existing projects.

## Installation
AI-Workflow is distributed as a CLI tool. Ensure you have Node.js installed.
```bash
npm install -g @ai-workflow/cli
```

---

## Scenario A: Starting a Brand New Project
When starting from scratch, AI-Workflow helps you scaffold the repository with governance from day one.

1. **Initialize Repository:** Run `git init` and `npm init`.
2. **Generate Workspace:** Run `ai-workflow init`. This scaffolds the `.ai-workflow` configuration and creates the `Knowledge`, `Rules`, and `Templates` directories in your project root.
3. **Generate Knowledge:** Write your initial `docs/architecture/ADR-001.md` detailing your tech stack choices.
4. **Create Rules:** Define your engineering laws in `Rules/CODING_STANDARDS.md`.
5. **Connect Antigravity:** Open the workspace in your AI IDE (e.g., Antigravity). The AI will automatically parse the `Rules` and `Knowledge`.
6. **Begin Development:** Prompt the AI to start scaffolding features. It will obey your rules.

---

## Scenario B: Adopting an Existing Project
When adopting an existing massive repository (e.g., 500,000+ lines of code), AI-Workflow is essential for mapping the chaos.

1. **Scan Repository:** Run `ai-workflow map`.
2. **Detect Technologies:** The Workspace engine will parse `package.json`, `docker-compose.yml`, etc.
3. **Generate Project Map:** The CLI will output a deterministic `PROJECT_MAP.md` detailing the entire repository structure.
4. **Generate Module Maps:** For each domain folder, the CLI generates `MODULE_MAP.md`.
5. **Create Knowledge Layer:** Review the generated maps and commit them to the `/Knowledge` directory.
6. **Validate Workspace:** Run `ai-workflow doctor` to identify architectural smells or missing documentation.
7. **Start Using Antigravity:** The AI can now safely navigate the massive repository by reading the static Knowledge maps instead of blindly grepping half a million lines of code.
