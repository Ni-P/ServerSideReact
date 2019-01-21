// import * as React from 'react';
const React = require('react');

const Home = () => {
  return (
    <div>
      <div>I'm the Home component</div>
      <button
        onClick={() => {
          console.log('General Kenobi!');
        }}
      >
        Hi there!
      </button>
    </div>
  );
};

export default Home;
