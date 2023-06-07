import { Product } from "../models/product";

interface Props {
  product: Product;
}

function CardProduct(props: Props) {
  const { name, price } = props.product;
  return (
    <div style={{ border: '5px solid red', margin: 10}}>
      <p>
        {name} {price}
      </p>
    </div>
  );
}

export default CardProduct;
