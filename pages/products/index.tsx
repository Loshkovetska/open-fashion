import type { NextPage } from "next";
import Layout from "../../components/common/Layout";
import ProductsFilter from "../../components/pages/products/ProductsFilter";
import ProductsList from "../../components/pages/products/ProductsList";

const Products: NextPage = (props: any) => {
  return (
    <Layout headerColor={props.headerColor}>
      <ProductsFilter />
      <ProductsList />
    </Layout>
  );
};

export default Products;

export const getStaticProps = (props: any) => {
  return {
    props: { headerColor: "bg-white" },
  };
};
