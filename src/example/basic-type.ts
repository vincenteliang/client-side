// 布尔类型
// let bool: boolean = false
let bool: boolean
bool = true
// bool = 123

// 数值类型
let num: number = 123
// num = 'abc'
num = 0b1111011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
// console.log(str)

// 数组类型
// [ 1, 2, 3 ]
// 写法1
let arr1: number[]
arr1 = [ 5 ]
// 写法2
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [1, 'a']

// 元组类型
let tuple: [string, number, boolean]
tuple = ['a', 1, false]

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN = 4,
    USER
}
// console.log(Roles.SUPER_ADMIN)
// console.log(Roles[0])
// if (roles === Roles.SUPER_ADMIN) {
//     //
// }

// any类型
let value: any
value = 'abc'
value = 123
value = false
const arr4: any[] = [1,'a']

// void类型
const consoleText = (text: string): void => {
    console.log(text)
}
let v: void
v = undefined
v = null
consoleText('abc')

// null和undefined
let u: undefined
u = undefined
// u = 123
let n: null
n = null
// n = 'abc'

num = undefined
num = null

// never类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while(true){}
}
// let neverVariable = (() => {
//     while(true){}
// })()
// num = neverVariable

// object
let obj = {
    name: 'lison'
}
let obj2 = obj
obj2.name = 'L'
console.log(obj)
function getObject(obj: object): void {
    console.log(obj)
}
getObject(obj2)

// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
// getLength(false)