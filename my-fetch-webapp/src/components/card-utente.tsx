import { Utente } from "../models/utente";

interface Props {
  utente: Utente
}

function CardUtente(props: Props) {

  const {name, email, phone} = props.utente;
  // const name = props.utente.name;
  // const email = props.utente.email;
  // const phone = props.utente.phone;

  return (
    <div style={{
      width: 200,
      borderRadius: 20,
      borderWidth: 10,
      borderColor: 'pink',
      borderStyle: 'dashed',
      backgroundColor: '#DDDDDD'
    }}>
      <h5>{name}</h5>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default CardUtente;