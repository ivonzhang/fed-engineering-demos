const path = require('path');
// const nodeExternals = require('webpack-node-externals');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, '..', 'build/server'),
    filename: 'server.js',
  },
  // 解析配置
  resolve: {
    // 添加 `.ts` 和 `.tsx` 为可解析扩展名
    extensions: ['.tsx', '.ts', '.js'],
  },
  // externals: [nodeExternals],
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?|mjs)$/i,
        exclude: /node_modules/,
        use: "babel-loader",
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        //   }
        // }
      },
      {
        test: /\.css$/i,
        use: [
          'css-loader',
        ],
      },
    ]
  }
}
