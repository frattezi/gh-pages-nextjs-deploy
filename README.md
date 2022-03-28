# TypeScript & Styled Components Next.js example

This is a really simple project that show the usage of Next.js with TypeScript and Styled Components.

## Explanation

From NextJs it is possible to create a [static build](https://nextjs.org/docs/advanced-features/static-html-export) which we can use as our
Github Pages files. The action will only install dependencies and build the app, after that, we use a [custom action](https://github.com/marketplace/actions/deploy-to-github-pages) to push the build files to the desired branch.
