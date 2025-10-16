#!/usr/bin/env tsx
/**
 * prettier-unescape-math.ts
 *
 * Fixes improper insertion of backslashes (`\`) inside `%%...%%` and `%%%...%%%` blocks in Markdown files.
 *
 * Usage:
 *   tsx prettier-unescape-math.ts [--ignore dir1 dir2 ...] [--dry-run] [arquivos_ou_pastas...]
 *
 * Example:
 *   tsx prettier-unescape-math.ts . --ignore dist node_modules
 *   tsx prettier-unescape-math.ts src docs --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import { isMatch } from 'micromatch';

/* Global options (set by command line). */
interface Options {
    dryRun: boolean;
    ignorePatterns: string[];
}
const options: Options = {
    dryRun: false,
    ignorePatterns: [],
};

/**
 * Checks whether the path should be ignored.
 * @param filePath
 * @returns
 */
function isIgnored(filePath: string): boolean {
    return options.ignorePatterns.some((pattern) => isMatch(filePath, pattern));
}

/**
 * Processes an individual Markdown file.
 * @param filePath
 * @returns
 */
function processMarkdownFile(filePath: string): void {
    if (!filePath.endsWith('.md') || isIgnored(filePath)) return;
    const original = fs.readFileSync(filePath, 'utf8');
    const updated = original.replace(/(%{2,3})([\s\S]*?)\1/gs, (_, delim, inner) => {
        /* Remove escapes de asterisco dentro de blocos %%...%% ou %%%...%%% */
        return delim + inner.replace(/\\\*/g, '*') + delim;
    });
    if (updated !== original) {
        if (options.dryRun) {
            console.log(`🔍 [dry-run] ${filePath} ✅`);
        } else {
            fs.writeFileSync(filePath, updated, 'utf8');
            console.log(`${filePath} ✅`);
        }
    } else {
        console.log(`${filePath} (unchanged)`);
    }
}

/**
 * Recursive traversal of directories.
 * @param dir
 * @returns
 */
function walkDir(dir: string): void {
    if (isIgnored(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (isIgnored(fullPath)) continue;

        if (entry.isDirectory()) {
            walkDir(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            processMarkdownFile(fullPath);
        }
    }
}

/* Processing command line arguments. */
const args = process.argv.slice(2);
let targets: string[] = [];
for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--ignore') {
        while (args[i + 1] && !args[i + 1].startsWith('--')) {
            options.ignorePatterns.push(args[++i]);
        }
    } else if (arg === '--dry-run') {
        options.dryRun = true;
    } else {
        targets.push(arg);
    }
}
if (targets.length === 0) targets = ['.'];
if (options.ignorePatterns.length === 0) {
    options.ignorePatterns = ['**/node_modules/**', '**/dist/**'];
}
console.log('🧩 Directories/files to proccess:', targets.join(', '));
if (options.ignorePatterns.length > 0) {
    console.log('🚫 Ignoring:', [...options.ignorePatterns].join(', '));
}
if (options.dryRun) {
    console.log('🔍 Dry-run mode (no one file will be modified).');
}

/* Main execution pipeline. */
for (const target of targets) {
    const fullPath = path.resolve(target);
    if (!fs.existsSync(fullPath)) continue;

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
        walkDir(fullPath);
    } else if (stat.isFile() && fullPath.endsWith('.md')) {
        processMarkdownFile(fullPath);
    }
}
const doneMessage = 'Prettier math markdown fix-up';
console.log(options.dryRun ? `🏁 ${doneMessage} dry-run done.` : `🏁 ${doneMessage} done.`);
