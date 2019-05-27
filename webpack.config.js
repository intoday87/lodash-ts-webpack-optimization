const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const config = {
  context: __dirname,
  target: 'node',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{ // 이걸 제거하면 70kib까지 bundle 사이즈가 늘어나는것을 볼 수 있음
        test: /\.ts$/,
        loader: 'lodash-ts-webpack-plugin',
        exclude: /node_modules/,
        enforce: 'pre'
      },
    ],
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
  entry: {
    main: './src/index.ts',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
	plugins: [
	 new LodashModuleReplacementPlugin, // typescript에서는 소용이 없음
	]
}

module.exports = config;
