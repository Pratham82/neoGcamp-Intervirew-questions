import React, { useEffect, useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'
const Question7 = () => {
  const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
  const questionText =
    "7. Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalize etc."
  const [currentPost, setCurrentPost] = useState('')

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      const res = await fetch(POSTS_API_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          title: 'New title 101',
          body: 'This is the new title body',
          userId: 101,
        }),
      })
      const newPostData = await res.json()
      const { title } = newPostData
      setCurrentPost(title)
      console.log('Original Title: ', title)
      console.log('Modified Title: ', title.toUpperCase())
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <QuestionHeader questionText={questionText} />
      <h3>Current Post: {currentPost}</h3>
    </React.Fragment>
  )
}

export default Question7
