import React, { useEffect, useState } from 'react'

export default function BorderSwitch() {
  const [border, setBorder] = useState(0)
  const [message, setMessage] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://quick-access-api.desaihetav.repl.cao/')
        const data = await res.json()
        setMessage(data.message)
      } catch (err) {
        setMessage('Message not fetched')
      }
    }
    fetchData()
    // fetch('https://quick-access-api.desaihetav.reupl.co/')
    //   .then(res => res.json())
    //   .then(data => setMessage(data.message))
    //   .catch(err => console.log(err))
  }, [message])
  return (
    <>
      <h1 style={{ border: `${border}px solid black` }}>Prathamesh</h1>
      <button onClick={() => setBorder(5)}>5px</button>
      <button onClick={() => setBorder(10)}>10px</button>
      <h2>{message}</h2>
    </>
  )
}
