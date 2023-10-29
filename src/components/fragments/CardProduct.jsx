import Button from "../elements/buttons/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex flex-col justify-between max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow ">
        {children}
      </div>
    </>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a>
      <img
        src={image}
        alt=""
        className="p-8 rounded-md w-full max-h-60 object-cover"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full ">
      <a>
        <h5 className="text-white tracking-tighter text-xl font-semibold">
          {name}
        </h5>
      </a>
      <p className="text-md text-white">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex justify-between items-center px-5 pb-5  text-white">
      <span className="text-2xl  font-semibold">
        Rp.{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button
        text="Add To Cart"
        width="w-content px-5"
        onClick={() => handleAddToCart(id)}
      ></Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
