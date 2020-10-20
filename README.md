# TypeScript完全解读(26课时)

> 《TypeScript完全解读》项目仓库

## 01. 开发环境搭建

创建项目文件夹并初始化
```shell
mkdir client-side
cd client-side
npm init  # npm init -y (默认配置)
```

npm初始化流程：
- **package**: default
- **version**: default
- **description**: source code of ts-learning
- **entry** point: ./src/index.ts
- **test** command: null
- **git** repository: null(optional)
- **keywords**: typescript,source_code,lison
- **author**: lison<lison16new@163.com>
- **license**: MIT

创建文件目录
```shell
.
├── LICENSE
├── README.md  # 笔记文档
├── build
│   └── webpack.config.js  # webpack配置文件
├── package.json  # npm描述文件
├── src  # 项目文件
│   ├── api  # 封装可复用的接口请求方法
│   ├── assets  # 静态资源文件（图片/字体等 ）
│   ├── config  # 配置文件（抽离以后可能会修改的配置）
│   ├── index.ts  # 入口文件
│   ├── template  # 模版文件夹
│   │   └── index.html
│   ├── tools  # 与业务无关的纯工具函数
│   └── utils  # 与业务相关的可复用的源码
└── typings  # ts模块声明文件
```

安装依赖
```shell
sudo npm install typescript tslint -g
tsc --init
npm install webpack webpack-cli webpack-dev-server -D
npm install ts-loader -D
npm install cross-env -D
npm install clean-webpack-plugin html-webpack-plugin -D
npm install typescript
```

webpack配置
```js ./uild/webpack.config.js
//清理文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 指定编译模版插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",  // 入口文件
    output: {
        filename: "main.js"  // 输入文件名
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']  // 引入时默认匹配的后缀名
    },
    module: {
        rules: [{  // loader
            test: /\.tsx?$/,  // 匹配后缀名为ts/tsx的文件
            use: 'ts-loader',  // 使用ts-loader处理
            exclude: /node_modules/  // 排除node_modules
        }]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',  // 是否生成source map，环境变量见下文
    devServer: {  // webpack-dev-server 配置
        contentBase: './dist',  // 本地开发环境根目录
        stats: 'errors-only',  // 控制台输出信息：仅错误信息
        compress: false,  // 不启动压缩
        host: 'localhost',  // 主机为本机
        port: 8089  // 端口为固定端口
    },
    plugins: [  // 插件配置
        new CleanWebpackPlugin({
            // build之前清理指定路径
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            // 使用对应文件为模版进行编译
            template: './src/template/index.html'
        })
    ]
}
```

使用cross-env传入环境变量参数
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./build/webpack.config.js"
},
```

简单的编辑一下index.ts
```ts ./src/index.ts
let num: number = 123

document.title = 'lison'
```

## 02. 基础类型

## 03. Symbol

## 04. 接口

## 05. 函数

## 06. 泛型

## 07. ES6精讲-类(基础)

## 08. ES6精讲-类(基础)

## 09. TS中的类

## 10. 枚举

## 11. 类型推论和兼容性

## 12. 高级类型(1)

## 13. 高级类型(2)

## 14. ES6和Nodejs中的模块

## 15. 模块和命名空间

## 16. 声明合并

## 17. 装饰器

## 18. Mixins混入

## 19. 其他重要更新

## 20. 声明文件

## 21. tsconfig.json配置详解

## 22. 封装并发布一个库

## 23. 为第三方库写声明文件

## 24. ts+express+mysql搭建后端服务

## 25. TS+Vue开发一个Todo应用

## 26. 使用TS封装一个Vue组件并发布到npm
