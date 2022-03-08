import React, {useContext} from 'react';
import { scoreContext } from '../context';
import Player from './Player';

export default function PlayerList () {
    const { players } = useContext(scoreContext);
  return (
    <>
        {players.map( (player, index) =>
        <Player 
            key={player.id.toString()} 
            index={index}         
        />
        )}
    </>
  );
}

