# Storybook Babel issues

## Results when running `start-storybook`

- `packages/v6/`

  - Storybook 6

  - ✅ Runs correctly

- `packages/v6-v7mode/`

  - Storybook 6 + `babelModeV7: true`

  - ❌ TypeScript syntax error in local package

    ```
    ModuleBuildError: Module build failed (from ../../node_modules/babel-loader/lib/index.js):
    SyntaxError: /workspaces/storybook-issue-17398/packages/ui-v7/src/ButtonStack.stories.tsx: Missing semicolon. (6:50)
    ```

- `packages/v6-v7mode-babelrc/`

  - Storybook 6 + `babelModeV7: true` + `.babelrc.json`

  - ❌ TypeScript syntax error in `theme` package

    ```
    ModuleBuildError: Module build failed (from ../../node_modules/babel-loader/lib/index.js):
    SyntaxError: /workspaces/storybook-issue-17398/packages/theme/src/index.ts: Only declares and type imports are allowed inside declare module. (10:2)
    ```

- `packages/v7/`

  - Storybook 7

  - ❌ TypeScript syntax error in local package

    ```
    ModuleBuildError: Module build failed (from ../../node_modules/babel-loader/lib/index.js):
    SyntaxError: /workspaces/storybook-issue-17398/packages/v7/src/ButtonStack.stories.tsx: Unexpected token, expected "from" (2:12)
    ```

- `packages/v7/`

  - Storybook 7 + `.babelrc.json`

  - ❌ TypeScript syntax error in `theme` package

    ```
    ModuleBuildError: Module build failed (from ../../node_modules/babel-loader/lib/index.js):
    SyntaxError: /workspaces/storybook-issue-17398/packages/theme/src/index.ts: Unexpected token, expected "from" (1:12)
    ```
