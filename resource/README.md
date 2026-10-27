# Shared organization resources

The interpreter implementation belongs to `mathjslab`; the reusable Markdown engine and component belong to `mathjslab-markdown`. The organization repository owns shared build helpers, templates and synchronization manifests. Package-specific implementation and documentation remain in their own repositories.

Edit synchronization manifests in `input/resource/<project>/copy.repo.config.json`. The organization build copies them into `resource/<project>`. Markdown maintenance helpers and formatting configuration are kept in `input/resource/mathjslab-markdown`.

The calculator consumes the shared session-aware `PlotEngine` in `src`. The app maintains its own Plotly renderer, Eleventy entry script and ESLint configuration; the app synchronization manifest must not overwrite those files or restore the obsolete `src/outputFunction.ts` and `src/styles/constants.json.njk`. Both hosts still consume the shared `commonExternalFunctionTable` and `InterpreterRuntime` adapters. Plot semantics and preparation belong to the core; hosts own Plotly loading and DOM cleanup. Shared files used by the calculator and website remain available to their respective synchronization manifests.

`mathjslab-batch` is abandoned and has no active repository or build/publication workflow. Shared resources must not reintroduce it as a consumer.
