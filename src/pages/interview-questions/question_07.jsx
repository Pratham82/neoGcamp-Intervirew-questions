import React, { useEffect, useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'
import loading from '../../assets/loading-buffering.gif'
const QuestionSeven = () => {
  const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
  const questionText =
    "7. Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalize etc."
  // const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      const res = await fetch(POSTS_API_URL,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          title: 'New title 101',
          body: 'This is the new title body',
          userId: 101
        })
      })
      const newPostData =  await res.json()
      const {title, body, userId} = newPostData
      console.log('Original Title: ', title);
      console.log('Modified Title: ', title.toUpperCase());
    }
    fetchData()
  }, [])


  // const getNamePromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Promises resolved')
  //     reject('Rejected')
  //   }, 1000)
  // })

  // const data = fetch(getNamePromise)
  // console.log(data)
  // getNamePromise.then(val => console.log(val)).catch(err => console.log(err))
  return (
    <React.Fragment>
      <QuestionHeader questionText={questionText} />
    </React.Fragment>
  )
}

export default QuestionSeven
