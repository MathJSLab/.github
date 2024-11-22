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
    static readonly templateExtension: {
        HTML: string[];
        Markdown: string[];
        WebC: string[];
        JavaScript: string[];
        JSON: string[];
        Liquid: string[];
        Nunjucks: string[];
        Handlebars: string[];
        Mustache: string[];
        EJS: string[];
        Haml: string[];
        Pug: string[];
        TypeScript: string[];
        JSX: string[];
        MDX: string[];
        CoffeeScript: string[];
        CSON: string[];
        SASS: string[];
    };
    static transformImage(images: BaseImageOptions | BaseImageOptions[], options: {
        dir: {
            input: string;
            output: string;
        };
    } & BaseImageOptions): Promise<void>;
}
