import { Fragment } from "react";
import { Product, FooterBanner, HeroBanner } from "../Components/index";
import { client } from "../lib/client";
export const Home = ({ bannerData, products }) => {
  return (
    <Fragment>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers for many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
