import React from 'react';

export default function Hero({handleLogout}) {
  return <section className='hero'>
      <nav>
          <h2>Welcome</h2>
          <button onClick={handleLogout}>Log Out</button>
      </nav>
  </section>;
}
