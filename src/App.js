import React, { useEffect, useState } from 'react';
import './App.css';
import { getTestMessage, echoMessage } from './api';

function App() {
  const [testMessage, setTestMessage] = useState('');
  const [echoedMessage, setEchoedMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const fetchTestMessage = async () => {
      try {
        const message = await getTestMessage();
        setTestMessage(message);
      } catch (error) {
        console.error('Error fetching test message:', error);
      }
    };

    fetchTestMessage();
  }, []);

  const handleEcho = async () => {
    try {
      const echoed = await echoMessage(inputMessage);
      setEchoedMessage(echoed);
    } catch (error) {
      console.error('Error echoing message:', error);
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Backend Test</h1>
          <p>Test Message: {testMessage}</p>
          <div>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Enter a message"
            />
            <button onClick={handleEcho}>Echo</button>
          </div>
          {echoedMessage && <p>Echoed Message: {echoedMessage}</p>}
        </header>
      </div>
  );
}

export default App;