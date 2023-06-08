import React, { useState } from 'react';
import './App.css';
import Libro from './models/libro';
import CardLibro from './components/card-libro';
import FormLibro from './components/form-libro';

function App() {

  const [elencoLibri, setElencoLibri] = useState<Libro[]>([]);

  const aggiungiLibro = (libro: Libro) => {
    setElencoLibri([...elencoLibri, libro]);
  };

  const eliminaLibro = (i: number) => {
    setElencoLibri(elencoLibri.filter((_, index) => index !== i));
  };

  return (
    <div className="App">

      {/* form di inserimento libro */}
      <FormLibro aggiungiLibro={aggiungiLibro} />

      {/* elenco libri */}
      <div>
        {elencoLibri.map((libro, index) => (
          <CardLibro
            key={"libro-" + index}
            libro={libro}
            eliminaLibro={() => eliminaLibro(index)}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
