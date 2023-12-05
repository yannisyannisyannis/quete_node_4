require ('dotenv').config()


const user = `I am ${ process.env.name} , wilder in ${process.env.city}, and i love ${process.env.language} `

console.log(user)