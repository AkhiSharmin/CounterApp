
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}


function Counter() {

  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)


  function handelReset() {
    setCount(0);
    setStep(1)
  }


  const date = new Date('October 21 2023')
  date.setDate(date.getDate() + count)

  return <div style={{ width: '300px', height: '200px', border: "5px solid red", display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '250px' }}>
    <div>
      <div style={{ padding: '10px' }}>
        <button onClick={() => setStep(count - 1)}>- </button>
        <span style={{ padding: '5px' }}>Step: {step}</span>
        <button onClick={() => setStep(count + 1)}>+ </button>
      </div >

      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span style={{ padding: '5px' }}>Count: {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div >

      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was`}</span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ?
        (<div>
          <button onClick={handelReset}>Reset</button>
        </div>
        ) : null}

    </div>
  </div>
}




export default App;
