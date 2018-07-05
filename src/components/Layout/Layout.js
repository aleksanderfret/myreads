import React from 'react';

const layout = (props) => (
  <React.Fragment>
    <header className='list-books-title'>
      <h1>MyReads</h1>
    </header>
    <main className='list-books-content'>
      {props.children}
    </main>
  </React.Fragment>
);

export default layout;
