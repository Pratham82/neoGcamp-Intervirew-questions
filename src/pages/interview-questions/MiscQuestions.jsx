import React from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'

const questionsArray = [
  'Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.',

  'Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.',

  'Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.',
]

const MiscQuestions = () => {
  // Question 1
  const obj1 = { name: 'Ram', age: 25, yuga: 'Treta' }
  const obj2 = { name: 'Krishna', age: 31, yuga: 'Dwapar' }
  const checkOlderUser = (user1, user2) =>
    user1.age > user2.age ? user1 : user2
  console.log(checkOlderUser(obj1, obj2))

  // Question 2
  const u1 = { name: 'Ram', power: 2500, yuga: 'Treta' }
  const u2 = { name: 'Krishna', power: 2325, yuga: 'Dwapar' }
  const checkMostPowerful = (user1, user2) =>
    user1.power > user2.power ? user1 : user2
  console.log(checkMostPowerful(u1, u2))

  // Question 3
  const checkMostPowerfulCombined = (user1, user2) =>
    user1.power + user1.name.length > user2.power + user2.name.length
      ? user1
      : user2
  console.log(checkMostPowerfulCombined(u1, u2))

  return (
    <React.Fragment>
      <QuestionHeader questionText={questionsArray} />
    </React.Fragment>
  )
}

export default MiscQuestions
