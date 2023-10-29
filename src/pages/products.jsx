import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/buttons/Button";
import { useState } from "react";
const products = [
  {
    id: 1,
    image: "/images/army.jpg",
    name: "Amry One Set",
    price: 120000,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nisi ut id mollitia cumque consequatur sit doloremque? Magnam laboriosam commodi mollitia itaque quaerat sit enim corrupti facere dolor, odio minus`,
  },
  {
    id: 2,
    image: "/images/black.jpg",
    name: "Black One Set",
    price: 125000,
    description: `Est nisi ut id mollitia cumque consequatur sit doloremque? Magnam laboriosam commodi mollitia itaque quaerat sit enim corrupti facere dolor, odio minu`,
  },
  {
    id: 3,
    image: "/images/cream.jpg",
    name: "Cream One Set",
    price: 90000,
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum?`,
  },
  {
    id: 4,
    image: "/images/creamysage.jpg",
    name: "Creamy Sage One Set",
    price: 200000,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum tempore debitis recusandae, nam aspernatur natus!`,
  },
];
const email = localStorage.getItem("email");
const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <>
      <div className="flex justify-end bg-blue-500 text-white h-12 items-center gap-x-4 px-10">
        {email}
        <Button
          width="bg-white  px-6 hover:bg-red-500 hover:text-white transition ease-in-out text-black"
          text="Logout"
          onClick={handleLogout}
        ></Button>
      </div>
      <div className="flex flex-wrap mt-5">
        <div className="flex flex-wrap px-5 gap-5  w-3/5">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/5">
          <h1 className="text-3xl font-bold text-blue-600">Card</h1>

          <table className="table-auto text-left text-md border-separate border-spacing-x-2">
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
