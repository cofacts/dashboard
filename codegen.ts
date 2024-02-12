require('dotenv').config({ path: '.env.local' });

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.COFACTS_API_URL,
  documents: ['app/**/*.tsx'],
  generates: {
    'typegen/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        enumsAsTypes: true,
        immutableTypes: true,
        skipTypename: true,
        avoidOptionals: true,
      },
    },
  },
};

export default config;
