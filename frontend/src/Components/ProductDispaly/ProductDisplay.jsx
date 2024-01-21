import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="productDisplay">
      <div className="display-left">
        <h1>correct</h1>
        <h1>correct</h1>
        <h1>correct</h1>
        <h1>correct</h1>
        <h1>correct</h1>
        <h1>correct</h1>
        <h1>correct</h1>
        <h1>correct</h1>
        <h1>correct</h1>

        <div className="productDisplay-img">
          {/* <img className="productDisplay-img-main" src={product.image} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
