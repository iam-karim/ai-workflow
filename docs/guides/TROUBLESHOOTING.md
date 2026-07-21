# Troubleshooting Guide

## Problem: The AI is hallucinating dependencies or breaking architecture
**Solution:** You are suffering from the Global Context Problem. 
1. Run `ai-workflow map` to ensure your `PROJECT_MAP.md` is up to date.
2. Instruct the AI to read the `Rules` and `Knowledge` directory explicitly before prompting for a feature.

## Problem: The CLI throws an error when running `ai-workflow doctor`
**Solution:** Ensure you have initialized the project properly. Run `ai-workflow init` to scaffold the `.ai-workflow` config file.

## Problem: The AI generated an ADR that doesn't match our format
**Solution:** Define your exact schema inside `Templates/ADR.md`. The AI will naturally use this template if instructed to "Use the ADR template".
