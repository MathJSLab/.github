// import fs from 'node:fs';
// import path from 'node:path';
// import yaml from 'js-yaml';
// import YAML from 'yaml';
// import JSON5 from 'json5';
// import TOML from 'smol-toml';
// import CSON from 'cson';
// import * as SASS from 'sass';

import chalk from 'chalk';

global.console.log(chalk.blue(`########################## ${chalk.magenta.bold('Test')} ##########################`));

let frontMatterExampleCount = 0;

export const frontMatterExample = [
    [
        `---
---\r
<content>Template content [${frontMatterExampleCount++}]</content>
Empty front matter.`,
        ['---', '---'],
    ],
    [
        `<content>Template content [${frontMatterExampleCount++}]</content>
No front matter.`,
        ['---', '---'],
    ],
    [
        `---
fdata: "Only front matter, without content"
---`,
        ['---', '---'],
    ],
    [
        `---
fdata: "Only front matter, without content, with a final newline"
---
`,
        ['---', '---'],
    ],
    [
        `---
title: Hello
slug: home
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [`---\r\r\ntitle: Front Matter\n---\n<content>Template content [${frontMatterExampleCount++}]</content>`, ['---', '---']],
    [`---\ntitle: Home\n---\n<content>Template content [${frontMatterExampleCount++}]</content>`, ['---', '---']],
    [`---\nfoo: bar\n---\nThis is an excerpt.\n---\n<content>Template content [${frontMatterExampleCount++}]</content>`, ['---', '---']],
    [
        `---
title: Blog
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [
        `---
title = "TOML"
description = "Front matter"
categories = "front matter toml"
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [
        `---toml
title = "TOML"
description = "Front matter"
categories = "front matter toml"
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
        'toml',
    ],
    [
        `~~~
title: Home
~~~
<content>Template content [${frontMatterExampleCount++}]</content>
This is the {{title}} page.`,
        ['~~~', '~~~'],
    ],
    [
        `---
testconst: 123
testdata: "{{ mathjslab.organization.name }}"
teststr: "testando"
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [
        `---
testconst: 456
testdata: "{ mathjslab.organization.name }"
teststr: "testando"
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [
        `---
dark: {{ mathjslab.colors.dark | JsonStringify }}
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [
        `---
dark: { mathjslab.colors.dark | JsonStringify }
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [
        `   ---
permalink: images.html
---
<content>Template content [${frontMatterExampleCount++}]: espaço antes do delimitador inicial</content>`,
        ['---', '---'],
    ],
    [
        `---${'   '}
permalink: images.html
---
<content>Template content [${frontMatterExampleCount++}]: espaço depois do delimitador inicial</content>`,
        ['---', '---'],
    ],
    [
        `---
permalink: images.html
---${'   '}
<content>Template content [${frontMatterExampleCount++}]: espaço depois do delimitador final</content>`,
        ['---', '---'],
    ],
    [
        `---
# Este é um comentário.
color: blue
permalink: images.html
---
<content>Template content [${frontMatterExampleCount++}]: Comentário no front matter.</content>`,
        ['---', '---'],
    ],
    [
        `---
title: This is a Good Blog Post
tags:
  - CSS
  - HTML
layout: my-layout.njk
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
    [
        `---
title: This is a Very Good Blog Post
author: Zach
tags:
  - JavaScript
---
<content>Template content [${frontMatterExampleCount++}]</content>`,
        ['---', '---'],
    ],
];

process.emitWarning = (warning) => {
    if (warning.includes('Keys with collection values will be stringified')) {
        return;
    }
    console.warn(warning);
};

// const buildRegex = (delim = ['---', '---']) => new RegExp(`^(?:${delim[0]}([^\\-\\r\\n]\\w*)?\\r?\\n(?:([\\s\\S]*?)?\\r?\\n)?${delim[1]}(?:\\r?\\n)?)?([\\s\\S]*)$`);

// frontMatterExample.forEach((example) => {
//     console.log(chalk.yellow(`##########################################################`));
//     const match = example[0].match(buildRegex(example[1] || ['---', '---']));
//     const language = match[1] || 'yaml';
//     const frontMatter = (match[2] || '').replace(/^\s*#[^\n]+/gm, '').trim(); // Remove lines starting with '#';
//     const content = match[3];
//     console.log({
//         language,
//         frontMatter1: (language === 'yaml' ? YAML.parse(frontMatter, { mapAsMap: false }) : frontMatter) || undefined,
//         frontMatter2: language === 'yaml' ? yaml.load(frontMatter) : frontMatter,
//         content,
//     });
// });
// console.log(chalk.yellow(`##########################################################`));

// const delim = ['123', '456'];

// console.log(delim[0][delim[0].length - 1]);

// const arg = '';
// console.log(Boolean(typeof arg !== 'undefined' && arg !== null && (!!arg || typeof arg === 'number')));

// function parseTemplateFrontMatter(input, options) {
//     const result = {};
//     const delimiters = options.delimiters || ['---', '---'];
//     let match = input.match(new RegExp(`^(?:${delimiters[0]}([^\\-\\r\\n]\\w*)?\\r?\\n(?:([\\s\\S]*?)?\\r?\\n)?${delimiters[1]}(?:\\r?\\n)?)?([\\s\\S]*)$`));
//     result.language = match[1] || 'yaml';
//     result.matter = match[2] || '';
//     result.content = match[3] || '';
//     if (options.excerpt) {
//         if (typeof options.excerpt === 'function') {
//         } else if (typeof options.excerpt === 'boolean') {
//         } else if (typeof options.excerpt === 'string') {
//         } else {
//             // error
//         }
//     }
//     return result;
// }

// frontMatterExample.forEach((example) => {
//     console.log(chalk.yellow(`##########################################################`));
//     const result = parseTemplateFrontMatter(example[0], {});
//     // const match = example[0].match(buildRegex(example[1] || ['---', '---']));
//     // const language = match[1] || 'yaml';
//     // const frontMatter = (match[2] || '').replace(/^\s*#[^\n]+/gm, '').trim(); // Remove lines starting with '#';
//     // const content = match[3];
//     // console.log({
//     //     language,
//     //     frontMatter1: (language === 'yaml' ? YAML.parse(frontMatter, { mapAsMap: false }) : frontMatter) || undefined,
//     //     frontMatter2: language === 'yaml' ? yaml.load(frontMatter) : frontMatter,
//     //     content,
//     // });
//     console.log(result);
// });

// const engines = {
//     yaml: {
//         parse: YAML.parse.bind(YAML),
//         stringify: YAML.stringify.bind(YAML),
//     },
//     json: {
//         parse: JSON5.parse.bind(JSON5),
//         stringify: function (obj, options) {
//             const opts = Object.assign({ replacer: null, space: 2 }, options);
//             return JSON5.stringify(obj, opts.replacer, opts.space);
//         },
//     },
//     coffee: {
//         parse: CSON.parse.bind(CSON),
//         stringify: CSON.stringify.bind(CSON),
//     },
//     toml: {
//         parse: TOML.parse.bind(TOML),
//         stringify: TOML.stringify.bind(TOML),
//     },
//     sass: SASS.compile.bind(SASS),
// };
// const yamlExamples = [
//     `title: Hello
// slug: home`,
//     `title: Hello 2
// slug: home
// test: 3
// eleventyComputed: {
//                        data1: "data",
//                        "data2": null,
//                        "data3": 22
//                   }`,
// ];
// yamlExamples.forEach((input) => {
//     console.log(
//         engines.yaml.parse(input, (key, value) => {
//             if (key === 'eleventyComputed') {
//                 console.log('#', value);
//             }
//             return value;
//         }),
//     );
// });

// const tsconfig = JSON.parse(fs.readFileSync(path.resolve('.', 'tsconfig.json'), 'utf-8'));
// console.log(tsconfig);

// function permalinkPrefixExtensionReplaceFactory(prefix, extension) {
//     return (_inputContent, inputPath) => inputPath.replace(new RegExp(`^${prefix}(.*)\.${extension}$`), '$1')
// }
// const permalink = permalinkPrefixExtensionReplaceFactory('\\./input/', 'njk');
// const inputPath = './input/foo/test.json.njk';
// global.console.log(permalink('', inputPath));

// import thisFilePath from './helper/thisFilePath.mjs';
// console.log(thisFilePath());
// console.log(path.sep === '\\');

// import { globSync } from 'glob';
// global.console.log(globSync('./input/test/data/*'));

// import util from 'node:util';
// const obj = { name: 'Alice', age: 25, hobbies: ['reading', 'gaming'] };
// global.console.log(util.inspect(obj, { compact: false, colors: true }));

import createIcon from './build/helper/createIcon.js';

global.console.log(createIcon);

global.console.log(chalk.yellow(`##########################################################`));
