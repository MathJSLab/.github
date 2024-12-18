declare namespace _default {
    export { readFileBom };
    export { readFileBomSync };
    export { templateExtension };
    export { templateFormatAlias };
    export { defaultDirectories };
    export { defaultEleventyOptions };
    export { console };
    export { parseEngine };
    export { configGetPlugin };
    export { configAddEntries };
    export { configAddFileContentAsGlobalData };
    export { prefixExtensionRemoveFactory };
    export { templateEngine };
    export { configAddTemplateFormat };
    export { configAddRenderTemplateTools };
    export { run };
    export { transformImage };
    export { configAddDateTimeTools };
}
export default _default;
export namespace templateExtension {
    let HTML: string[];
    let Markdown: string[];
    let WebC: string[];
    let JavaScript: string[];
    let JSON: string[];
    let Liquid: string[];
    let Nunjucks: string[];
    let Handlebars: string[];
    let Mustache: string[];
    let EJS: string[];
    let Haml: string[];
    let Pug: string[];
    let TypeScript: string[];
    let JSX: string[];
    let MDX: string[];
    let CoffeeScript: string[];
    let CSON: string[];
    let SASS: string[];
}
/**
 * Template format aliases.
 */
export const templateFormatAlias: {
    html: string;
    htm: string;
    xhtml: string;
    shtml: string;
    HTML: string;
    md: string;
    markdown: string;
    txt: string;
    mkd: string;
    mdown: string;
    Markdown: string;
    webc: string;
    WebC: string;
    '11ty.js': string;
    js: string;
    cjs: string;
    mjs: string;
    javascript: string;
    JavaScript: string;
    json: string;
    jsonc: string;
    geojson: string;
    topojson: string;
    JSON: string;
    JSONC: string;
    liquid: string;
    liquify: string;
    Liquid: string;
    njk: string;
    nunj: string;
    nunjucks: string;
    Nunjucks: string;
    hbs: string;
    handlebars: string;
    'hbs.html': string;
    Handlebars: string;
    mustache: string;
    mustach: string;
    Mustache: string;
    ejs: string;
    'ejs.html': string;
    EJS: string;
    haml: string;
    hamlc: string;
    Haml: string;
    pug: string;
    jade: string;
    Pug: string;
    ts: string;
    tsx: string;
    typescript: string;
    TypeScript: string;
    jsx: string;
    'jsx.js': string;
    JSX: string;
    mdx: string;
    mdjsx: string;
    MDX: string;
    coffee: string;
    cs: string;
    cjsx: string;
    coffeescript: string;
    CoffeeScript: string;
    cson: string;
    csn: string;
    CSON: string;
    scss: string;
    sass: string;
    SCSS: string;
    SASS: string;
};
export namespace defaultDirectories {
    let input: string;
    let data: string;
    let includes: string;
    let layouts: string;
    let output: string;
}
export namespace defaultEleventyOptions {
    export { defaultDirectories as dir };
    export let htmlTemplateEngine: string;
    export let markdownTemplateEngine: string;
    export let dataTemplateEngine: string;
    export let templateFormats: string[];
}
export namespace console {
    export { consolePrefix as prefix };
    export { logFactory };
    export function log(...args: any[]): void;
    export function warn(...args: any[]): void;
    export function error(...args: any[]): void;
    export function debug(...args: any[]): void;
    export let table: {
        (tabularData?: any, properties?: string[]): void;
        (tabularData: any, properties?: readonly string[]): void;
    };
}
export namespace parseEngine {
    namespace yaml {
        let parse: typeof YAML.parse;
        let stringify: typeof YAML.stringify;
    }
    namespace json {
        let parse_1: typeof JSON5.parse;
        export { parse_1 as parse };
        export function stringify_1(obj: any, options: any): string;
        export { stringify_1 as stringify };
    }
    namespace coffee {
        let parse_2: typeof CoffeeScript.compile;
        export { parse_2 as parse };
        export function stringify_2(): never;
        export { stringify_2 as stringify };
    }
    namespace cson {
        let parse_3: (data: string, opts?: object, next?: any) => any;
        export { parse_3 as parse };
        let stringify_3: (data: any, opts?: object, indent?: any) => string;
        export { stringify_3 as stringify };
    }
    namespace toml {
        let parse_4: typeof import("smol-toml").parse;
        export { parse_4 as parse };
        let stringify_4: typeof import("smol-toml").stringify;
        export { stringify_4 as stringify };
    }
}
/**
 * Get plugin from configuration if it exists.
 * @param {*} eleventyConfig
 * @param {*} name
 * @returns
 */
