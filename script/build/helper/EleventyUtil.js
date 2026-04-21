// @ts-ignore
import Image from '@11ty/eleventy-img';
export default class default_1 {
    /**
     * Default template extensions and their aliases. The first element of the array is the default extension and others are aliases.
     */
    static templateExtension = {
        HTML: ['html', 'htm', 'xhtml', 'shtml'],
        Markdown: ['md', 'markdown', 'txt', 'mkd', 'mdown'],
        WebC: ['webc'],
        JavaScript: ['11ty.js', 'js', 'cjs', 'mjs'],
        JSON: ['json', 'jsonc', 'geojson', 'topojson'],
        Liquid: ['liquid', 'liquify'],
        Nunjucks: ['njk', 'nunj', 'nunjucks'],
        Handlebars: ['hbs', 'handlebars', 'hbs.html'],
        Mustache: ['mustache', 'mustach'],
        EJS: ['ejs', 'ejs.html'],
        Haml: ['haml', 'hamlc'],
        Pug: ['pug', 'jade'],
        TypeScript: ['ts', 'tsx'],
        JSX: ['jsx', 'jsx.js'],
        MDX: ['mdx', 'mdjsx'],
        CoffeeScript: ['coffee', 'cs', 'cjsx'],
        CSON: ['cson', 'csn'],
        SASS: ['scss', 'sass'],
    };
    static async transformImage(images, options) {
        if (!Array.isArray(images)) {
            images = [images];
        }
        images.map(async function (image) {
            const imageOptions = Object.assign({}, image);
            delete imageOptions.src;
            if (typeof imageOptions.outputDir === 'undefined') {
                imageOptions.outputDir = options.dir.output;
            }
            const src = options.dir.input + '/' + image.src;
            let metadata;
            try {
                console.log(`Building image from source: ${src} ...`);
                // @ts-ignore
                metadata = await Image(src, {
                    // @ts-ignore
                    filenameFormat: function (_id, src, width, format, _options) {
                        const result = `${src.split('/').pop().split('.')[0]}-${width}.${format}`;
                        console.log(`Building image format: ${format}, width: ${width}, output: ${result}`);
                        return result;
                    },
                    ...imageOptions,
                });
            }
            catch (err) {
                console.error(`Error building image from source: ${src}: ${err.message}`);
                throw err;
            }
            console.log(`Building image from source: ${src} done.`);
            return { image, metadata };
        });
    }
}
