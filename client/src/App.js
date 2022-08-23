import React from 'react';

import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Routes>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      </Routes>
    </Router>
  );
}

export default App;