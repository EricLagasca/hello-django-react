const path = require("path");

module.exports = {
    entry: "./website/src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "website/static/website"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
};
