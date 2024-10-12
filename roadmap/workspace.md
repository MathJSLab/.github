# MathJSLab Workspace

To clone all of the [organization's repositories](https://github.com/orgs/MathJSLab/repositories) locally, create a directory called `mathjslab-repositories` and save the file [`mathjslab.package.json`](https://github.com/MathJSLab/.github/blob/main/data/mathjslab.package.json) in it with the name `package.json`. The scripts in this file clone all of the [**MathJSLab Organization**'s repositories](https://github.com/orgs/MathJSLab/repositories), creating a complete workspace locally. This file also contains additional build scripts for the individual projects.

```bash
mkdir mathjslab-repositories
cd mathjslab-repositories
curl -o ./package.json https://raw.githubusercontent.com/MathJSLab/.github/refs/heads/main/data/mathjslab.package.json
```
