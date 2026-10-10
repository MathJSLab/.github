import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'input/resource/mathjslab-markdown');
const destination = path.join(root, 'resource/mathjslab-markdown');
fs.cpSync(source, destination, { recursive: true });
console.log('Markdown package resources copied.');
