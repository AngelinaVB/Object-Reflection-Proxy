import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
    pluginJs.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
          globals: {
            ...globals.node,
            ...globals.jest 
          }
        }
    }
];