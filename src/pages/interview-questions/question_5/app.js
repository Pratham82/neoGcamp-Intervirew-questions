const rl = require('readline-sync')
const marks = require('./data/mock-marks.js')

// structure for student marks
// const reportCard = { studentName: '', unitTest: 0, preFinal: 0, final: 0 , total : 0}

// let marks = []

// for (let i = 0; i < 6; i++) {
//   // Take input and store it in reportCard
//   const name = rl.question('Enter student name: ')
//   const unitTest = rl.question('Enter unit test marks out of 20: ')
//   const preFinal = rl.question('Enter preFinal test marks out of 75: ')
//   const final = rl.question('Enter final test marks out of 75: ')
//   console.log('--------------------------------------')

//   // Push the new report card object in marks
//   marks.push({
//     name,
//     unitTest,
//     preFinal,
//     final,
//     total: getTotal(unitTest, preFinal, final),
//   })
// }

// const getTotal = (unitTest, preFinal, final) =>
//   Number(stu.unitTest) + Number(stu.preFinal) + Number(stu.final)

// Find highest total and return the index
const topper = marks.sort((a, b) => a.total - b.total).reverse()[0]
const { name, total } = topper
console.log(`${name} topped the class with, ${total} total marks.`)
