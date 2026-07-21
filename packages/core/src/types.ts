export interface AIWorkflowConfig {
  version: string;
  projectName: string;
  knowledgeDir: string;
  rulesDir: string;
}

export interface WorkspaceMap {
  directories: string[];
  files: string[];
  dependencies: Record<string, string>;
  languages: string[];
  frameworks: string[];
}
