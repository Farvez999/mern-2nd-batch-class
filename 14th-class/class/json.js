const obj = { id: 01, name: "Korim", address: "Dhaka" }

const myJson = JSON.stringify(obj)
console.log(myJson)

const objT = JSON.parse(myJson)
console.log(objT)