import React, { useEffect, useState } from 'react'
import QuestionHeader from '../../components/question-header'
import '../../index.css'
const Question8 = () => {
  const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/postssdf'
  const questionText =
    "8. Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message."
  const [serverResponse, setServerResponse] = useState({})
  // const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      // fetch(POSTS_API_URL).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
      const response = await fetch(POSTS_API_URL)
      // const posts = await response.json()
      // setData(posts.slice(0,10));
      // console.log(response);
      // console.log(serverResponse);
      const { url, ok, status } = response
      setServerResponse({ url, ok, status })
    }
    fetchData()
  }, [])
  const { url, ok, status } = serverResponse

  return (
    <React.Fragment>
      <QuestionHeader questionText={questionText} />
      <h3>Response from server: </h3>
      {/* {data.map(post => <React.Fragment key={post.id}>
        <h4>{post.id}. {post.title}</h4>
      </React.Fragment> )} */}
      <p>
        <b>URL: </b> {url}
      </p>
      <p>
        <b>OK: </b> {ok ? 'true' : 'false'}
      </p>
      <p>
        <b>Status: </b> {status}
      </p>
    </React.Fragment>
  )
}

export default Question8
