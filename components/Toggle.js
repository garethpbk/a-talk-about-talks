import React, { useState } from 'react';

function Toggle() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: '400px', border: '1px solid steelblue' }}>
      <p>I am a React component and my state is: {open ? 'open' : 'closed'}</p>
      <div style={{ height: '100px', backgroundColor: 'peru' }} onClick={() => setOpen(!open)}>
        Click Me
      </div>
      <div
        style={{
          opacity: open ? 1 : 0,
          height: open ? '400px' : '0px',
          backgroundColor: 'cornflowerblue',
          transition: 'all 0.25s linear',
        }}
      >
        Open!
      </div>
    </div>
  );
}

export default Toggle;
