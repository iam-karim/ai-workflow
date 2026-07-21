# AI Usage Guide

This guide explains how to effectively collaborate with an AI assistant (like Antigravity) using the AI-Workflow Engineering OS.

## The Core Workflow Loop
1. **Bootstrap:** The AI reads the `Knowledge` and `Rules`.
2. **Plan:** The AI writes a plan in `task.md`.
3. **Execute:** The AI writes code, bound by the Rules.
4. **Map:** Run `ai-workflow map` to regenerate the Knowledge layer with the new changes.

## Specific Engineering Workflows

### Feature Implementation
**Prompt:** "Implement the Google Login feature. Read the `Rules/SECURITY.md` and `Knowledge/MODULE_MAP.md` before starting."
**AI Behavior:** The AI reads the security rules (e.g., "Always salt hashes"), checks the module map to find the Auth service, and writes the code adhering to your specific architectural boundaries.

### Bug Fixing
**Prompt:** "There is a memory leak in the WebSocket service. Consult the `Knowledge/SYSTEM_MAP.md`."
**AI Behavior:** Rather than guessing how the WebSocket connects to the cache, the AI reads the System Map, understands the Redis dependency, and isolates the bug faster.

### Code Review
**Prompt:** "Review this PR against our `Rules/CODING_STANDARDS.md`."
**AI Behavior:** The AI acts as a strict linter, cross-referencing your exact engineering laws against the diff.

### Architecture Review
**Prompt:** "Propose a microservice split for the billing module. Output the proposal using the `Templates/ADR.md` structure."
**AI Behavior:** The AI generates a deterministically formatted Architecture Decision Record that you can directly commit to the repository.

### Large Repository Onboarding
Never tell an AI to "Refactor the backend" in a 500,000-line repo. 
Instead, instruct the AI to read the `PROJECT_MAP.md` first. The AI will navigate the hierarchy safely without flooding its context window.

## AI Compatibility
While this guide references Antigravity, AI-Workflow is completely agnostic. If you use Cursor, GitHub Copilot Workspace, or a custom LangChain agent, simply instruct them to:
> "Read the `docs/architecture/` and `/Knowledge` folders before writing any code."
