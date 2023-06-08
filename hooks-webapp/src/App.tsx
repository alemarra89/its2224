import React, { useEffect, useState } from 'react';
import './App.css';

function Timer() {

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('funzione eseguita al mount del componente Timer');

    const idInterval = setInterval(() => {
      setCount((prevValue) => prevValue + 1);
    }, 1000);

    return () => {
      console.log('funzione eseguita all\'unmount del componente Timer');
      clearInterval(idInterval);
    }
  }, []);

  return (
    <div>
      <p>Timer: {count}</p>
    </div>
  )
}

function App() {

  const [visualizzaTimer, setVisualizzaTimer] = useState<boolean>(false);
  
  function invertiStato() {
    setVisualizzaTimer(!visualizzaTimer)
  }
  
  const [value, setValue] = useState<string>('');
  
  const quandoCambiaLaTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('il nuovo valore è', event.target.value);
    setValue(event.target.value);
  }

  return (
    <div className="App">

      <button onClick={invertiStato}>
        {visualizzaTimer ? "NASCONDI" : "MOSTRA"}
      </button>

      {visualizzaTimer && <Timer />}
      
      <hr />

      <input type='text' placeholder='Inserire il valore' value={value} onChange={quandoCambiaLaTextInput} />

      <button onClick={() => setValue("HELP")}>
        Setta il valore "HELP"
      </button>

    </div>
  );
}

export default App;
