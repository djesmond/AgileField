module.exports = {
    "extends": ["airbnb", "react-app"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "prettier",
    ],
    rules: {
         "react/jsx-filename-extension": [1, { "extensions": [".js"] }]
    }
};