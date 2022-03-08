import React, {useState, createContext} from 'react';

export const scoreContext = createContext();

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

 // player id counter
 let prevPlayerId = 4;

 const handleAddPlayer = (name) => {
   setPlayes( prevState => [
       ...prevState,
         {
           name,
           score: 0,
           id: prevPlayerId += 1
         }
       ]
   );
 }

 const handleRemovePlayer = (id) => {
   setPlayes(players.filter(p => p.id !== id));
 }

return (
    <scoreContext.Provider value={{
        players: players,
        actions: {
            removePlayer: handleRemovePlayer,
            addPlayer: handleAddPlayer
        }
        }}>
        { children }
    </scoreContext.Provider>
);
}  



