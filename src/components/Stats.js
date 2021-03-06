import React, {useContext} from 'react';
import { scoreContext } from '../context';

export default function Stats() {
  const { players } = useContext(scoreContext);
    
  const totalPlayers = players.length;
  const totalPoints = players.reduce( (total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{ totalPlayers }</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{ totalPoints }</td>
        </tr>
      </tbody>
    </table>
  );
}


