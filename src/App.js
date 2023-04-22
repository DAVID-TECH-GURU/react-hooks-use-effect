import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Component rendered');
  });

  return <div>Hello, World!</div>;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is now ${count}`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function App() {
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return <div>Hello, World!</div>;
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;