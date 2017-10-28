module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/label-has-for": [ 2, {
            "allowChildren": true,
        }],
    }
};