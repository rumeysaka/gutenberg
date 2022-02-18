import React from 'react';
import Books from '../Books/Books';

export default function Cards(props) {
  const {user}= props
  return <div>
      <Books user={user} />
  </div>;
}
