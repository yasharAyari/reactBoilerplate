var path = require("path");
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
    return {
        entry: {
            app: path.resolve(__dirname, "src")+'/main.js',
            vendor: ['react', 'redux', 'react-dom']
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'bundle.[name].js'
        },
        devServer: {
            contentBase: "src",
            inline: true,
            port: 3000,
            historyApiFallback: true,
        },
        plugins: [
            env.analyze ? new BundleAnalyzerPlugin() : undefined,
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            })
        ].filter((p) => !!p),

        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/  ,
                    exclude: /node_modules/, 
                    loader: 'eslint-loader'
                },
                {
                    test: /\.js$/  ,
                    exclude: /node_modules/, 
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        }
    };
}
