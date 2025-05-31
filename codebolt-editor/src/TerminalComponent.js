import React from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

function TerminalComponent() {
  // Define commands here or pass them in as props if you want more dynamic commands
  const commands = {
    whoami: 'codebolt_user',
    help: () => (
      <span>
        <strong>Available commands:</strong>
        <br />
        help - Show this help message
        <br />
        whoami - Display the current user
        <br />
        date - Display the current date
        <br />
        clear - Clear the terminal
      </span>
    ),
    date: () => new Date().toString(),
    // 'clear' is often an built-in command, but we can also define it
    // clear: provided by default by react-terminal
  };

  const welcomeMessage = (
    <span>
      Welcome to the CodeBolt Terminal! Type 'help' to see available commands.
      <br />
    </span>
  );

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactTerminal
        commands={commands}
        welcomeMessage={welcomeMessage}
        prompt="$"
        theme="dracula" // Or any other theme like "light", "dark", "material-dark" etc.
        showControlBar={false} // Depending on preference
        errorMessage="Command not found!"
      />
    </div>
  );
}

export default TerminalComponent;
