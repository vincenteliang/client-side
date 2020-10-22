# TypeScript完全解读(26课时)

> 《TypeScript完全解读》项目仓库

## 01. 开发环境搭建npm

### 创建项目文件夹并初始化

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

### 创建文件目录

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

### 安装依赖

```shell
sudo npm install typescript tslint -g
tsc --init
npm install webpack webpack-cli webpack-dev-server -D
npm install ts-loader -D
npm install cross-env -D
npm install clean-webpack-plugin html-webpack-plugin -D
npm install typescript
```

### webpack配置

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

### 简单的编辑一下index.ts

```ts ./src/index.ts
let num: number = 123

document.title = 'lison'
```

`npm start`项目运行起来以后应该可以看到标签页标题为'lison'

### 订正

> 参考：<https://www.npmjs.com/package/clean-webpack-plugin>

在后面实际运行时候发现了一些问题，不知是否是因为webpack相关包版本问题，项目启动过程中出现了一些问题。

首先是`Error: Cannot find module 'webpack/bin/config-yargs'`，我在其他项目的webpack-cli包文件中拷贝了一份config文件夹过来。

其次是`TypeError: CleanWebpackPlugin is not a constructor`，需要修改引入方式为`const { CleanWebpackPlugin } = require('clean-webpack-plugin');`。

最后是`clean-webpack-plugin: options.output.path not defined. Plugin disabled...`，这个问题不影响项目启动，但可以通过配置weibpack来解决，如下：

```diff ./build/webpack/config.js
-const CleanWebpackPlugin = require('clean-webpack-plugin')
+const { CleanWebpackPlugin } = require('clean-webpack-plugin')
+const path = require('path');

module.exports = {
    entry: "./src/index.ts",
    output: {
+       path: path.resolve(process.cwd(), 'dist'),
        filename: "main.js"
    },
    ...
```

## 02. 基础类型

### 布尔类型

```ts ./src/example/basic-type.ts
let bool: boolean = true
```

### 数值类型

```ts ./src/example/basic-type.ts
let num: number = 123
num = 0b1111011
num = 0o173
num = 0x7b
```

数值类型支持2/8/10/16四种进制

### 字符串类型

```ts ./src/example/basic-type.ts
let str: string = 'abc'
str = `数值是${num}`
```

### 数组类型

```ts ./src/example/basic-type.ts
let arr0: number[] = [5]
let arr1: Array<string> = ['a']
let arr2: (string | number)[] = [5, 'a']
let arr3: Array<string | number> = [5, 'a']
```

### 元组类型

```ts ./src/example/basic-type.ts
let tuple: [string, number, boolean]
tuple = ['a', 1, false]
```

版本2.6以前元组的越界元素可以是元组中指定元素之一
2.6以后则不允许出现越界元素

### 枚举类型

```ts ./src/example/basic-type.ts
enum Roles {
    SUPER_ADMIN,
    ADMIN = 4,
    USER
}
```

### any类型

```ts ./src/example/basic-type.ts
let value: any
const arr: any[] = [1,'a']
```

### void类型

```ts ./src/example/basic-type.ts
const consoleText = (text: string): void => {
    console.log(text)
}
let v: void
v = undefined
v = null
consoleText('abc')
```

将`null`赋给`void`类型需要修改配置文件

### null和undefined类型

```ts ./src/example/basic-type.ts
let u: undefined = undefined
let n: null = null
```

null和undefined是其他类型的子类型，非严格情况可以赋给其他类型

### never类型

```ts ./src/example/basic-type.ts
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while(true){}
}
```

never是任何类型的子类型

### object类型

对象类型存储的是内存中的地址

```ts ./src/example/basic-type.ts
function getObject(obj: object): void {
    console.log(obj)
}
```

### 类型断言

```ts ./src/example/basic-type.ts
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
```

使用jsx时推荐使用`as`关键字

## 03. Symbol

> TS对Symbol的支持是基于ES6的

### 基础

```ts
// Symbol不用new关键字，使用构造函数创建
const s1 = Symbol()
// 在构造Symbol的时候可以传入一个标识，必须是字符串
const s2 = Symbol('lison')
// Symbol的值是独一无二的，下式永远返回`false`
console.log(s1 === s2)
```

