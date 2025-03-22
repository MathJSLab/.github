import os from 'node:os';
import fs from 'node:fs';
import path from 'node:path';
import util from 'node:util';
import { v4 as uuid } from 'uuid';
import chalk from 'chalk';
// @ts-ignore
import Eleventy, { EleventyRenderPlugin } from '@11ty/eleventy';
// @ts-ignore
import Image from '@11ty/eleventy-img';
import JSON5 from 'json5';
import YAML from 'yaml';
import TOML from 'smol-toml';
import CSON from 'cson';
import CoffeeScript from 'coffeescript';
// import sass from 'sass';

export type ImageFormat = 'webp' | 'jpeg' | 'png' | 'svg' | 'avif' | 'ico';
export type ImageFormatWithAliases = ImageFormat | 'jpg' | 'svg+xml';
export type BaseImageOptions = {
    src?: string | string[];
    widths?: number | number[] | 'auto' | null;
    formats?: ImageFormatWithAliases | ImageFormatWithAliases[] | 'auto' | null;
    outputDir?: string | null;
};

export default abstract class {
    /**
     * Default template extensions and their aliases. The first element of the array is the default extension and others are aliases.
     */
    public static readonly templateExtension = {
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
    public static async transformImage(images: BaseImageOptions | BaseImageOptions[], options: { dir: { input: string; output: string } } & BaseImageOptions) {
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
            } catch (err: any) {
                console.error(`Error building image from source: ${src}: ${err.message}`);
                throw err;
            }
            console.log(`Building image from source: ${src} done.`);
            return { image, metadata };
        });
    }
}
