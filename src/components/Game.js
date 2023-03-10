import React from 'react';
import { useState } from 'react';
import Board from './Board';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Container } from 'react-bootstrap';


export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <Button variant="light" className="btn" onClick={() => jumpTo(move)}>{description}</Button>
      </li>
    );
  });

  return (
    <Container>
      <h1 className="title">Tic Tac Toe</h1>
      <Row className="game">
        <Col className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </Col>
        <Col className="game-info">
          <ol>{moves}</ol>
        </Col>
      </Row>
    </Container>
  );
}