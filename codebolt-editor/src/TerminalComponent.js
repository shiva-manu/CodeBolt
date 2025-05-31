import React from 'react';
import { XTerm } from 'xterm-for-react';

function TerminalComponent() {
  // You can implement shell logic here.
  // For now, it's a simple echo terminal.
  const onData = (data) => {
    // Echo back the input
    // In a real terminal, you would send this to a shell process
    xtermRef.current.terminal.write(data);
    if (data.charCodeAt(0) === 13) { // Enter key
        xtermRef.current.terminal.write('\r\n$ ');
    } else if (data.charCodeAt(0) === 127) { // Backspace
        // Handle backspace: move cursor back, erase char, move cursor back again
        xtermRef.current.terminal.write('\b \b');
    }
  };

  const xtermRef = React.useRef(null);

  React.useEffect(() => {
    if (xtermRef.current) {
      xtermRef.current.terminal.writeln('Welcome to CodeBolt Terminal!');
      xtermRef.current.terminal.write('$ ');
    }
  }, []);

  return (
    <XTerm
      ref={xtermRef}
      onData={onData}
      options={{
        cursorBlink: true,
        theme: {
          background: '#1e1e1e',
          foreground: '#d4d4d4',
        }
      }}
    />
  );
}

export default TerminalComponent;
