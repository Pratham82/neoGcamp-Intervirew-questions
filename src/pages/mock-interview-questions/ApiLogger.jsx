import { useEffect, useState } from 'react'

export default function APILogger() {
  const [error, setError] = useState('')

  const URL = 'https://mystery-api.kushanksriraj.repl.co/get'
  useEffect(() => {
    function fetchData() {
      fetch(URL)
        // .then(res => res.json())
        .then(data => {
          const { status } = data
          const errorMessage =
            status === 404
              ? 'page not found'
              : status === 401
              ? 'You are not logged in'
              : 'Success'
          setError(errorMessage)
          console.log(status)
        })
        .catch(err => console.log(err))
    }
    fetchData()
  }, [])

  return (
    <>
      {' '}
      <h1>{error}</h1>
    </>
  )
}
