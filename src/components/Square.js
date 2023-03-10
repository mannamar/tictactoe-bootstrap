import React from 'react';
import { useState } from 'react';

export default function Square({ value, onSquareClick }) {

    return <button className={`square ${value}`} onClick={onSquareClick}>{value}</button>;

}