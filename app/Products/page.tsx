import React from "react";
import ProductCard2 from "../../Components/ProductCard2";
// import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

export default function ProductsPage({}: Props) {
  return (
    <div className="mt-20 w-screen h-screen">
      <ProductCard2 />
    </div>
  );
}
