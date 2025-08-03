import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id} className='m-[9px] border-2 border-amber-50 p-2'>
          <p><strong>User ID:</strong> {item.userId}</p>
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Body:</strong> {item.body}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default App;
