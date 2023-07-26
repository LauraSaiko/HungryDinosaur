import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  function handleClick() {
    const newCount = (count + Math.floor(Math.random() * 10) + 1);
    
    if (newCount > 21) {
      alert('Dinosaur is having a stomach ache, and decided to take all your coins back!')
      setCount(0)
      setScore(0)
    } else {
      setCount(newCount);
    }
  }


  function handleScore() {
    if (count == 21) {
      setScore(score + 100)
      alert('Yummm, here you go!')
    } else if (count > 15) {
      setScore(score + (count - 15) * 5)
      alert('Thanks for feeding!')
    } else {
      alert('That Is Not Enough...')
    }
    setCount(0)
  }

  

  return (
    <div className='Buttons'>
      <p>You got {count} to feed</p>
      <p>Coin {score}</p>
      <button className='App-button' onClick={handleClick}>
        Add More
      </button>
      <button className='App-button' onClick={handleScore}>
        Feed
      </button>

      
      
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Feed Me!</h1>
          <p className='App-explanation'>Hungry dinosaur wants more than 15 for a meal, and will give you coins if he's satisfied! </p>
          <p className='App-explanation'>But maybe not too much at a time for health's sake...</p>
          
        </div>
        <Button />
      </header>
    </div>
  );
}

export default App;

