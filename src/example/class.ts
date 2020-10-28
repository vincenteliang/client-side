// class Point {
//     public x: number
//     public y: number
//     constructor(x: number, y: number) {
//         this.x = x
//         this.y = y
//     }
//     public getPosition() {
//         return `(${this.x}, ${this.y})`
//     }
// }
// const point = new Point(1, 2)
// console.log(point)

// class Parent {
//     public name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// class Child extends Parent {
//     constructor(name: string) {
//         super(name)
//     }
// }

// public 公共

// private 私有的

// protected 受保护
// class Parent {
//     // private age: number
//     protected age: number
//     protected constructor(age: number) {
//         this.age = age
//     }
//     protected getAge() {
//         return this.age
//     }
// }
// const p = new Parent(18)
// console.log(p.age)
// console.log(Parent.age)
// class Child extends Parent {
//     constructor(age: number) {
//         super(age)
//         // console.log(super.age)
//         // console.log(super.getAge())
//     }
// }
// const child = new Child(19)

// class UserInfo {
//     public readonly name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// const userInfo = new UserInfo('lison')
// console.log(userInfo)
// userInfo.name = 'haha'

// class A {
//     constructor(public name: string) {}
// }
// const a1 = new A('lison')
// console.log(a1.name)

class Parent {
    public static getAge() {
        return Parent.age
    }
    private static age: number = 18
    constructor() {}
}
const p = new Parent()
// console.log(p.age)
// console.log(Parent.age)

class Info {
    public name: string
    public age?: number
    private _infoStr: string
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
    }
    get infoStr() {
        return this._infoStr
    }
    set infoStr(value) {
        // console.log(`setter: ${value}`)
        this._infoStr = value
    }
}
// const info1 = new Info('lison')
// console.log(info1)
// const info3 = new Info('lison', 18)
const info4 = new Info('lison', 18, 'man')
info4.infoStr = 'lison: 18'
// console.log(info4.infoStr)

// abstract class People {
//     constructor(public name: string) {}
//     public abstract printName(): void
// }
// // const p1 = new People()
// class Man extends People {
//     constructor(name: string) {
//         super(name)
//         this.name = name
//     }
//     public printName() {
//         console.log(this.name)
//     }
// }
// const m = new Man('lison')
// m.printName()

// abstract class People {
//     public abstract _name: string
//     abstract get insideName(): string
//     abstract set insideName(value: string)
// }
// class P extends People {
//     public _name: string
//     public insideName: string
// }

class People {
    constructor(public name: string) {}
}
let p2: People = new People('lison')
class Animal {
    constructor(public name: string) {}
}
p2 = new Animal('haha')

interface FoodInterface {
    type: string
}
// class FoodClass implements FoodInterface {
//     public type: string
// }

class A {
    protected name: string
}
interface I extends A {}
class B extends A implements I {
    public name: string
}

const create = <T>(c: new() => T): T => {
    return new c()
}
class Infos {
    public age: number
    constructor() {
        this.age = 18
    }
}
// console.log(create<Infos>(Infos).age)
// console.log(create<Infos>(Infos).name)
