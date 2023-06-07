import React, { useState } from 'react';
import './App.css';
import { Utente } from './models/utente';
import CardUtente from './components/card-utente';

function App() {

  // let listaUtenti: Array<Utente> = [];
  // const [ variabile, funzione ] = useState<type>(valore_iniziale);
  const [ listaUtenti, setListaUtenti ] = useState<Array<Utente>>([]);

  const getListaUtenti = () => {
    // faremo qui la fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((response: Array<Utente>) => {
        console.log('response', response);
        // listaUtenti = response;
        setListaUtenti(response);
      })
  };

  return (
    <div className="App">
      <button onClick={getListaUtenti}>Get lista utenti</button>
      <hr />
      <h4>Lista utenti</h4>
      {listaUtenti.map((utente) => (
        <CardUtente key={utente.id} utente={utente} />
        // <li key={utente.id}>{utente.name}</li>
      ))}
    </div>
  );
}

export default App;
