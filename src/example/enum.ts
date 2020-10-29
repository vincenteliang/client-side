const test = 1
const getIndex = () => {
    return 2
}
enum Status {
    Uploading = 3,
    Success = getIndex(),
    Failed = 5,
}
// console.log(Status.Uploading)
// console.log(Status.Success)
// console.log(Status.Failed)

// console.log(Status)

enum Message {
    Error = 'Sorry, error',
    Success = 'Hoho, success',
    Failed = Error,
}
// console.log(Message.Failed)

enum Result {
    Faild = 0,
    Success = 'success',
}

// 1. enum E { A }
// 2. enum E { A = 'a' }
// 3. enum E { A = -1 }

enum Animals {
    Dog = 1,
    Cat = 2,
}
interface Dog {
    type: Animals.Dog
}
// const dog: Dog = {
//     // type: Animals.Cat,
// }

enum Status {
    Off,
    On,
}
interface Light {
    status: Status
}
// const light: Light = {
//     status: Animals.Dog,
// }

const enum Animals1 {
    Dog = 1,
}
