import Carousel from "@/components/Carousel/Carousel";
import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";
import SingleProductCard from "@/components/SingleProductCard/SingleProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mainHomeSection">
      <Carousel />
      <section className="spaceTopBottom">
      <div className="container">
        <div className="headingDiv">
          <h3 className="headingDivTitle">Cushioning for Your Miles</h3>
          <p className="headingDivTitleDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            voluptates et ex officiis velit illo enim non, odit in voluptatibus.
          </p>
        </div>
        <ProductsContainer className={"customProductsContainer"}>
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
          <SingleProductCard />
        </ProductsContainer>
      </div>
      </section>
    </main>
  );
}
