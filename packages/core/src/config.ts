import fs from 'fs';
import path from 'path';
import { AIWorkflowConfig } from './types';

export const DEFAULT_CONFIG: AIWorkflowConfig = {
  version: '1.0.0',
  projectName: 'unknown-project',
  knowledgeDir: './Knowledge',
  rulesDir: './Rules'
};

export function loadConfig(cwd: string): AIWorkflowConfig {
  const configPath = path.join(cwd, '.ai-workflow.json');
  if (!fs.existsSync(configPath)) {
    return DEFAULT_CONFIG;
  }
  
  try {
    const fileContent = fs.readFileSync(configPath, 'utf-8');
    const parsed = JSON.parse(fileContent);
    return { ...DEFAULT_CONFIG, ...parsed };
  } catch (error) {
    throw new Error(`Failed to parse .ai-workflow.json: ${error}`);
  }
}
