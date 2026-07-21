# Philosophy

## Why AI-Workflow Exists
AI-Workflow was born from a fundamental observation: **LLMs are brilliant at localized execution but terrible at global architecture.** 
When an AI assistant refactors a file, it optimizes for the prompt. It does not optimize for the 5-year maintainability of the codebase. AI-Workflow exists to enforce global context.

## What Problems It Solves
- **Hallucinated Dependencies:** Solved via machine-readable `Knowledge` maps.
- **Architecture Drift:** Solved by deterministic `Rules` that the AI must read before executing.
- **Onboarding Amnesia:** Solved by the `Workspace` scanner, which instantly feeds the project's tech stack to the AI.

## What It Intentionally Does NOT Do
- **It does not execute code.** We do not duplicate agent orchestration, task planning, or memory loops.
- **It is not a wrapper.** It does not abstract away the underlying AI model (e.g., OpenAI, Claude). 

## Relationship with AI Assistants
AI-Workflow acts as the **Governance Engine**. Antigravity (or any compatible AI) acts as the **Execution Engine**. 
Think of AI-Workflow as the Constitution, and the AI assistant as the Executive Branch. The AI performs the labor, but AI-Workflow dictates the laws.

## Design Principles
1. **Inevitability:** Every subsystem must justify its existence.
2. **Deterministic Schemas:** AI relies on structured data. All knowledge must be frontmatter-driven Markdown.
3. **AI Agnosticism:** While optimized for Antigravity, the core rules and maps must remain legible to human engineers and alternative AI tools.
