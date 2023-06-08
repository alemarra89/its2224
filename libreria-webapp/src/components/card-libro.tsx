import Libro from "../models/libro";

interface Props {
  libro: Libro;
  // param: string;
  // altraCosa: Function;
  eliminaLibro: () => void
}

function CardLibro(props: Props) {
  const { libro, eliminaLibro } = props;
  return (
    <div>
      <h3>{libro.titolo}</h3>
      <p>{libro.autore}</p>
      <p>{libro.prezzo} €</p>
      <button onClick={eliminaLibro}>Elimina 🔥</button>
      <hr />
    </div>
  );
}

export default CardLibro;
