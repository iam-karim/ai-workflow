import fs from 'fs';
import path from 'path';

export function detectLanguagesAndFrameworks(cwd: string): { languages: string[], frameworks: string[], dependencies: Record<string, string> } {
  let languages: string[] = [];
  let frameworks: string[] = [];
  let dependencies: Record<string, string> = {};

  const packageJsonPath = path.join(cwd, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    languages.push('JavaScript');
    try {
      const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      dependencies = { ...pkg.dependencies, ...pkg.devDependencies };
      
      if (dependencies['typescript']) languages.push('TypeScript');
      if (dependencies['react']) frameworks.push('React');
      if (dependencies['next']) frameworks.push('Next.js');
      if (dependencies['react-native']) frameworks.push('React Native');
      if (dependencies['express']) frameworks.push('Express');
      if (dependencies['vitest'] || dependencies['jest']) frameworks.push('Testing Framework');
    } catch (e) {
      // Ignore parse errors for detection
    }
  }

  // Deduplicate
  languages = Array.from(new Set(languages));
  frameworks = Array.from(new Set(frameworks));

  return { languages, frameworks, dependencies };
}
