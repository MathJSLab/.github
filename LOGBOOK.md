# MathJSLab Logbook

This file contains general information about the actions of the [MathJSLab Project](https://mathjslab.com/) that go beyond the scope of the individual projects. In other words, what cannot be recorded in the `CHANGES.md` file of each software project, or the general actions of the organization, are recorded here, indexed by date.

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
- The 'mathjslab-owner' GitHub account (associated to 'mathjslab@gmail.com')  has been created. User 'mathjslab-owner' has been added to organization 'MathJSLab' as an owner. The GitHub user 'mathjslab-owner' has been added to the 'MathJSLab' organization as an owner. The MathJSLab organization's email has been set to 'mathjslab@gmail.com'.
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
  * `mathjslab` npm package directory.
  * `mathjslab-calculator` Web application directory.
  * `mathjslab-calculator-dev.bat` Windows batch script.
  * `mathjslab-calculator-prod.bat` Windows batch script.
- The [MathJSLab](https://github.com/MathJSLab/) organization has been created on [GitHub](https://github.com/) and the MathJSLab logo was set in organization profile.
