const fs = require('fs')

const file = fs.readFileSync('./data.json')
console.log(file)
const data = JSON.parse(file)
console.log(data)
console.log(data.name)
data.name = "James"
fs.writeFileSync('./data.json',JSON.stringify(data))
