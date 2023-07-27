import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';

function ButtonAdd({ setWarning }) {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0)
  

  useEffect(() => {
    if (count > 21) {
      setWarning(true);
    } else if (count == 21) {
      setScore(score + 100);
      alert('Yummm... Here You Go!');
      alert('Looks Like He Is Very Satisfied!')
      setCount(0);
    }
  }, [count])

  function handleAdd() {
    setCount(count + Math.floor(Math.random() * 10) + 1);
  }

  function handleFeed() {
    if (count > 15) {
      setScore(score + (count - 15) * 5);
      alert('Yes, Yes, I Want More!')
    } else {
      alert('No, No, That Is Not Enough')
    }
    setCount(0)
  }

  
  return (
    <div className='Buttons'>

      <p className='App-notes'>You got {count} to feed</p>
      
      

      { score == 0
        ? <p className='App-explanation'>Start Feeding Dinosaur To Get Coins!</p>
        : <p className='App-notes'>You Have {score} coins</p>
      }

      <button className='App-button' onClick={handleAdd}>
        Add More
      </button>

      <button className='App-button' onClick={handleFeed}>
        Feed
      </button>
    </div>
  )
}


function GameOver() {
  return (
    <div className='GameOver'>
      <h1>Game Over</h1>
      <p className='App-notes'>Dinosaur Is Having A Stomach Ache... </p>
      <p className='App-notes'>He Took All Your Coins Back!</p>
    </div>
  )
}


function App() {

  const [warning, setWarning] = useState(false)

  function resetGame() {
    setWarning(false);
  }
  
  return (
    <div className="App">
      <br></br>
      <div className='App-game'>
        { !warning 
          ? 
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Feed Me!</h1>
            <p className='App-explanation'>Hungry Dinosaur Wants More Than 15 For A Meal.</p>
            <p className='App-explanation'>He Will Give You Coins If He's Satisfied!</p>
            <p className='App-explanation'>But Maybe Not Too Much At One Time For His Stomach...</p>
            <ButtonAdd setWarning={setWarning}/>
          </div>
          :
          <div>
            <GameOver/>
            <button className='App-button' onClick={resetGame}>Try Again</button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;

