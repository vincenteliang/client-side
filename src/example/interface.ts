// const getFullName = ({ firstName, lastName }) => {
//     return `${firstName} ${lastName}`
// }
// console.log(getFullName({
//     firstName: 'haha',
//     lastName: 18,
// }))
interface NameInfo {
    firstName: string,
    lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
    return `${firstName} ${lastName}`
}

getFullName({
    firstName: 'haha',
    lastName: 'li',
})

interface Vegetable {
    color?: string,
    readonly type: string
}

const getVegetables = ({ color, type }: Vegetable) => {
    return `A ${color ? (color + ' ') : ''}${type}`
}

const vegetableInfo = {
    type: 'tomato',
    color: 'red',
    size: 2,
}

let vegetableObj: Vegetable = {
    type: 'tomato',
}
// vegetableObj.type = 'carrot'

interface ArrInter {
    0: number,
    readonly 1: string
}

let arr: ArrInter = [1, 'a']
// arr[1] = 'b'

// console.log(getVegetables(vegetableInfo))

type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

// interface RoleDic {
//     [id: number]: string
// }
// const role1: RoleDic = {
//     'a': 'super_admin',
// }
interface RoleDic {
    [id: string]: string
}
const role2: RoleDic = {
    a: 'super_admin',
    1: 'admin',
}

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
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
