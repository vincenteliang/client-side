// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.getPostion = function () {
//     return '(' + this.x + ', ' + this.y + ')'
// }
// var p1 = new Point(2, 3)
// console.log(p1)
// console.log(p1.getPostion())
// var p2 = new Point(4, 5)
// console.log(p2.getPostion())

// class Point {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//         // return { a: 'a' }
//     }
//     getPostion () {
//         return `(${this.x}, ${this.y})`
//     }
// }
// const p1 = new Point(1, 2)
// console.log(p1)
// const p2 = Point(2, 3)
// console.log(p1.hasOwnProperty('x'))
// console.log(p1.hasOwnProperty('getPostion'))
// console.log(p1.__proto__.hasOwnProperty('getPostion'))

var info = {
    _age: 18,
    set age (newValue) {
        if (newValue > 18) {
            console.log('怎么变老了')
        } else {
            console.log('哈哈我还年轻')
        }
    },
    get age () {
        console.log('你问我年龄干嘛')
        return this._age
    }
}
// console.log(info.age)
// info.age = 17
// info.age = 19

class Info {
    constructor (age) {
        this._age = age
    }
    set age (newAge) {
        console.log('new age is:' + newAge)
        this._age = newAge
    }
    get age () {
        return this._age
    }
}
const infos = new Info(18)
// infos.age = 17
// console.log(infos.age)

// const func = function () {}
// function func () {}

// class Infos {
//     constructor () {}
// }
// const Infos = class c {
//     constructor () {}
// }
// const Infos = class {
//     constructor () {}
// }
// const testInfo = new Infos()

// function testFunc () {}
// console.log(testFunc.name)

// class Point {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y
//     }
//     getPosition () {
//         return `(${this.x}, ${this.y})`
//     }
//     static getClassName () {
//         return Point.name
//     }
// }
// const p = new Point(1, 2)
// console.log(p.getPosition())
// console.log(p.getClassName())
// console.log(Point.getClassName())

// class Point {
//     constructor () {
//         this.x = 0
//     }
// }
// Point.y = 2
// const p = new Point()
// console.log(p.x)
// console.log(p.y)

// b.js
// import Point from './a.js'
// const p = new Point()
// console.log(p)

// class Point {
//     // #ownProp = 12
// }

// function Point() {
//     console.log(new.target)
// }
// const p = new Point()
// const p2 = Point()

class Point {
    constructor () {
        // console.log(new.target)
    }
}
const p3 = new Point()

class Parent {
    constructor () {
        if (new.target === Parent) {
            throw new Error('不能实例化')
        }
    }
}
class Child extends Parent {
    constructor () {
        super()
    }
}
// const c = new Parent()
const c = new Child()