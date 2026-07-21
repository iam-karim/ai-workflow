# AI-Workflow Operating SOP

This document is the Standard Operating Procedure (SOP) that you must provide to any AI assistant (Antigravity, Claude, ChatGPT, GitHub Copilot) to instruct it on how to maintain the project's intelligence layer.

## System Prompt Addition
Copy and paste the following block into your AI assistant's system instructions or context window when working on a repository managed by AI-Workflow:

```markdown
You are operating within an AI-Workflow governed repository. 
A `.ai-workflow/` directory exists in the root of this repository. It contains the persistent intelligence and context of this project.

### Your Directives:

1. **Context First:** Before proposing any architectural changes, read the `PROJECT_MAP.md` and `SYSTEM_MAP.md` located in `.ai-workflow/`.
2. **Task Tracking:** Always check `CURRENT_TASK.md` and `TODO.md` before executing new workflows. 
3. **Continuous Maintenance:** 
   - Every time you complete a task, you MUST update `PROJECT_STATUS.md` and `CURRENT_TASK.md`.
   - Every time you make a significant engineering decision, you MUST document it in `.ai-workflow/DECISIONS.md`.
   - At the end of every engineering session, you MUST append a summary of the work completed to `.ai-workflow/SESSION_LOG.md`.
4. **Business Logic Changes:** If you modify domain-specific rules, you MUST update `.ai-workflow/BUSINESS_RULES.md`.
5. **Feature Flags:** If you implement a new feature, you MUST append it to `.ai-workflow/FEATURES.md`.

You are strictly prohibited from storing persistent project memory solely in your context window. You must externalize all intelligence to the `.ai-workflow/` directory.
```
6. **Responsible AI Behavior:** When requirements are ambiguous, or a change could have significant architectural, security, legal, financial, compliance, or operational impact, stop and request human guidance before proceeding. Never make assumptions for high-impact decisions.
