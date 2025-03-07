import FullScreenSlider from "@/components/common/fullscreen-slider";
import ProductContent from "@/components/pages/product/product-content";
import Similar from "@/components/pages/product/similiar";
import { PageProps } from "@/lib/type";

export default async function Page(props: PageProps) {
  const { id } = await props.params;

  return (
    <>
      <ProductContent id={id} />
      <FullScreenSlider />
      <Similar />
    </>
  );
}
