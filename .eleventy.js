const fs = require('node:fs');
const path = require('node:path');
module.exports = function (eleventyConfig) {
    eleventyConfig.addExtension('njk', {
        compileOptions: {
            permalink: (_contents, inputPath) => inputPath.replace(/^\.\/input\//, '').replace(/\.njk$/, ''),
        },
    });
    eleventyConfig.setNunjucksEnvironmentOptions({
        autoescape: false,
    });
    const partsDir = path.join(__dirname, 'data/parts');
    fs.readdirSync(partsDir).forEach(file => {
        eleventyConfig.addGlobalData(`${path.basename(file, path.extname(file)).replace(/\-/g, '_')}_${path.extname(file).slice(1)}`, fs.readFileSync(path.join(partsDir, file), 'utf-8'));
    });
    eleventyConfig.addPassthroughCopy('input/profile/mathjslab-logo.svg');
    return {
        dir: {
            input: 'input',
            data: '../data',
            output: './'
        },
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        templateFormats: ['html', 'md', 'njk'],
    };
}
