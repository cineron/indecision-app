// entry point --> output file
// console.log(__dirname);//absolute path to project folder

//load node path module to join local and absolute path
const path = require("path");
// console.log(path.join(__dirname, "public"));

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    // add loader, which is in a module
    // see webpack.js.org
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};