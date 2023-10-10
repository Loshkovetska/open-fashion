import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import Content from "../components/pages/checkout/Content";
const Home: NextPage = (props: any) => {
  return (
    <Layout headerColor={props.headerColor}>
      <Content />
    </Layout>
  );
};

export default Home;

export const getStaticProps = (props: any) => {
  return {
    props: { headerColor: "bg-white" },
  };
};
