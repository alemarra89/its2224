import { format } from "date-fns";

const rain = "https://cdn-icons-png.flaticon.com/256/116/116251.png";
const sun = "https://cdn-icons-png.flaticon.com/512/831/831682.png";

interface Props {
  orario: string;
  temperatura: number;
  temperatura_udm: string;
  precipitazioni: number;
  precipitazioni_udm: string;
}

function CardMeteo({
  orario,
  temperatura,
  temperatura_udm,
  precipitazioni,
  precipitazioni_udm,
}: Props) {
  // const {orario, temperatura, precipitazioni} = props;
  return (
    <div style={{ minWidth: 200, textAlign: 'center', padding: 10, margin: 5, border: '1px solid #CCC' }}>
      <p>{format(new Date(orario), "dd MMM HH:mm")}</p>
      <img src={precipitazioni > 0 ? rain : sun} style={{ width: 80 }} alt="Meteo" />
      <p>{temperatura} {temperatura_udm}</p>
      <p>{precipitazioni} {precipitazioni_udm}</p>
    </div>
  );
}

export default CardMeteo;
