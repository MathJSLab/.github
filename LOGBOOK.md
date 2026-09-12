# MathJSLab Logbook

This file contains general information about the actions of the [MathJSLab Project](https://mathjslab.com/) that go beyond the scope of the individual projects. In other words, what cannot be recorded in the `CHANGES.md` file of each software project, or the general actions of the organization, are recorded here, indexed by date.

## 2026-09-12

- Pre-publication update for the organization's repository after completing batch-output layout corrections and sharing plotting and numerical functions between `mathjslab-app` and `mathjslab-calc`.
- The reusable `batch-output` component now expands vertically with each result, confines overflow handling to horizontal result scrolling, and lets embedded Plotly output fit its container without excess space or vertical scrollbars.
- `src/PlotEngine.ts` and `src/outputFunction.ts` are now shared sources, preserving the same plotting implementation and rendering protocol in the full application and the mobile-oriented calculator.
- The new `src/commonExternalFunctionTable.ts` provides the common `summation` and `productory` implementations, allowing each application to compose its own final external function table without duplicating numerical code.
- The App retains its additional file and document functions, while the Calc receives only the shared plotting functions, `summation`, and `productory`, without the external `help` command.
- Resource copy configurations for `mathjslab-app` and `mathjslab-calc`, together with their generated mirrors, now distribute the shared plot engine, output registry, and common external function table.

## 2026-09-11

- Pre-publication update for the organization's repository after consolidating the TypeScript baseline and preparing reusable batch output for integration into `mathjslab-app`.
- The new `types/tsconfig.webapp.json` centralizes the strict compiler policies shared by `mathjslab-app`, `mathjslab-batch`, and `mathjslab-calc`, while each application retains its local build exclusions and additional environment types.
- Resource copy configurations for the three web applications and their generated mirrors now distribute `tsconfig.webapp.json` as the common base configuration.
- The reusable `batch-output` component now accepts items without pre-rendered HTML and returns each result container from `appendItem`, allowing evaluators to append MathML, Markdown, plots, and other rich DOM output directly.
- Changing the `show-command` option now updates command visibility without rebuilding result elements, so rendered plots and other stateful output remain intact.
- The component honors the standard `hidden` attribute, exposes its result container as `HTMLDivElement`, and has been added to the `mathjslab-app` resource manifest for the new alternative output mode.

## 2026-09-10

- Pre-publication update for the organization's repository after coordinated build, metadata, and TypeScript configuration work across `mathjslab-app`, `mathjslab-batch`, and `mathjslab-calc`.
- A reusable Eleventy entry point was centralized in `script/eleventy.build.mjs`. It reads each project's `eleventy.build.json`, installs the shared filters, shortcodes, and template rendering tools from `EleventyUtil`, and provides the three applications with the same data-driven static-build workflow.
- A common flat ESLint configuration was added in `script/eslint.config.cjs`, aligning TypeScript application sources, JavaScript and module files, build helpers, generated-file exclusions, and Prettier integration while preserving the distinct TypeScript project used by scripts.
- The new `includes/manifest.json.njk` template centralizes generation of the applications' PWA manifests, including identity, display settings, theme colors, categories, scope, and the complete set of MathJSLab application icons from 16 to 512 pixels.
- Application structured data was consolidated in `includes/app-json-ld.njk`. The shared template composes the existing Nunjucks JSON-LD macros into a consistent graph for the application, localized web page, MathJSLab website, and publishing organization.
- SCSS module declarations were normalized through the new generic `types/scss.d.ts` definition and the corrected default export in `types/styles.scss.d.ts`, keeping TypeScript and Webpack imports consistent for ordinary and component stylesheet modules.
- The resource copy manifests and their generated mirrors were expanded so the three web applications receive the shared Eleventy and ESLint configurations, manifest and JSON-LD templates, and SCSS declarations from the organization's repository.

## 2026-09-07

- Pre-publication update for the organization's repository after coordinated interface and integration work across `mathjslab-app`, `mathjslab-batch`, `mathjslab-calc`, and `mathjslab-www`.
- The shared `appearance-mode` component now provides separate green and white light/dark icon variants and automatically selects the appropriate contrast inside regular and green control panels. The obsolete single-color theme icons were replaced, and the resource copy configurations were updated to distribute all four variants.
- Theme selection was simplified across `appearance-mode` and `application-wrapper`: local-storage persistence and the related `storage-key` API were removed, so each page starts from the browser's current color-scheme preference while still allowing the user to switch modes for the active page.
- The shared MathJSLab logo assets and their generated raster derivatives were refreshed, and the web applications were aligned so page logos and favicons follow explicit light/dark mode changes as well as the browser preference.
- The shared `language-switcher` was further compacted into a consistent icon-only control at every viewport size. Its former single icon and responsive text label were replaced with green and white icon variants that automatically follow the surrounding regular or green panel, matching the contrast behavior introduced for `appearance-mode`.
- Resource manifests for all four web projects now distribute both language-switch icon variants, and the obsolete single-color `language-switch.svg` asset was removed from the shared and generated image sets.
- The `command-prompt` and `batch-code-editor` components received contrast fixes discovered during integration testing. Focused editors now use the active application surface instead of a yellow background, command prompts retain the green panel surface while unfocused, and text selections use a stronger blue highlight in both light and dark modes.
- The reusable `batch-output` component now exposes a reflected `show-command` option through its `showCommand` getter and setter. It retains rendered items and redraws them when the option changes, allowing `mathjslab-batch` to switch between command-and-result output and result-only output without running the batch again.
- The generated organization profile, image catalog, helper script builds, test fixtures, workspace package metadata, and per-project resource copies were regenerated to keep the published repository synchronized with the latest shared sources.

## 2026-09-06

- Pre-publication update for the organization's repository after another round of work across the MathJSLab web projects.
- The shared visual identity of the Web Components was further harmonized, especially around toolbar controls, buttons, language selection, appearance mode selection, and the outer application wrapper used by the web applications.
- The `control-bar` Web Component was added as a reusable navigation/control container for command buttons and interface controls. It supports horizontal and vertical layouts, start/center/end/stretch alignment, full or fit width, optional green panel styling, and automatic or preserved button styling.
- Shared button styles were centralized in `includes/styles/component/_button.scss` and mirrored into the distributed style resources, giving projects a common green and gray button vocabulary with consistent hover, active, border, shadow, and spacing behavior.
- The `appearance-mode`, `language-switcher`, and `application-wrapper` styles and templates were refined to better match the shared component palette and spacing conventions used in `mathjslab-app`, `mathjslab-batch`, `mathjslab-calc`, and `mathjslab-www`.
- The `batch-code-editor` component was corrected after integration testing in the web projects: value changes and user input now trigger the shared resize path, the textarea height follows its actual scroll height without an extra fixed offset, and the minimum editor height is controlled through a CSS custom property.
- Resource copy configurations were refreshed so the dependent projects receive the latest shared components, component styles, generated assets, Eleventy configuration files, and helper script builds from the organization's repository.
- The generated organization profile, image metadata, test outputs, and repository workspace package were regenerated as part of the publication routine.

## 2026-09-05

- Pre-publication update for the organization's repository after work across the MathJSLab web applications to harmonize the visual identity and behavior of shared Web Components.
- The shared components were refined so `mathjslab-app`, `mathjslab-batch`, `mathjslab-calc`, and `mathjslab-www` can present a more consistent interface when they receive files copied from the organization's repository.
- The `application-wrapper`, `appearance-mode`, `command-prompt`, `command-prompt-list`, `keyboard-panel`, `batch-code-editor`, and `batch-output` components received layout, styling, and interaction refinements made while testing them in the different applications.
- Shared panel styling was introduced and adjusted in `includes/styles/component/_panel.scss`, reducing duplicated visual rules and helping collapsible panels, fixed scroll panels, command prompts, and related controls follow the same spacing, border, color, and surface conventions.
- The `keyboard-panel` component was corrected to blend into the surrounding calculator layout with a transparent panel background, while numeric keys now use the shared green border color to better match the MathJSLab visual identity.
- Several bugs found during the integration work in the individual projects were corrected in the reusable source files, especially around component layout, responsive behavior, appearance mode handling, command entry controls, batch input/output presentation, and generated profile/test data refreshes.
- The generated organization profile files and resource copy configuration files were refreshed during the publication routine so the latest shared components, styles, helper scripts, and assets can be propagated consistently to the dependent repositories.

## 2026-08-31

- Pre-publication update for the organization's repository after another round of reusable interface work across the MathJSLab web applications.
- The `application-wrapper` Web Component was added to centralize the outer application shell used by MathJSLab web applications. It brings together the project logo, localized title and description, language switching, appearance mode selection, action/status slots, the main workspace slot, and an optional footer slot.
- The new wrapper also synchronizes theme-aware favicon links with the current light/dark appearance mode, so applications copied from the shared infrastructure can keep their document icons aligned with the active theme.
- The resource copy configurations for `mathjslab-app`, `mathjslab-batch`, and `mathjslab-calc` were updated to distribute the new `application-wrapper` component and its template and SCSS files from the organization's repository.
- The JSON copy configuration files for the generated `resource/` directories were refreshed to match the corresponding `input/resource/` configuration files used during publication.

## 2026-08-30

- Pre-publication update for the organization's repository after coordinated work across the MathJSLab web projects.
- Reusable Web Components that had been generalized while working on the web applications and project pages were consolidated in the organization's repository under `src/components/`, together with their TypeScript factories, shared interfaces, templates, and SCSS styles. This includes the appearance mode selector, language switcher, collapsible content panel, fixed scroll panel, command prompt, command prompt list, batch code editor, and batch output components.
- The `input/resource/**/copy.repo.config.json` files were updated so the reusable Web Components and their supporting files can be copied from the organization's repository into the projects that use them, especially `mathjslab-app`, `mathjslab-batch`, `mathjslab-calc`, and `mathjslab-www`.
- Shared Nunjucks macros were centralized in `includes/head-macros.njk` for use by the web applications and the project page. These macros now provide common `<head>` generation for basic metadata, Open Graph, Twitter Card, canonical and alternate links, favicon definitions, and JSON-LD structured data for web pages, websites, applications, application lists, people, and organizations.
- The shared Eleventy support files, SCSS constants, generated logo assets, favicons, Open Graph image, language/theme icons, pipeline illustrations, and selected paper/archive assets were prepared for distribution through the organization's resource copy configuration.
- The reusable build infrastructure was aligned across the projects, including the shared Eleventy configuration templates for `mathjslab-batch`, `mathjslab-calc`, and `mathjslab-www`, plus common helper scripts such as `EleventyUtil.mjs`, `toIco.ts`, `mark-crono.ts`, and `git-commit.cjs`.

## 2026-08-28

- The file `includes/head-macros.njk` was created to centralize macro definitions for use in the `<head>` section of HTML files, specifically for defining SEO-related entries.

## 2026-08-23

- The project page (`mathjslab-calc`) was implemented using SCSS templates in the same way as in the `mathjslab-app` project, by copying files from the organization's repository.

## 2026-08-22

- Introduction of Nunjucks templates in `include/head-*.njk` for use in the HTML header.

## 2026-08-20

- Bug fix: the file `script/helper/EleventyUtil.mjs` contained a call to `SASS.compileString`. The correct call is `sass.compileString`.
- The project page (`mathjslab-www`) was implemented using SCSS templates in the same way as in the `mathjslab-app` project, by copying files from the organization's repository.

## 2026-08-19

- The `script/mathjslabLogoSvg.mjs` file has been enhanced to generate the logo with specified width and height, in order to produce an image suitable for conversion to PNG and use in Open Graph records.

## 2026-08-18

- Removed large sizes from the `.ico` files. Now only the 16, 32, and 48 sizes remain.

## 2026-08-15

- The language switch icon variants, `input/images/language-switch-green.svg` and `input/images/language-switch-white.svg`, together with `input/images/matlab-icon.svg` and `octave-logo.svg`, were added to the organization's repository and the `mathjslab-www` project.
- Bug fix: Prettier was breaking `.svg` files, especially those generated by Inkscape. The `.prettierrc`, `.prettierignore`, and `package.json` files were modified to completely disable formatting for `.svg` files. This change was applied across all projects in the organization.
- Several image files representing the MathJSLab execution flow - located at `input/images/mathjslab-pipeline-*.{svg|webp}` - were added to the organization's repository and the `mathjslab-www` project.

## 2026-08-09

- Images explaining the MathJSLab execution flow have been added to `input/images`.

## 2026-08-03

- The trailing newline was removed from files in `data/files/**`. The directory was included in the `.prettierrc` file.

## 2026-08-01

- ISBN and DOI have been added to the Organization's homepage, in the list of repositories. The reference (to the package and the web application) at the bottom of the homepage has been removed. The file `data/files/batch-isbn-doi.md` was created.

## 2026-07-28

- The `mathjslab-batch` repository has been added to the organization's repository list (used to generate `README.md`, `LEAME.md`, and `LEIAME.md`) and in the `input/resource/` directory.

## 2026-07-27

- Script `mark-crono.ts` added in the project `mathjslab-www`. DOI assigned to `mathjslab-calc` project.

## 2026-07-24

- The `mathjslab-calc` repository has been added to the organization's repository list (used to generate `README.md`, `LEAME.md`, and `LEIAME.md`).

## 2026-07-23

- The `mathjslab-calc` repository was created, featuring a new `mathjslab` web application. Additionally, the entire infrastructure for the new repository was set up within the organization's repository.

## 2026-07-21

- SVG logo files for npm, GitHub, and MIT were included as assets in the `mathjslab-www` project.

## 2026-07-20

- Files in the `script/helper/` and `src/components` directories modified. DOI badges were modified.

## 2026-07-19

- The file `input/matjslab-www/eleventy.build.json.njk` has been modified. Launch of the MathJSlab project page (`mathjslab-www`).

## 2026-07-18

- The file `script/helper/buildKeyTable.ts` was modified in the `mathjslab` repository and moved to the organization's repository.

## 2026-07-16

- The helper script `script/helper/EleventyUtil.mjs` has been modified. It now preserves the original output path behavior while allowing explicit Eleventy permalinks to override it.

## 2026-07-12

- The `script/helper/mark-crono.ts` helper was created in the `mathjslab` repository and then copied to `mathjslab-app` repository and moved to the organization's repository. The `"crono:start"`, `"crono:mark"` and `"crono:stop"` scripts in the `package.json` has been created.
- The `script/tsconfig.json` has been improved due to dependencies updated and the `script/tsconfig.node.json` file has been created to support scripts build.

## 2026-04-21

- The `script/tsconfig.json` has been improved due to dependencies updated.

## 2026-01-28

- The `script/helper/code-stats.ts` helper was created in the `mathjslab` repository and then copied to `mathjslab-app` repository and moved to the organization repository. The `"code:stats"` and `"code:stats:summary"` scripts in the `package.json` has been created.
- Year's references modifyed to `2026`.
- First MathJSLab release of 2026 (chronos).

## 2025-10-26

- In all of the organization's projects, the system for downloading raw files from the repository on GitHub has been replaced by cloning the repository and copying selected files.
- The MathJSLab logo in the .md files has been modified to use logo image in the website (mathjslab-www repository).

## 2025-10-25

- The script `script/helper/copy-repo-files.ts` has been created (the files `input/resource/**/copy.repo.config.json` has also been created).
- The file `rplace.fix-linebreak.json` has been created (the script `"pregit:add"` in the `package.json` file has been created too).

## 2025-10-19

- Changes in `.prettierignore` file.
- The file `replace.fix-endnl.json` has been created to run "postformat" script, replacing end-of-file new line in `.md` files in `data/` directory.

## 2025-10-18

- The `src/importUMD.ts` file in the `mathjslab-app` repository has been deprecated and then moved to the organization repository.
- Changes in `.prettierignore` file.

## 2025-10-17

- Changes in the `input/resource/mathjslab-app/download-config.json.njk`. The `script/helper/prettier-math-protect.ts` script was removed from list due to changes in math markdown patterns in the `mathjslab-app` project. The `script/helper/prettier-math-protect.ts` and `script/helper/prettier-unescape-math.ts` files were kept in the organization repository to serve as the basis for other command line utility scripts.

## 2025-10-16

- The `ts-node` and `ts-loader` packages were installed as development dependencies. The `"tsx"` script was created in the `package.json` file.
- The `script/helper/prettier-unescape-math.ts` and `script/helper/prettier-math-protect.ts` script files was created in the `mathjslab-app` repository and then moved to the organization repository. The `"preformat"` and `"postformat"` script using `script/helper/prettier-math-protect.ts` was created in the `package.json` file.

## 2025-10-15

- The `.prettierrc` file has been improved to format `.md` files too.
- The `rimraf` package has been removed from development dependencies. The scripts in the `package.json` file have been changed to use `shx rm -rf` instead of `rimraf`.

## 2025-09-21

- The `script/helper/buildInterfaceKeyTable.ts` helper was created in the `mathjslab` repository and then moved to the organization repository.
- The `src/includes/miscBibtexEntry.njk` macro file was created in the `mathjslab-app` repository and then moved to the organization repository.
- All dependencies have been updated.
- More advertising bookmarks has been added in the `advertising/` diretory.

## 2025-08-30

- The `@resvg/resvg-js` package has been installed as development dependency. The `script/helper/toIco.ts` file has been improved to support image conversion through `resvg-js` too. This was done because of warnings that started occurring during the build after the last dependencies update. The `script/helper/createIcon.ts` file has been unused and removed.

## 2025-08-24

- Dependencies updated in all projects.
- MathJSLab logo updated (`script/mathjslabLogoSvg.mjs` file). Bug fix in Pi symbol and changes in the polynomial expression: constant added. Fine-grain optimizations (borders, margins, optimizations in the SVG code generated).This was done so the logo could be printed on advertising flyers and bookmarks. The 'advertising' directory was created with related files, including the 190 x 50 mm bookmark in SVG and PDF formats. All organization projects have been updated (logo and dependencies).

## 2025-03-30

- The `eleventy.build.json` file has been created.

## 2025-03-28

- The `src/` and `types/` directories were created in the organization repository to hold common source files and type definitions for projects. The `src/components/` directory was populated with common files (types and factories) from `mathjslab-app` to define common web components. These files were added to the `resource/mathjslab-app/download.config.json` file. The `eslint.config.cjs` file was modified for this reason: a set of rules for these files was added. A `tsconfig.json` file in the root directory was created just to run ESLint.

## 2025-03-27

- New templates have been created and now the contents of the `resource/` directory are completely generated by the templates in `input/resource/`.

## 2025-03-24

- The `.scss` files has been updated to remove deprecated functions. The option to silence warnings in the `compileSCSS` filter (`script/helper/EleventyUtil.mjs`) has been removed.

## 2025-03-22

- Improvements to prettier configuration have been made to format .scss files as well. The `.prettierrc` and `.prettierignore` files has been included in the listing of common files in the `resource/**/download.config.json` directory.
- Imports of type `import * as name from ...` have been replaced with `import name from ...` wherever possible.

## 2025-03-15

- More files added to `includes/styles/` directory.

## 2025-03-13

- The functions and templates for generating the MathJSLab logo in SVG format have been improved: the pi symbol, which was in text form, was converted to a path. The reason was that some devices do not have the 'Symbol' font. This way the SVG file becomes absolutely standalone, in fact.
- The `includes/styles/` directory has been created with `SASS` templates common to the projects. Other style definitions include element classes in the logo SVG files. The `compileSCSS` filter has been included in the `script/helper/EleventyUtil.mjs` file to process and include `.scss` templates directly in Nunjucks templates.
- A badge pointing to the [OpenAIRE](https://explore.openaire.eu/) search for MathJSLab has been added to the documentation.

## 2025-01-26

- Version 1.7.0-b1 has been released for testing. The new version builds 6 different bundles, optimized for the Node.js environment and the browser environment. This beta version was released to test access to the specific bundles via CDNs (jsDelivr and unpkg). CodePens for Web bundles has been created testing MathJSLab bundles with jsDelivr an unpkg CDNs.
- Trademark advices are created and incorporated in all MathJSLab projects.

## 2024-11-30

- More useful files have been added to the `script/helper` directory. The `resource` directory was created to hold files from other repositories (which are built into the organization project). A directory was created for each project, and in it the `download.config.json` file specifies files in the organization repository that are downloaded into each project. The `script/helper/download-files.cjs` tool is used for this purpose.

## 2024-11-20

- Several tools for configuring Eleventy and rendering templates at build time have been grouped into the `EleventyUtil.mjs` file in the `script` directory. Other useful files have been added to the `script/helper` directory. The functions and templates for generating the MathJSLab logo in SVG format have been improved.

## 2024-10-25

- Development dependencies supporting TypeScript, Prettier, and ESLint have been installed in the MathJSLab organization profile (`.github`) repository, in addition to Eleventy. The `script` directory has been created to collect common scripts and helpers for individual project scripts. A helper to execute Eleventy programatically has been created.
- The MathJSLab logo has been modified, with fewer elements. The default file is in SVG format, generated through a Nunjucks template. The colors are defined in the `mathjslab.json` file.

## 2024-10-12

- The MathJSLab organization profile (`.github`) repository has been updated to include files in three languages: English, Portuguese, and Spanish. The `roadmap` directory has been created to gather general information relevant to the project.

## 2024-10-10

- The `mathjslab-www` has been updated and all DNS configuration has been made. The project page on mathjslab.com (and www.mathjslab.com) temporarily redirects to app.mathjslab.com.
- The MathJSLab organization repository (`.github`) has been updated. It is structured around data and `nunjucks` templates that generate markdown files using `@11ty/eleventy` directly via the `npx` command. The `.github` repository directory does not install dependencies during the build process (it does not create the `node_modules` directory and the `package-lock.json` file).

## 2024-10-08

- `mathjslab-demo` repository renamed to `mathjslab-app`.

## 2024-10-07

- The subdomains npm.mathjslab.com and github.mathjslab.com has been crated with redirection to npm repository and GitHub organization.

## 2024-10-06

- The 'mathjslab@gmail.com' Google account has been created.
- The 'mathjslab-owner' GitHub account (associated to 'mathjslab@gmail.com') has been created. User 'mathjslab-owner' has been added to organization 'MathJSLab' as an owner. The GitHub user 'mathjslab-owner' has been added to the 'MathJSLab' organization as an owner. The MathJSLab organization's email has been set to 'mathjslab@gmail.com'.
- All DNS configuration in 2024-10-05 reverted.

## 2024-10-05

- The app.mathjslab.com subdomain was created by adding a CNAME record in the DNS configuration, pointing to 'mathjslab.netlify.app.' . The subdomain was configured in Netlify's domain management. Access via the root domain was maintained. No other changes to the projects to point to app.mathjslab.com were made.
- The wiki repository for the `mathjslab` and `mathjslab-demo` repositories has been created in the MathJSLab GitHub organization.
- The `.github` repository has been created on MathJSLab organization.
- `mathjslab-calculator` repository renamed to `mathjslab-demo`. All references in `mathjslab` package and `mathjslab-demo` updated.
- Start to create android application. Two new projects (with repository not saved on GitHub) to test: `mathjslab-demo-apk-capacitor` and `mathjslab-demo-apk-twa`.

## 2024-09-30

- The `mathjslab` and `mathjslab-calculator` repositories has been moved to [MathJSLab](https://github.com/MathJSLab/) organization.

## 2024-09-25

- The project directory has been created. The following are moved to project directory:
    - `mathjslab` npm package directory.
    - `mathjslab-calculator` Web application directory.
    - `mathjslab-calculator-dev.bat` Windows batch script.
    - `mathjslab-calculator-prod.bat` Windows batch script.
- The [MathJSLab](https://github.com/MathJSLab/) organization has been created on [GitHub](https://github.com/) and the MathJSLab logo was set in organization profile.
