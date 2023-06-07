import { Category } from "../models/category";
import CardProduct from "./card-product";

interface Props {
  category: Category;
}

function CardCategory(props: Props) {
  const { name, products } = props.category;

  return (
    <div>
      <div style={{ border: '5px solid lightblue', margin: 10}}>
        <h4>{name}</h4>
      </div>
      <div>
        {products.map((product, index) => (
          <CardProduct key={'product-' + index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CardCategory;
