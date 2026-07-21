# Changelog

## [1.0.0-rc.1] - 2026-07-21
### Added
- V1.0 Frozen Architecture.
- `docs/` consolidated documentation structure.
- `Workspace` discovery engine definition.
- Removed V0 dynamic execution engines in favor of static governance.

> **Note:** AI-Workflow provides engineering governance and development workflow guidance for AI-assisted software development. It helps AI assistants follow consistent engineering and secure development practices but does not replace human code review, testing, security validation, or architectural decision-making.
- `Knowledge` domain definitions for Project Maps and ADRs.
- `Bootstrap` initialization hook.

### Removed
- Deprecated V0.1 execution subsystems (`Agents`, `Engines`, `Tasks`, `Sessions`).
- Deprecated state management (`State`, `Cache`, `Logs`).
- Merged `Standards` into `Rules`.
- Merged `Config` into `Core`.