symbol类型可以转换为字符串或布尔值
```ts
console.log(s1.toString())
console.log(Boolean(s1))
console.log(!s1)  // 隐式转换后取反
```

### 作为属性名

因为Symbol的值是独一无二的，所以不会被覆盖

```ts
const s = Symbol('name')
const info = {
    [s]: 'lison',
    age: 18
}
// 不能用.操作符访问
info[s] = 'haha'
```

### 属性名的遍历

```ts
Object.keys(info)                   // ["age"]
Object.getOwnPropertyNames(info)    // ["age"]
JSON.stringify(info)                // {"age":18}
Object.getOwnPropertySymbols(info)  // [Symbol(name)]
Reflect.ownKeys(info)               // ["age", Symbol(name)]
```

### Symbol.for和Symbol.keyFor

```ts
// 传入参数相同时.for会将原变量赋给新变量
const s1 = Symbol.for('lison')
const s2 = Symbol.for('lison')  // s2 = s1
s1 === s2   // true

// .keyFor只能返回.for创建的Symbol的参数
Symbol.keyFor(s)    // undefined
Symbol.keyFor(s1)   // lison
```

### 11个内置Symbol值(略)

1. hasInstance
2. isConcatSpreadable
3. species
4. match
5. replace
6. search
7. split
8. iterator
9. toPrimitive
10. toStringTag
11. unscopables

## 04. 接口

`tslint --init` 初始化tslint配置文件 ./tslint.json
本节关闭了部分tslint代码风格检查设置，具体可查看上述文件

### 基本用法

```ts
// 定义接口数据格式
interface NameInfo {
    firstName: string,
    lastName: string
}

// 使用接口规范传参格式
// 括号内也可写成({ firstName, lastName }: { firstName: string, lastName: string })
// 括号后的(): string表示函数返回数据的类型
const getFullName = ({ firstName, lastName }: NameInfo): string => {
    return `${firstName} ${lastName}`
}

// 若传入非字符串tslint会报错
getFullName({
    firstName: 'haha',
    lastName: 'li',
})
```

### 可选属性

```ts
interface Vegetable {
    color?: string,  // 加?设置为可选属性
    type: string,
}

const getVegetables = ({ color, type }: Vegetable) => {
    return `A ${color ? (color + ' ') : ''}${type}`
}

getVegetables({
    type: 'tomato'
})
```

### 多余属性

#### 类型断言

```ts
getVegetables = {
    type: 'tomato',
    color: 'red',
    size: 2,
} as Vegetable
```

#### 索引签名

```ts
interface Vegetable {
    color?: string,  // 加?设置为可选属性
    type: string,
    [prop: string]: any
}
```

#### 类型兼容性

```ts
const vegetableInfo = {
    type: 'tomato',
    color: 'red',
    size: 2,
}

// a = b : 只要a需要的属性b都有即可
getVegetables(vegetableInfo)
```

### 只读

```ts
interface Vegetable {
    color?: string,  // 加?设置为可选属性
    readonly type: string,
}

interface ArrInter {
    0: number,
    readonly 1: string
}

let arr: ArrInter = [1, 'a']
// arr[1] = 'b'   // 报错
```

### 函数形式接口

```ts
interface AddFunc {
    (num1: number, num2: number): number
}
// 以上代码会被eslint优化为如下定义类型别名的风格
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2
```

### 索引类型

```ts
interface RoleDic {
    [id: string]: string
}
const role1: RoleDic = {
    0: 'super_admin', // 0会被js默认转换为字符串
}
```

### 接口继承

```ts
interface Vegetables {
    color: string
}
interface Tomato extends Vegetables {
    radius: number
}
interface Carrot extends Vegetables {
    length: number
}
const tomato: Tomato = {
    radius: 1,
    color: 'red',
}
const carrot: Carrot = {
    length: 2,
    color: 'orange',
}
```

### 混合类型接口

```ts
interface Counter {
    (): void,
    count: number
}

const getCounter = (): Counter => {
    const c = () => { c.count++ }
    c.count = 0
    return c
}

const counter: Counter = getCounter()

counter()  // 1
counter()  // 2
counter()  // 3
```

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
