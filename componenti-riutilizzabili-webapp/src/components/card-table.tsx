import { Table } from "../models/table";
import CardCategory from "./card-category";

interface Props {
  table: Table;
}

function CardTable(props: Props) {
  const { categories } = props.table;
  return (
    <div style={{ border: '5px solid green', margin: 50}}>
      <div><p>Name Price</p></div>
      {categories.map((category, index) => (
        <CardCategory key={'category-' + index} category={category} />
      ))}
    </div>
  );
}

export default CardTable;
