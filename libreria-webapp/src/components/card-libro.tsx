import { Button, Card } from "react-bootstrap";
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
    // <div>
    //   <h3>{libro.titolo}</h3>
    //   <p>{libro.autore}</p>
    //   <p>{libro.prezzo} €</p>
    //   <button className="btn btn-danger" onClick={eliminaLibro}>Elimina 🔥</button>
    //   <hr />
    // </div>
    <Card>
      <Card.Body>
        <Card.Title>{libro.titolo}</Card.Title>
        <Card.Text>
          {libro.autore}
        </Card.Text>
        <Card.Text>
          {libro.prezzo}
        </Card.Text>
        <Button variant="primary" onClick={eliminaLibro}>Elimina 🔥</Button>
      </Card.Body>
    </Card>

  );
}

export default CardLibro;
