const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry:"./src/index.js" , // 以src配置下的目录
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    devtool:'source-map' ,
    resolve: {
        modules:[path.resolve(__dirname,"source"),path.resolve(__dirname,"node_modules")]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,"public/index.html")
        })
    ]
}
console.log(path.resolve(__dirname, "public/index.html"));
