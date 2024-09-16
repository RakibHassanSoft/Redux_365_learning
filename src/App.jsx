import React from 'react';
import './index.css'
import Counter from './components/Counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (



    <div>

      <h2 className="text-center font-serif text-4xl">Redux</h2>
      <Counter></Counter>
  
      

    </div>
  );
};

export default App;