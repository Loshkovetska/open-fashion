<script setup lang="ts">
import Auto from "@/components/icons/auto-icon.vue";
import Code from "@/components/icons/code-icon.vue";
import CrossTriangle from "@/components/icons/cross-triangle.vue";
import Iron from "@/components/icons/iron-icon.vue";
import Machine from "@/components/icons/machine-icon.vue";
import Return from "@/components/icons/return-icon.vue";
import Wash from "@/components/icons/wash-icon.vue";

import ProductAccordion from "@/components/pages/product/product-accordion.vue";
</script>

<template>
  <div class="flex flex-col">
    <span class="text-base mb-2 leading-5 uppercase">MATERIALS</span>
    <p class="text-base leading-6 mb-4 text-gray-label">
      We work with monitoring programmes to ensure compliance with safety,
      health and quality standards for our products.
    </p>
    <span class="text-base mb-2 leading-5 uppercase">Care</span>
    <p class="text-base leading-6 mb-4 text-gray-label">
      To keep your jackets and coats clean, you only need to freshen them up and
      go over them with a cloth or a clothes brush. If you need to dry clean a
      garment, look for a dry cleaner that uses technologies that are respectful
      of the environment.
    </p>
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-2 text-base leading-6">
        <CrossTriangle />
        Do not use bleach
      </li>
      <li class="flex items-center gap-2 text-base leading-6">
        <Machine />
        Do not tumble dry
      </li>
      <li class="flex items-center gap-2 text-base leading-6">
        <Wash />
        Dry clean with tetrachloroethylene
      </li>
      <li class="flex items-center gap-2 text-base leading-6">
        <Iron />
        Iron at a maximum of 110ºC/230ºF
      </li>
    </ul>
    <span class="text-base mb-5 leading-5 uppercase mt-10">FAQ</span>
    <div class="flex flex-col gap-3">
      <ProductAccordion
        title="Free Flat Rate Shipping"
        text="Estimated to be delivered on 09/11/2021 - 12/11/2021."
        :icon="Auto"
      />
      <ProductAccordion
        title="COD Policy"
        text="Estimated to be delivered on 09/11/2021 - 12/11/2021."
        :icon="Code"
      />
      <ProductAccordion
        title="Return Policy"
        text="Estimated to be delivered on 09/11/2021 - 12/11/2021."
        :icon="Return"
      />
    </div>
  </div>
</template>
