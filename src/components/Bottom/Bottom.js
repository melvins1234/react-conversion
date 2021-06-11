import { BottomHeader } from "./BottomHeader";
import { Card } from "../Card/Card";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import "./BottomMedia.scss";

export const Bottom = () => {
  const productList = useSelector((state) => state.products);

  let productListCard = productList.map((e) => {
    return (
      <Card
        key={JSON.stringify(e)}
        datatest={e.id}
        image={e.image}
        product={e.product}
        price={e.price}
        discountedPrice={e.discountedPrice}
        stars={e.stars}
        hotProduct={e.hotProduct}
      />
    );
  });

  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <BottomHeader />
        <article className="bottom1__products">{productListCard}</article>
        <NavLink to="/product" className="bottom1__button">
          Load More
        </NavLink>
      </section>
    </section>
  );
};

export const BottomProduct = () => {
  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <header className="bottom1__header">
          <h2>Related Products</h2>
        </header>

        <article className="bottom1__products bottom1__products--margin">
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
          <Card
            product={"Apple MacBook Pro"}
            discountedPrice={"499"}
            price={"599"}
            image={"macbook-pro.png"}
            stars={4}
          />
        </article>
      </section>
    </section>
  );
};
