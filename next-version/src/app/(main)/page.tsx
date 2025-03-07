import Arrival from "@/components/pages/main/arrival";
import Banner from "@/components/pages/main/banner";
import Collections from "@/components/pages/main/collections";
import Just4U from "@/components/pages/main/just4u";
import Logos from "@/components/pages/main/logos";
import OpenFashion from "@/components/pages/main/open-fashion";
import Trend from "@/components/pages/main/trend";

export default function Page() {
  return (
    <>
      <Banner />
      <Arrival />
      <Logos />
      <Collections />
      <Just4U />
      <Trend />
      <OpenFashion />
    </>
  );
}
