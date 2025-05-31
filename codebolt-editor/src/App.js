import React from 'react';
import './App.css';
import TerminalComponent from './TerminalComponent';
import { TerminalContextProvider } from 'react-terminal'; // Import the provider

function App() {
  return (
    <TerminalContextProvider> {/* Wrap the app with the provider */}
      <div className="App">
        <header className="App-header">
          <h1>CodeBolt Editor</h1>
        </header>
        <div className="main-content">
          <div className="editor-area">
            {/* Placeholder for the code editor */}
            <p>Editor Area - Content will go here</p>
          </div>
          <div className="terminal-area">
            <TerminalComponent />
          </div>
        </div>
      </div>
    </TerminalContextProvider>
  );
}

export default App;
