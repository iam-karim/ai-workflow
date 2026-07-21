import { detectLanguagesAndFrameworks } from './detector';
import { scanDirectory } from './scanner';
import { WorkspaceMap } from '@ai-workflow/core';

export function generateProjectMap(cwd: string): WorkspaceMap {
  const detection = detectLanguagesAndFrameworks(cwd);
  const scan = scanDirectory(cwd);
  
  return {
    directories: scan.directories,
    files: scan.files,
    dependencies: detection.dependencies,
    languages: detection.languages,
    frameworks: detection.frameworks
  };
}

export function formatMapToMarkdown(map: WorkspaceMap, projectName: string): string {
  let md = `---\n`;
  md += `title: Project Map for ${projectName}\n`;
  md += `languages: [${map.languages.join(', ')}]\n`;
  md += `frameworks: [${map.frameworks.join(', ')}]\n`;
  md += `---\n\n`;
  
  md += `# Project Map\n\n`;
  
  md += `## Directory Structure\n`;
  md += map.directories.map((d: string) => `- /${d}`).join('\n') + '\n\n';
  
  md += `## Core Dependencies\n`;
  for (const [dep, version] of Object.entries(map.dependencies)) {
    md += `- **${dep}**: ${version}\n`;
  }
  
  return md;
}
