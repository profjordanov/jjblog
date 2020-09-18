import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import * as service from './api/customersService'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://localhost:9001/api/articles", {
      headers: {
        'Content-Type': 'application/json'
      },
    })
        .then(res => res.json())
        .then(
            (result) => {
              setItems(result);
            },
            (error) => {
              console.error(error);
            }
        )
  }, []);

    const imgStyle = {
        width: "25%",
        height: "25%"
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {items.map(item => (
              <li key={item.id}>
                {item.title}
                  <br/>
                  <img src={item.image} alt="Logo" style={imgStyle} />
              </li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
