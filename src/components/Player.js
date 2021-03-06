import React, { useContext} from 'react';
import { scoreContext } from '../context';
import Counter from './Counter';

export default function Player({ index }) {
    const { actions, players } = useContext(scoreContext);

    return (
      <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
            { players[index].name }
        </span>   
        <Counter index={ index } />
      </div>
    );
}

