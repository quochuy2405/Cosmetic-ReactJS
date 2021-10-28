import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Cart">
      <Header />
      <div className="body_Page">
        <Anhdep />
      </div>
    </div>
  );
}

export default Cart;
