{
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "max-len": [ "warn", { "code": 240 } ],
    "no-console": ["warn", { "allow": ["assert"] }],
    "no-redeclare": "error",
    "no-unused-vars": "error",
    "no-warning-comments": "warn",
    "react/jsx-filename-extension": "error"
  },
  "settings": {
    "react": {
      "version": "15.0"
    }
  }
}