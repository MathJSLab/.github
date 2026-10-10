import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const command = process.argv[2];
const remove = (relative) => {
  const target = path.resolve(root, relative);
  if (!target.startsWith(root + path.sep)) throw new Error('Cleanup target is outside this project.');
  fs.rmSync(target, { recursive: true, force: true });
};
const run = (executable, args) => {
  const result = spawnSync(executable, args, { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(executable + ' failed with exit code ' + result.status);
};
const copy = (source, destination) => {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
};
switch (command) {
  case 'clean-build':
    remove('dist');
    remove('report');
    break;
  case 'clean-results':
    for (const name of ['report', 'coverage', 'test-results', 'playwright-report', 'mark.crono.json', 'test/markdown/chunk-baseline.json']) remove(name);
    for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
      if (entry.isFile() && /\.(log|tgz|tsbuildinfo)$/.test(entry.name)) remove(entry.name);
    }
    break;
  case 'clean-repository':
    remove('repo');
    break;
  case 'clone':
    remove('repo');
    fs.mkdirSync(path.join(root, 'repo'), { recursive: true });
    run('git', ['clone', 'https://github.com/MathJSLab/.github.git', path.join(root, 'repo', '.github')]);
    break;
  case 'copy': {
    // A local organization checkout can be supplied while its changes are unpublished.
    const sourceRoot = process.argv[3] ? path.resolve(process.cwd(), process.argv[3]) : path.join(root, 'repo', '.github');
    const configPath = path.join(sourceRoot, 'resource', 'mathjslab-markdown', 'copy.repo.config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    for (const item of config.files) {
      const source = typeof item === 'string' ? item : item.src;
      const destination = typeof item === 'string' ? item : (item.dest ?? item.src);
      const sourcePath = path.resolve(sourceRoot, source);
      const destinationPath = path.resolve(root, destination);
      if (!sourcePath.startsWith(sourceRoot + path.sep) || !destinationPath.startsWith(root + path.sep)) throw new Error('Copy target is outside its project.');
      copy(sourcePath, destinationPath);
    }
    copy(configPath, path.join(root, 'copy.repo.config.json'));
    console.log('Organization common files synchronized.');
    break;
  }
  default:
    throw new Error('Expected clean-build, clean-results, clean-repository, clone or copy.');
}
