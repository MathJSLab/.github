import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';

import EleventyUtil from './script/helper/EleventyUtil.mjs';
import xmlHeader from './script/helper/xmlHeader.mjs';
import mathjslabLogoSvg from './script/mathjslabLogoSvg.mjs';

/**
 * This filename.
 */
const scriptName = path.basename(fileURLToPath(import.meta.url));

/**
 * The 'data/mathjslab.json' data parsed.
 */
const mathjslab = JSON.parseFileSync(path.resolve('.', 'data', 'mathjslab.json'));

/**
 *
 * @param {*} n
 * @returns
 */
async function transformImage(n) {
    const step = mathjslab.build.eleventy.steps[n];
    if (
        typeof step !== 'undefined' &&
        typeof step.images !== 'undefined' &&
        typeof step.images.transform !== 'undefined' &&
        Array.isArray(step.images.transform) &&
        step.images.transform.length > 0
    ) {
        const transformData = await EleventyUtil.transformImage(step.images.transform, step.options);
        let imagesJsonPath = path.resolve('.', step.options.dir.output, 'images.json');
        try {
            fs.accessSync(imagesJsonPath, fs.constants.R_OK);
            let imagesJson = JSON.parseFileSync(imagesJsonPath);
            imagesJson.push(...transformData);
            JSON.saveFileSync(imagesJson, imagesJsonPath, null, 2);
        } catch {
            fs.mkdirSync(path.resolve('.', step.options.dir.output), { recursive: true });
            JSON.saveFileSync(transformData, imagesJsonPath, null, 2);
        }
        return transformData;
    }
}

/**
 *
 * @param {*} s
 * @returns
 */
const getStepOption = (s) => ({
    ...mathjslab.build.eleventy.steps[s].options,
    ...mathjslab.build.eleventy.commonOptions,
});

/**
 *
 */
const stepData = [
    {
        options: getStepOption(0),
        config: async function (eleventyConfig) {
            const filters = {
                prefix: function (value, prefix, postfix) {
                    return `${typeof prefix === 'string' ? prefix : ''}${value}${typeof postfix === 'string' ? postfix : ''}`;
                },
                postfix: function (value, postfix, prefix) {
                    return `${typeof prefix === 'string' ? prefix : ''}${value}${typeof postfix === 'string' ? postfix : ''}`;
                },
                filterField: function (value, field) {
                    return value[field];
                },
                getField: function (value, field) {
                    return value.map((value) => value[field]);
                },
                readFile: function (filePath, encoding) {
                    return fs.readFileSync(path.resolve(filePath), encoding || 'utf-8');
                },
                removeFrontMatter: function (value) {
                    return value.match(/^(?:---\r?\n(?:[\s\S]*)?---\r?\n)?([\s\S]+)$/)[1];
                },
                noWikiRepoMessage: function (value) {
                    return `echo \"Warning: there is no wiki repository associated with the ${value} repository\"`;
                },
            };
            const packageJsonShortcodes = {
                packageJsonHeader: function (...args) {
                    return ['name', 'version', 'description', 'author'].map((field, i) => `\"${field}\": \"${args[i]}\"`).join(',\n  ');
                },
                scriptRepository: function (name, repo, script) {
                    return `\"${name}:${script}\": \"cd ${repo} && npm run ${script}\"`;
                },
                scriptClone: function (name, repo, rename) {
                    return `\"${name}:clone\": ${repo ? `\"git clone https://github.com/MathJSLab/${repo}.git${rename ? ' ' + rename : ''}\"` : JSON.stringify(rename)}`;
                },
                scriptClean: function (name, repo) {
                    return `\"${name}:clean\": \"cd ${repo} && npm run clean\"`;
                },
                scriptCleanAll: function (name, repo) {
                    return `\"${name}:clean:all\": \"cd ${repo} && npm run clean:all\"`;
                },
                scriptUpdate: function (name, repo) {
                    return `\"${name}:update\": \"cd ${repo} && npm run update\"`;
                },
                scriptGitAddCommitPush: function (name, repo) {
                    return `\"${name}:git:all\": \"cd ${repo} && npm run git:all\"`;
                },
                scriptAllAction: function (names, action, postfix) {
                    return `\"all:${action}${postfix ? ':' + postfix : ''}\": \"${names.map((name) => `npm run ${name}:${action}`).join(' && ')}\"`;
                },
            };
            EleventyUtil.configAddTemplateFormat(eleventyConfig);
            EleventyUtil.configAddEntries(eleventyConfig, filters, 'addFilter');
            EleventyUtil.configAddEntries(
                eleventyConfig,
                {
                    mathjslabLogoSvg,
                    xmlHeader,
                    ...packageJsonShortcodes,
                },
                'addShortcode',
            );
            EleventyUtil.configAddRenderTemplateTools(eleventyConfig, true);
            EleventyUtil.configAddFileContentAsGlobalData(eleventyConfig, path.resolve('./data/files'));
            eleventyConfig.addGlobalData(
                'test_data_files',
                globSync('./input/test/data/*')
                    .map((inputPath) => {
                        const file = path.basename(inputPath, path.extname(inputPath));
                        let caption = path.basename(file, path.extname(file)).replace(/\-/g, ' ');
                        caption = caption.charAt(0).toUpperCase() + caption.slice(1);
                        if (
                            !Object.values(mathjslab.languages)
                                .map((lang) => lang.markdownIndex)
                                .includes(file)
                        ) {
                            return `* [${caption}](data/${file})`;
                        } else {
                        }
                    })
                    .join('\r\n'),
            );
            await transformImage(0);
            return getStepOption(0);
        },
    },
    {
        options: getStepOption(1),
        config: async function (_eleventyConfig) {
            await transformImage(1);
            return getStepOption(1);
        },
    },
];

/**
 *
 */
EleventyUtil.console.log(`Building ${mathjslab.organization.name} organization <${mathjslab.organization.url}> repository (build script: ${scriptName}) ...`);
EleventyUtil.console.log(`Running step01 ...`);
EleventyUtil.run(stepData[0].config, stepData[0].options, () => {
    EleventyUtil.console.log(`Running step01 done.`);
    EleventyUtil.console.log(`Running step02 ...`);
    EleventyUtil.run(stepData[1].config, stepData[1].options, () => {
        EleventyUtil.console.log(`Running step02 done.`);
        EleventyUtil.console.log(`Building ${mathjslab.organization.name} organization <${mathjslab.organization.url}> repository (build script: ${scriptName}) done.`);
    });
})
    .then()
    .catch();
