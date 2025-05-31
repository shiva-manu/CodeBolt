import React from 'react';
import './App.css';
import TerminalComponent from './TerminalComponent'; // Import the new component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeBolt Editor</h1>
      </header>
      <div className="main-content">
        <div className="editor-area">
          {/* Placeholder for the code editor */}
          <p>Editor Area</p>
        </div>
        <div className="terminal-area" style={{ height: '300px', backgroundColor: '#1e1e1e' }}>
          <TerminalComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
