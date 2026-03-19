// let son = 23;

// son = son + "23"

// console.log(son)


// const ism = "abdukarim";

// ism = true

// let yosh = 53;

// yosh = null

// function salom(ism: string) {
//     return ism
// }

// salom("abdukarim")

// let foydalanvchilar: (string | null | undefined)[] = ['abdukarim', null, undefined]



type TUser = {
    ism: string,
    yosh: number,
    married?: boolean,
    id: number
}

const user1: TUser = {
    ism: "abdukarim",
    yosh: 23,
    married: false,
    id: 1
}
const user2: TUser = {
    ism: "sardor",
    yosh: 30,
    // married: false,
    id: 2
}


const dataObj: ({
    ism: string,
    yosh: number,
    id: number,
    married: boolean
})[] = [
        {
            ism: "abdukarim",
            yosh: 32,
            id: 3,
            married: false
        }
    ]