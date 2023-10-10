import type { NextPage } from "next";
import Layout from "../../components/common/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ProductContent from "../../components/pages/product/ProductContent";
import { setGood } from "../../store/productSlice";
import goods from "../../mocks/goods";
import FullScreenSlider from "../../components/common/FullScreenSlider";
import Similar from "../../components/pages/product/Similar";

const Products: NextPage = (props: any) => {
  const dispatch = useDispatch();

  const { query } = useRouter();
  const { good } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(setGood(query?.id));
  }, [query?.id]);

  return (
    <Layout headerColor={props.headerColor}>
      <ProductContent />
      <FullScreenSlider images={good?.src || []} />
      <Similar />
    </Layout>
  );
};

export default Products;

export const getStaticPaths = () => {
  const paths = Array();

  goods.forEach((c) => {
    paths.push({
      params: { id: String(c._id), path: `/products/${c._id}` },
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps = (props: any) => {
  return {
    props: { headerColor: "bg-white" },
  };
};
