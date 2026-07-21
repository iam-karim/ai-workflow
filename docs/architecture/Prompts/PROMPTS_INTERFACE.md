# Prompts Interface

## 1. Purpose
This document specifies the interfaces exposed by the Prompts subsystem to higher-level components within the AI-Workflow framework. It defines the contracts for requesting and assembling prompts.

## 2. Scope
The scope includes all public-facing interfaces necessary for
## 3. Responsibilities
- Define the `IPromptAssembler` interface for context merging.
- Define the `IPromptRegistry` interface for retrieving prompt definitions.
- Establish standard data structures representing assembled prompts, agnostic of specific AI model interface formats.

## 4. Design Principles
- **Model Agnosticism**: Interfaces must never reference specific AI provider constructs (e.g., specific JSON schemas for OpenAI or Claude).
- **Strong Typing**: Context provided to the assembler must adhere to predefined schemas.
- **Safety First**: The interface must return an error if validation (via the Rules subsystem) fails during assembly.

## 5. Interfaces

### IPromptAssembler
Responsible for merging definitions with context.
- `Assemble(PromptIdentifier, Context)`: Returns an `AssembledPrompt`.
- `AssembleChat(PromptIdentifier, Context, History)`: Returns an `AssembledPrompt` structured for conversational models.

### IPromptRegistry
Responsible for managing the lifecycle of prompt definitions.
- `RegisterPrompt(PromptDefinition)`: Stores a new prompt asset.
- `GetPrompt(PromptIdentifier)`: Retrieves a base definition.

### Data Structures
- **Context**: A standardized map containing the data to be injected into the prompt.
- **AssembledPrompt**: An abstract representation of the final prompt. It contains distinct fields for System Instructions, User Input, and abstract Role formatting, which higher-level
## 6. Dependencies
These interfaces depend on data structures defined in the Core and
## 7. Extensibility
The interfaces can be extended to support multimodal prompt assembly (e.g., injecting image context) by expanding the `Context` and `AssembledPrompt` data structures, without breaking the core `IPromptAssembler` contract.

## 8. Status
DRAFT


