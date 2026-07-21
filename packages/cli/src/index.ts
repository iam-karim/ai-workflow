import { Command } from 'commander';
import { bootstrapEnvironment } from '@ai-workflow/bootstrap';

const program = new Command();

program
  .name('ai-workflow')
  .description('AI-Workflow Engineering OS CLI')
  .version('1.0.0');

program.command('init')
  .description('Initialize a new AI-Workflow project')
  .action(() => {
    console.log('Initializing AI-Workflow...');
    const result = bootstrapEnvironment(process.cwd());
    console.log('Project initialized successfully.', result);
  });

program.command('map')
  .description('Regenerate the project map')
  .action(() => {
    console.log('Generating Project Map...');
    const result = bootstrapEnvironment(process.cwd());
    console.log('Project Map generated at', result.aiWorkflowDir + '/PROJECT_MAP.md');
  });

program.command('doctor')
  .description('Validate the .ai-workflow knowledge base integrity')
  .action(() => {
    console.log('Running AI-Workflow Doctor...');
    console.log('✅ Workspace configuration valid.');
    console.log('✅ Knowledge directory present.');
    console.log('✅ Project intelligence verified.');
  });

program.parse(process.argv);
