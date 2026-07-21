# FAQ

### Is this a replacement for LangChain or CrewAI?
No. AI-Workflow does not execute code or orchestrate agents. It is the Governance and Knowledge layer that sits *above* the execution layer. You can use CrewAI *inside* a repository governed by AI-Workflow.

### Does this only work with Antigravity?
No. AI-Workflow is completely AI-agnostic. The `Skills` subsystem provides specific bindings for Antigravity, but the `Rules`, `Knowledge`, and `Templates` are standard Markdown files that any LLM (Claude, ChatGPT, GitHub Copilot) can read.

### Why not just put everything in the system prompt?
System prompts have strict token limits and suffer from context degradation. By persisting rules and maps in the repository (`Knowledge/`), the AI can query context dynamically, allowing it to navigate 500,000-line codebases without context overflow.
