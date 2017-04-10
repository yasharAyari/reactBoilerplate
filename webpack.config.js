var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src")+'/js/main.js',
    output: {
    	path: './',
        filename: './js/bundle.js'
    },
    devServer: {
        path: path.resolve(__dirname, "src"),
        inline: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/  ,
                exclude: /node_modules/, 
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
        // loaders: [
        //     {
        //         test: /\.js$/  ,
        //         exclude: /node_modules/,
        //         loader: 'babel',
        //         query: {
        //             presets: ['es2015', 'react']
        //         }
        //     }
            // ,{
            //     test: /\.css/,
            //     loader: 'style!css'
            // }
        //]
    }
};