module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "jest": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "no-console": "off",
      "import/no-unresolved": "off"
    }
};