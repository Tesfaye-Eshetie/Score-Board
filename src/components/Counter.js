import React, { useContext } from 'react';
import { scoreContext } from '../context';

export default function Counter({ index }) {
    const { actions, players } = useContext(scoreContext);
  return (
    <div className="counter">
        <button className="counter-action decrement" onClick={() => actions.changeScore(index, -1)}> - </button>
        <span className="counter-score">{ players[index].score }</span>
        <button className="counter-action increment" onClick={() => actions.changeScore(index, 1)}> + </button>
    </div>  
  );
}


