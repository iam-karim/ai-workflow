# AI-Workflow V2 Specification

## 1. Vision
AI-Workflow v1.0 (V2 Paradigm) is a production-grade Engineering Operating System. 
It does **not** execute code, orchestrateAI-Workflow provides **Governance, Knowledge, and Deterministic Engineering Workflows**.

## 2. Supported Subsystems (The 9 Pillars)

### Core
The kernel. Defines the fundamental types, configuration schemas, and the overarching Constitution.

### Bootstrap
The initialization process. Loads context, rules, and knowledge. Validates the environment and prepares the session for engineering
### Workspace
The discovery engine. Detects languages, frameworks, apps, services, repositories, package managers, build systems, dependencies, directory structures, and entry points. Generates Project Maps dynamically.

### Knowledge
The solution for large-repository understanding. Stores the static Project Map, System Map, Module Maps, Business Rules, Architecture Decision Records (ADRs), Repository Overview, Glossary, Entry Points, Dependency Overview, and External Systems. Minimizes unnecessary repository exploration.

### Rules
The single governance system. Contains deterministic engineering laws (Engineering, Architecture, Coding, Security, Quality, Performance, and Review rules). Example: "Never duplicate existing code."

### Templates
Reusable document and boilerplate structures (e.g., standard ADR formats, README templates).

### Prompts
Reusable engineering instructions and templates for LLM interaction. Kept distinctly separate from executable skills.

### Skills
Strictly for Antigravity-compatible `SKILL.md` packages that bundle custom automated behaviors.

### CLI
The developer productivity interface. Exposes commands providing long-term value: `init`, `doctor`, `validate`, `map`, `knowledge`, `upgrade`.

## 3. Guiding Principles
- **Inevitability:** Abstractions exist only to provide measurable long-term value.
- **Simplicity:** No redundant orchestration layers.
- **AI-Agnosticism:** The framework remains valuable for software engineering regardless of the underlying AI assistant.

