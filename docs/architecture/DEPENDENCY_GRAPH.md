# Framework Dependency Graph

**Status:** LOCKED
**Version:** 2.0.0

## Purpose
Defines the strict hierarchical rules governing AI-Workflow subsystems.

## Dependency Rules
- Strict top-down dependency model. Lower layers CANNOT depend upon higher layers.
- Circular dependencies are STRICTLY FORBIDDEN.

## Complete Dependency Graph

```text
CLI
  â†“
Bootstrap
  â†“
Workspace
  â†“
Knowledge
  â†“
Rules
  â†“
Templates
  â†“
Prompts
  â†“
Skills
  â†“
Core
```

## Subsystem Definitions
- **CLI**: Entry point. Depends on Bootstrap.
- **Bootstrap**: Coordinates initialization. Depends on Workspace to scan the environment.
- **Workspace**: Scans the environment and parses outputs. Depends on Knowledge schemas.
- **Knowledge**: Defines the structure of Project Maps and ADRs. Depends on Rules to enforce structure.
- **Rules**: Enforces engineering governance. Depends on Templates for structural scaffolding.
- **Templates**: Reusable document structures. Depends on Prompts for AI interaction context.
- **Prompts**: Interaction instructions. Depends on Skills.
- **Skills**: Antigravity integrations. Depends on Core for core types and configuration.
- **Core**: The foundation. Depends on nothing.

