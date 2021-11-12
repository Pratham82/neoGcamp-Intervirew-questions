import React, { useState, useEffect } from 'react'

export default function ShowTitles() {
  const [titles, setTitles] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/todos'
  useEffect(() => {
    function fetchData() {
      fetch(URL)
        .then(res => res.json())
        .then(data => setTitles(data.slice(0, 10)))
        .catch(err => console.log(err))
    }
    fetchData()
  }, [])

  return (
    <>
      {titles.length > 0 ? (
        titles.map(todo => <h1 key={todo.id}>Title: {todo.title}</h1>)
      ) : (
        <h1> Sorry not able to fetch the data</h1>
      )}
    </>
  )
}
