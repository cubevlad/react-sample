module.exports = {
  root: true,
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  extends: ['@frknnice/eslint-config', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  // currently we are using vite instead webpack
  rules: {
    'import/dynamic-import-chunkname': 'off',
  },
  // if you want apply rules for FSD just uncomment code below

  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       'simple-import-sort/imports': [
  //         'error',
  //         {
  //           groups: [
  //             ['^react', '^@?\\w'],

  //             ['^(client/domain)(/.*|$)'],
  //             ['^(client/shared)(/.*|$)'],

  //             ['^(client/app)(/.*|$)'],

  //             ['^(client/processes)(/.*|$)'],
  //             ['^(client/widgets)(/.*|$)'],
  //             ['^(client/pages)(/.*|$)'],

  //             ['^(client/entities)(/.*|$)'],
  //             ['^(client/features)(/.*|$)'],

  //             ['^(#server/routes)(/.*|$)'],

  //             // Side effect imports.
  //             ['^\\u0000'],
  //             ['^.+\\.?(css)$'],
  //           ],
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     files: './src/**/**.+(ts|tsx)',
  //     rules: {
  //       'feature-slice-isolation': [
  //         'error',
  //         {
  //           layers: {
  //             1: 'app',
  //             2: 'processes',
  //             3: 'pages',
  //             4: 'widgets',
  //             5: 'features',
  //             6: 'entities',
  //             7: 'shared',
  //           },
  //         },
  //       ],
  //       'isolation-import-paths': [
  //         'error',
  //         {
  //           isAllowedInnerSlice: true,
  //           layers: {
  //             app: 1,
  //             processes: 1,
  //             pages: 1,
  //             widgets: 1,
  //             features: 1,
  //             entities: 1,
  //             domain: 1,
  //           },
  //         },
  //       ],
  //       'folder-file-required': [
  //         'error',
  //         {
  //           validateFilenames: ['index'],
  //           ignoreFolders: [
  //             { folder: 'node_modules', deep: true },
  //             { folder: '__snapshots__' },
  //             { folder: 'icons' },
  //             { folder: 'img' },
  //           ],
  //           folders: [
  //             'app',
  //             'processes',
  //             'pages',
  //             'widgets',
  //             'features',
  //             'entities',
  //             'shared',
  //             'domain',
  //           ],
  //           root: '/src',
  //         },
  //       ],
  //       'react/display-name': 0,
  //       'alias-import-paths': [
  //         'error',
  //         {
  //           paths: [
  //             {
  //               ignoredFolders: [],
  //               allowSameFolder: true,
  //               rootDir: 'src',
  //               prefix: 'client',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // ],
}
