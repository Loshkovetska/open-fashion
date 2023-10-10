import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import Banner from "../components/pages/main/Banner";
import Arrival from "../components/pages/main/Arrival";
import Logos from "../components/pages/main/Logos";
import Collections from "../components/pages/main/Collections";
import Just4U from "../components/pages/main/Just4U";
import Trend from "../components/pages/main/Trend";
import OpenFashion from "../components/pages/main/OpenFashion";
const Home: NextPage = () => {

  return (
    <Layout>
      <Banner />
      <Arrival />
      <Logos />
      <Collections />
      <Just4U />
      <Trend />
      <OpenFashion />
    </Layout>
  );
};

export default Home;
