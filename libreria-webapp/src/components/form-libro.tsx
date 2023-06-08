import { useState } from "react";
import Libro from "../models/libro";

interface Props {
  aggiungiLibro: (libro: Libro) => void
}

function FormLibro(props: Props) {

  const { aggiungiLibro } = props;

  const [titolo, setTitolo] = useState<string>("");
  const [autore, setAutore] = useState<string>("");
  const [prezzo, setPrezzo] = useState<number>(0);

  const onChangeTitolo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitolo(event.target.value);
  };
  const onChangeAutore = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutore(event.target.value);
  };
  const onChangePrezzo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrezzo(event.target.valueAsNumber);
  };

  return (
    <div>
      <input type='text' placeholder='Titolo' value={titolo} onChange={onChangeTitolo} />
      <input type='text' placeholder='Autore' value={autore} onChange={onChangeAutore} />
      <input type='number' placeholder='Prezzo' value={prezzo} onChange={onChangePrezzo} />
      <button onClick={() => aggiungiLibro({titolo, autore, prezzo})}>Aggiungi libro</button>
    </div>
  )
}

export default FormLibro