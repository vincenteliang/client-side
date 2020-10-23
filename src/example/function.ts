// function add(arg1: number, arg2: number): number {
//     return arg1 + arg2
// }
// const add = (arg1: number, arg2: number) => arg1 + arg2
let add: (x: number, y: number) => number
add = (arg1: number, arg2: number): number => arg1 + arg2
add = (arg1: number, arg2: number) => arg1 + arg2

type Add = (x: number, y: number) => number
let addFunc
addFunc = (arg1: number, arg2: number) => arg1 + arg2

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
// let addFunction: AddFunction
// addFunction = (x: number, y: number) => x + y
// addFunction = (x: number, y: number, z: number) => x + y + z

// const handleData = (arg1: number, ...args: number[]) => {
//     // ...
// }

function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item) => Number(item))
    }
}
// handleData('abc').map((item) => {
//     return item.toFixed()
// })
// handleData(123).map((item) => {
//     return item.length
// })
