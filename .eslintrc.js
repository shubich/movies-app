module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "jest": true,
    },
    "rules": {
        "jsx-a11y/anchor-is-valid": [ "error", {}],
        "jsx-a11y/label-has-for": [ 2, {
            "allowChildren": true,
        }],
        "import/prefer-default-export": 0,
        "react/no-typos": 0,
    }
};
