import { defineStore } from "pinia";
import type { GlobalSliceType } from "@/shared/type";

export const useGlobalStore = defineStore("global", {
  state: () =>
    ({
      isMenuOpen: false,
      isSearchOpen: false,
      isGalleryOpen: false,
      isCartOpen: false,
    } as GlobalSliceType),

  actions: {
    changeDialogState(action: keyof GlobalSliceType) {
      this[action] = !this[action];
    },
  },
});