export function configGetPlugin(eleventyConfig: any, name: any): any;
/**
 * Add entries from obj to configuration.
 * @param {*} eleventyConfig
 * @param {*} obj
 * @param {*} add
 */
export function configAddEntries(eleventyConfig: any, obj: any, add: any): void;
/**
 * Adds the contents of files to the data cascade (global data).
 * @param {*} eleventyConfig
 * @param {*} dataPath
 * @param {*} slugify
 * @param {*} extFirstKey
 */
export function configAddFileContentAsGlobalData(eleventyConfig: any, dataPath: any, slugify: any, extFirstKey?: any): void;
/**
 * Factory for function that removes a prefix and extension for inputPath (to be used in permalink).
 * @param {*} prefix
 * @param {*} extension
 * @returns
 */
export function prefixExtensionRemoveFactory(prefix: any, extension: any): (_inputContent: any, inputPath: any) => any;
export namespace templateEngine {
    export namespace Nunjucks_1 {
        import extension = templateExtension.Nunjucks;
        export { extension };
        export function config(eleventyConfig: any, _format: any, permalinkPrefixRemove: any, _engine: any): void;
    }
    export { Nunjucks_1 as Nunjucks };
    export namespace SASS_1 {
        import extension_1 = templateExtension.SASS;
        export { extension_1 as extension };
        export function config_1(eleventyConfig: any, _format: any, permalinkPrefixRemove: any, _engine: any): void;
        export { config_1 as config };
    }
    export { SASS_1 as SASS };
    export namespace CoffeeScript_2 {
        import extension_2 = templateExtension.CoffeeScript;
        export { extension_2 as extension };
        export function config_2(eleventyConfig: any, _format: any, permalinkPrefixRemove: any, _engine: any): void;
        export { config_2 as config };
    }
    export { CoffeeScript_2 as CoffeeScript };
}
/**
 * Adds template formats to Eleventy configuration.
 * @param {*} eleventyConfig
 * @param {*} formats
 * @param {*} permalinkPrefixRemove
 */
