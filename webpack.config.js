const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
    entry: './temp-code.js',  // 임시 파일 위치
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
  plugins: [
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
      languages: ['json']
    })
  ],
    externals: {
    "react": "React",      // `import React from 'react'`는 전역 변수 React를 사용합니다.
    "react-dom": "ReactDOM" // `import ReactDOM from 'react-dom'`는 전역 변수 ReactDOM를 사용합니다.
  }
};