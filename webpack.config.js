var path = require("path");

module.exports = env => {
    return {
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
                    // use: [
                    //     {
                            
                    //     },
                    //     {
                            
                    //     }
                        
                    // ]
                //},
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        }
    };
}
