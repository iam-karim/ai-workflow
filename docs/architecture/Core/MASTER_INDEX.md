# AI Product Engineering OS

Document: MASTER_INDEX.md
Version: 1.0.0
Status: LOCKED
Classification: Core
Owner: Framework Owner

Depends On:
- AI_CONSTITUTION.md
- START_HERE.md
- EXECUTION_MODEL.md

Required By:
- All AI Systems

Review Frequency: Rare

---

# Purpose

This document is the central navigation index for the AI Product Engineering OS.

It defines the purpose and location of every framework component.

AI systems SHALL use this document to locate framework artifacts instead of making assumptions about where information is stored.

---

# Core Documents

| Document | Purpose |
|----------|---------|
| AI_CONSTITUTION.md | Governing principles of the framework |
| START_HERE.md | Framework initialization entry point |
| EXECUTION_MODEL.md | Bootstrap execution lifecycle |
| MASTER_INDEX.md | Framework navigation |

---

# Framework Documents

| Document | Purpose |
|----------|---------|
| FRAMEWORK_ARCHITECTURE.md | Defines the overall architecture of the framework |
| FRAMEWORK_SPECIFICATION.md | Defines the functional specification of the framework |

---

# Configuration

| File | Purpose |
|------|---------|
| framework.yaml | Framework configuration |
| version.json | Framework version information |

---

# Navigation Rules

AI systems SHALL:

- Use this document to locate framework components.
- Avoid assuming document locations.
- Prefer official framework documents over inferred knowledge.
- Report missing framework components instead of guessing.

---

# Missing Components

If a required component cannot be found, the AI SHALL:

1. Stop the related activity.
2. Report the missing component.
3. Request guidance from the Framework Owner.

The AI SHALL NOT continue using assumptions.

---

# Maintenance

Whenever a new framework component is added, removed, renamed, or relocated, this document SHALL be updated accordingly.

This document is the authoritative navigation map of the AI Product Engineering OS.

