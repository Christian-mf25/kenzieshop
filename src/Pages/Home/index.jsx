import Products from "../../components/Products";
import Cart from "../../components/Cart";
import Menu from "../../components/Menu";
import { useState } from "react";

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(!showCart);

  return (
    <section>
      <Menu handleShowCart={handleShowCart} style={{ width: "100vw" }} />

      <Products showCart={showCart} />

      <Cart showCart={showCart} />
    </section>
  );
};

export default Home;
