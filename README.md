# Storybook v6 Babel issues

- `packages/ui/`

  - `babelModeV7: false`

  - ✅ Runs correctly

- `packages/ui-v7/`

  - `babelModeV7: true`

  - ❌ TypeScript syntax error in local package

    ```
    ModuleBuildError: Module build failed (from ../../node_modules/babel-loader/lib/index.js):
    SyntaxError: /workspaces/storybook-issue-17398/packages/ui-v7/src/ButtonStack.stories.tsx: Missing semicolon. (6:50)
    ```

- `packages/ui-v7-babelrc/`

  - `babelModeV7: true`

  - Local `.babelrc.json` file

  - ❌ TypeScript syntax error in `theme` package

    ```
    ModuleBuildError: Module build failed (from ../../node_modules/babel-loader/lib/index.js):
    SyntaxError: /workspaces/storybook-issue-17398/packages/theme/src/index.ts: Only declares and type imports are allowed inside declare module. (10:2)
    ```