export function configAddTemplateFormat(eleventyConfig: any, formats?: any, permalinkPrefixRemove?: any): void;
/**
 * # Render Template Tools
 *
 * This function is a factory, configuration and setup for render template
 * Tools.
 * @param {TemplateConfig} [eleventyConfig]
 * @param {String|Boolean|null} [rootPath]
 * @param {Object} defaultTemplateData
 * @param {Object} defaultTemplateOptions
 * @param {Object} renderPluginOptions
 *
 * This function performs the following tasks:
 *
 * 1. Adds the `EleventyRenderPlugin` to configuration if it has not already
 *    been added to the plugins. This plugin defines the `renderTemplate` and
 *    `renderFile` shortcodes, as well as the `renderContent` filter.
 * 2. Adds the `renderTemplateFile` shortcode and the filter of the same name.
 *
 * The `renderTemplate` and `renderFile` shortcodes, as well as the
 * `renderContent` filter, are added by the `EleventyRenderPlugin` plugin. The
 * `renderTemplateFile` shortcode and filter are generated and added by this
 * factory function.
 *
 * # Usage
 *
 * ## `renderTemplate` Paired Shortcode
 *
 * Use the `renderTemplate` paired shortcode to render a template string.
 * ```
 * {% renderTemplate "md" %}
 * # I am a title
 *
 * * I am a list
 * * I am a list
 * {% endrenderTemplate %}
 * ```
 *
 * The content inside of the shortcode will be rendered using Markdown
 * (`"md"`). Front matter is not yet supported.
 *
 * The first argument to renderTemplate can be any valid
 * [`templateEngineOverride`](https://www.11ty.dev/docs/languages/#templateengineoverride-examples)
 * value. You can even use "liquid,md" to preprocess markdown with liquid. You can use
 * [custom template types](https://www.11ty.dev/docs/languages/custom/) here too.
 *
 * **INFO:** The one exception here is that `{% renderTemplate "11ty.js" %}` JavaScript string templates are not yet supported—use `renderFile` below instead.
 *
 * ### Pass in data
 *
 * Both the [`eleventy`](https://www.11ty.dev/docs/data-eleventy-supplied/#eleventy-variable) and [`page` variables](https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable) are available inside of these templates by default. If you want to pass in additional data, you can do so like this:
 *
 * ```
 * ---
 * myData:
 *   myKey: myValue
 * ---
 * {% renderTemplate "liquid", myData %}
 * {{ myKey }}
 * {% endrenderTemplate %}
 * ```
 *
 * Outputs `myValue`.
 *
 * ## `renderFile` Shortcode
 *
 * Use the `renderFile` shortcode to render an include file.
 *
 * ```
 * {% renderFile "./_includes/blogpost.md" %}
 * ```
 * The first argument to `renderFile` is a project root relative path to any
 * template file. Front matter inside of the target files is not yet
 * supported. The template syntax used is inferred by the file extension.
 *
 * Note that you can use files supported by any
 * [custom file extensions](https://www.11ty.dev/docs/languages/custom/)
 * you’ve added too!
 *
 * ### Pass in data
 *
 * Both the
 * [`eleventy`](https://www.11ty.dev/docs/data-eleventy-supplied/#eleventy-variable)
 * and [`page` variables](https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable)
 * are available inside of these templates by default. If you want to pass in
 * additional data, you can do so like this:
 *
 * ```
 * ---
 * myData:
 *   myKey: myValue
 * ---
 * {% renderFile "./_includes/blogpost.md", myData %}
 * ```
 *
 * ### Override the target file syntax
 *
 * The syntax is normally inferred using the file extension, but it can be
 * overridden using a third argument. It can be any valid
 * [`templateEngineOverride`](https://www.11ty.dev/docs/languages/#templateengineoverride-examples)
 * value. You can even use `"liquid,md"` to preprocess markdown with liquid.
 *
 * ```
 * ---
 * myData:
 *   key: value
 * ---
 * {% renderFile "./_includes/blogpost.md", myData, "njk" %}
 * ```
 *
 * Will render `blogpost.md` using Nunjucks instead of Markdown!
 *
 * ## `renderContent` Filter
 *
 * Directly render a string of arbitrary template content.
 *
 * Consider the following Nunjucks template:
 *
 * ```
 * ---
 * myContent: "{{ 'Second' }}"
 * ---
 * {% renderTemplate %}{{ myContent }}{% endrenderTemplate %} from renderTemplate
 * {{ myContent | renderContent("njk") }} from renderContent
 * ```
 *
 * Outputs:
 *
 * ```
 * {{ 'Second' }} from renderTemplate
 * Second from renderContent
 * ```
 *
 * ## `renderTemplateFile` Shortcode and Filter
 *
 *
 *
 *
 */
export function configAddRenderTemplateTools(eleventyConfig?: TemplateConfig, rootPath?: string | boolean | null, defaultTemplateData: Object, defaultTemplateOptions: Object, renderPluginOptions: Object): void;
/**
 * Runs Eleventy, passing the configuration and options. Executes callback if
 * passed. Executes error if passed and there is an error.
 * @param {*} config
 * @param {*} options
 * @param {*} callback
 * @param {*} error
 * @returns
 */
export function run(config: any | undefined, options: any, callback: any, error: any): Promise<any>;
/**
 * Transform image files.
 * @param {*} transform
 * @param {*} options
 * @returns
 */
export function transformImage(transform: any, options: any): Promise<any[]>;
/**
 * Adds useful shortcodes and filters to the configuration for dealing with dates and times.
 * https://moment.github.io/luxon/#/formatting
 * @param {*} eleventyConfig
 */
export function configAddDateTimeTools(eleventyConfig: any): void;
declare namespace consolePrefix {
    export { prefix };
    export { color };
    export let indentation: undefined;
    export let colored: undefined;
}
/**
 * Console log functions factory.
 * @param {Object} options
 * @returns A log function.
 */
declare function logFactory(options?: Object): (...args: any[]) => void;
import YAML from 'yaml';
import JSON5 from 'json5';
import CoffeeScript_1 from 'coffeescript';
export { readFileBom, readFileBomSync };
