import React from 'react';
import './App.css';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      <MouseContainer />
    </div>
  );
}

export default App;
