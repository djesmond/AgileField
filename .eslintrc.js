module.exports = {
    "extends": ["airbnb", "react-app"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "prettier",
    ],
    rules: {
         "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
         "max-len": [1, 120, 2, {ignoreComments: true}],
         "no-else-return": 0,
    }
};