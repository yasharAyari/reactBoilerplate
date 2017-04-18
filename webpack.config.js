var path = require("path");
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var entries = {
  app: path.resolve(__dirname, "src") + '/main.js',
  vendor: ['react', 'redux', 'react-dom']
};
module.exports = env => {
  entries = env.test ? path.resolve(__dirname, "src") + '/main.js' : entries;
  return {
    entry: entries,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: env.test ? 'bundle.js' : 'bundle.[name].js'
    },
    devServer: {
      contentBase: "src",
      inline: true,
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      env.analyze ? new BundleAnalyzerPlugin() : undefined,
      env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ].filter((p) => !!p),
    externals: {
<<<<<<< HEAD
=======
      'react/addons': true,
>>>>>>> c0590a8da9d3d61bc8e2da15efb47b2fe499a99b
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    module: {
      rules: [{
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  };
}