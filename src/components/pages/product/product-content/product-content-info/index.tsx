import {
  Auto,
  Code,
  CrossTriangle,
  Iron,
  Machine,
  Return,
  Wash,
} from "@/components/icons";
import ProductAccordion from "@/components/pages/product/product-accordion";
export default function ProductContentInfo() {
  return (
    <div className="flex flex-col">
      <span className="text-base mb-2 leading-5 uppercase">MATERIALS</span>
      <p className="text-base leading-6 mb-4 text-gray-label">
        We work with monitoring programmes to ensure compliance with safety,
        health and quality standards for our products.{" "}
      </p>
      <span className="text-base mb-2 leading-5 uppercase">Care</span>
      <p className="text-base leading-6 mb-4 text-gray-label">
        To keep your jackets and coats clean, you only need to freshen them up
        and go over them with a cloth or a clothes brush. If you need to dry
        clean a garment, look for a dry cleaner that uses technologies that are
        respectful of the environment.
      </p>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2 text-base leading-6">
          <CrossTriangle />
          Do not use bleach
        </li>
        <li className="flex items-center gap-2 text-base leading-6">
          <Machine />
          Do not tumble dry
        </li>
        <li className="flex items-center gap-2 text-base leading-6">
          <Wash />
          Dry clean with tetrachloroethylene
        </li>
        <li className="flex items-center gap-2 text-base leading-6">
          <Iron />
          Iron at a maximum of 110ºC/230ºF
        </li>
      </ul>
      <span className="text-base mb-5 leading-5 uppercase mt-10">FAQ</span>
      <div className="flex flex-col gap-3">
        <ProductAccordion
          title="Free Flat Rate Shipping"
          text="Estimated to be delivered on 09/11/2021 - 12/11/2021."
          icon={<Auto />}
        />
        <ProductAccordion
          title="COD Policy"
          text="Estimated to be delivered on 09/11/2021 - 12/11/2021."
          icon={<Code />}
        />
        <ProductAccordion
          title="Return Policy"
          text="Estimated to be delivered on 09/11/2021 - 12/11/2021."
          icon={<Return />}
        />
      </div>
    </div>
  );
}
