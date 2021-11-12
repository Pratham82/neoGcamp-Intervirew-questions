import { useEffect, useState } from "react";
import "./styles.css";

export default function RenderTitles() {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((todo) => (
        <h3 key={todo.id}>Title: {todo.title}</h3>
      ))}
    </div>
  );
}
