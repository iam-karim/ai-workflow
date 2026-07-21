import fs from 'fs';
import path from 'path';
import { loadConfig, AIWorkflowConfig } from '@ai-workflow/core';
import { generateProjectMap, formatMapToMarkdown } from '@ai-workflow/workspace';

export interface BootstrapResult {
  config: AIWorkflowConfig;
  projectMapGenerated: boolean;
  aiWorkflowDir: string;
}

export function bootstrapEnvironment(cwd: string): BootstrapResult {
  const config = loadConfig(cwd);
  
  // Create project-specific .ai-workflow intelligence directory
  const aiWorkflowDir = path.join(cwd, '.ai-workflow');
  if (!fs.existsSync(aiWorkflowDir)) {
    fs.mkdirSync(aiWorkflowDir, { recursive: true });
  }

  // Create MODULES subdirectory
  const modulesDir = path.join(aiWorkflowDir, 'MODULES');
  if (!fs.existsSync(modulesDir)) fs.mkdirSync(modulesDir, { recursive: true });

  // Files to scaffold
  const filesToScaffold = [
    { name: 'PROJECT_INDEX.md', content: '# Project Index\n\nCentral index of project intelligence.' },
    { name: 'PROJECT_STATUS.md', content: '# Project Status\n\nTracks current health and phase.' },
    { name: 'AI_PROJECT_MEMORY.md', content: '# AI Project Memory\n\nPersistent memory of technical decisions and context.' },
    { name: 'CURRENT_TASK.md', content: '# Current Task\n\nThe active engineering objective.' },
    { name: 'SYSTEM_MAP.md', content: '# System Map\n\nHigh-level architectural dependencies.' },
    { name: 'FEATURES.md', content: '# Features\n\nList of implemented and planned features.' },
    { name: 'DECISIONS.md', content: '# Decisions\n\nArchitecture Decision Records (ADRs).' },
    { name: 'BUSINESS_RULES.md', content: '# Business Rules\n\nDomain-specific logic rules.' },
    { name: 'SESSION_LOG.md', content: '# Session Log\n\nChronological log of AI engineering sessions.' },
    { name: 'TODO.md', content: '# TODO\n\nPending engineering tasks.' }
  ];

  for (const file of filesToScaffold) {
    const filePath = path.join(aiWorkflowDir, file.name);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, file.content, 'utf-8');
    }
  }

  // Generate dynamic Project Map
  const map = generateProjectMap(cwd);
  const markdownMap = formatMapToMarkdown(map, config.projectName);
  fs.writeFileSync(path.join(aiWorkflowDir, 'PROJECT_MAP.md'), markdownMap, 'utf-8');

  return {
    config,
    projectMapGenerated: true,
    aiWorkflowDir
  };
}
