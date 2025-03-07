<script setup lang="ts">
import Close from "@/components/icons/close-icon.vue";
import SearchIcon from "@/components/icons/search-icon.vue";
import Input from "@/components/ui/input-ui.vue";
import Modal from "@/components/ui/modal-ui/modal-ui.vue";
import type { DialogPropType } from "@/shared/type";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const SEARCH_ITEMS = ["Trend"];

const { open, q, onOpenChange } = defineProps<
  { q?: string } & DialogPropType
>();

const inputValue = ref("");
const route = useRouter();

const onSubmit = (e: Event) => {
  e.preventDefault();
  if (inputValue.value.length) {
    route.push({ name: "products", query: { q: inputValue.value } });
    onOpenChange();
  }
};

const onChange = (v: string) => (inputValue.value = v);

onMounted(() => {
  inputValue.value = q || "";
});
</script>

<template>
  <Modal :isOpen="open">
    <form
      class="flex border-gray-label border-b pb-2 placeholder:text-gray-label placeholder:text-sm mt-2 gap-3"
      @submit="onSubmit"
    >
      <SearchIcon />
      <Input
        :value="inputValue"
        :onChange="onChange"
        class="flex-grow"
        placeholder="Search items"
      />
      <Close
        :onClick="onOpenChange"
        class="cursor-pointer"
      />
    </form>
    <span class="text-sm text-gray-placeholder my-3">Recent search</span>
    <div class="flex flex-wrap gap-4">
      <span
        class="flex gap-1 text-[13px] text-gray-label rounded-[33px] bg-gray-opacity py-[10px] px-[12px] items-center"
      >
        Dress <Close />
      </span>
    </div>
    <span class="text-sm text-gray-placeholder mt-4 mb-3">
      Popular search items
    </span>
    <NuxtLink
      to="/"
      :key="c"
      v-for="c in SEARCH_ITEMS"
      class="leading-3"
    >
      {{ c }}
    </NuxtLink>
  </Modal>
</template>
