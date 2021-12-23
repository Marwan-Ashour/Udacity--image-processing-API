module.exports = {
    "env": {
        "es2021": true,
        "node": true,
        "jasmine":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", 'prettier'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint", 'prettier'
    ],
    "rules": {'prettier/prettier': 2,
    "no-use-before-define": ["error", { "functions": true, "classes": true }],
      "no-var": "error",
      "prefer-const": "error"
    }
};
