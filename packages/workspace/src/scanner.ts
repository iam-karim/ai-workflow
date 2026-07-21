import fs from 'fs';
import path from 'path';

export function scanDirectory(cwd: string, ignorePatterns = ['node_modules', '.git', 'dist', '.gemini']): { files: string[], directories: string[] } {
  const files: string[] = [];
  const directories: string[] = [];

  function traverse(currentPath: string, relativePath: string) {
    if (!fs.existsSync(currentPath)) return;
    
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (ignorePatterns.some(pattern => entry.name.includes(pattern))) continue;
      
      const entryRelativePath = path.join(relativePath, entry.name).replace(/\\/g, '/');
      const entryAbsolutePath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        directories.push(entryRelativePath);
        traverse(entryAbsolutePath, entryRelativePath);
      } else {
        files.push(entryRelativePath);
      }
    }
  }

  traverse(cwd, '');

  return { files, directories };
}
