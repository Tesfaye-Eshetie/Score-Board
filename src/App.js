import Header from './components/Header';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

function App() {
  return (
    <div className="scoreboard">
     <Header />
     <PlayerList />
     <AddPlayerForm />  
    </div>
  );
}

export default App;
