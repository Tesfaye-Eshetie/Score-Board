import React, {useState, createContext} from 'react';

export const scoreContext = createContext();

 // player id counter
 let prevPlayerId = 5;

export default function Provider({ children }) {
    const [players, setPlayes] = useState(
            [
              {
                name: "Messi",
                score: 0,
                id: 1
              },
              {
                name: "Ronaldo",
                score: 0,
                id: 2
              },
              {
                name: "Neymar",
                score: 0,
                id: 3
              },
              {
                name: "Mané",
                score: 0,
                id: 4
              }
            ]
    )


const handleScoreChange = (index, delta) => {
  setPlayes(prevState =>prevState.map((player, i) => {
    if(i === index) player.score += delta;
    return player;
    })
  )
}

 const handleAddPlayer = (name) => {
   if(name){
    setPlayes( prevState => [
        ...prevState,
          {
            name,
            score: 0,
            id: prevPlayerId++
          }
        ]
    );
    console.log(prevPlayerId);
  }
 }

 const handleRemovePlayer = (id) => {
   setPlayes(players.filter(p => p.id !== id));
 }

return (
    <scoreContext.Provider value={{
        players: players,
        actions: {
            changeScore: handleScoreChange,
            removePlayer: handleRemovePlayer,
            addPlayer: handleAddPlayer
        }
        }}>
        { children }
    </scoreContext.Provider>
);
}  



