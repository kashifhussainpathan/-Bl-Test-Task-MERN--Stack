const ProductCard = ({ product }) => {
  const { id, title, price, rating, thumbnail } = product;

  return <div>{title}</div>;
};

export default ProductCard;
