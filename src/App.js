// Amardeep Mann
// 3-10-23
// Tic Tac Toe Assignment
// We followed a React tutorial for a TicTacToe game then refactored it to use a componenet structure and also styled it to give it a unique flair
// Special feature: *Winning effect*

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Game from './components/Game';

function App() {
  return (
    <Game/>
  );
}

export default App;
