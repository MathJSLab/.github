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
    const testDir = path.join(__dirname, 'input/test');
    let testList = '';
    fs.readdirSync(testDir).forEach(entry => {
        const testDirEntry = path.join(testDir, entry);
        const stats = fs.statSync(testDirEntry);
        if (stats.isFile()) {
            const file = path.basename(entry, path.extname(entry));
            let caption = path.basename(file, path.extname(file)).replace(/\-/g, ' ');
            caption = caption.charAt(0).toUpperCase() + caption.slice(1);
            if (!['README.md', 'LEIAME.md', 'LEAME.md'].includes(file)) {
                testList += `* [${caption}](${file})\r\n`;
            }
        }
    });
    fs.writeFileSync(path.join(partsDir, 'test-data-list.md'), testList);
    fs.readdirSync(partsDir).forEach(entry => {
        const partsDirEntry = path.join(partsDir, entry);
        const stats = fs.statSync(partsDirEntry);
        if (stats.isDirectory()) {
            fs.readdirSync(partsDirEntry).forEach(file => {
                eleventyConfig.addGlobalData(`${path.basename(file, path.extname(file)).replace(/\-/g, '_')}_${entry}_${path.extname(file).slice(1)}`, fs.readFileSync(path.join(partsDirEntry, file), 'utf-8'));
            });
        } else if (stats.isFile()) {
            eleventyConfig.addGlobalData(`${path.basename(entry, path.extname(entry)).replace(/\-/g, '_')}_${path.extname(entry).slice(1)}`, fs.readFileSync(partsDirEntry, 'utf-8'));
        }
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
        templateFormats: ['njk'],
    };
}
