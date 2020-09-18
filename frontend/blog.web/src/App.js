import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import * as service from './api/customersService'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8", {
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
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {items.map(item => (
              <li key={item.name}>
                {item.name}
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
