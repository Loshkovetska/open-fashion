type MenuTab = {
  title: string;
  list: Array<{
    title: string;
    link: string;
  }>;
};

type ProductType = {
  _id: number;
  title: string;
  description: string;
  price: number;
  src: string[];
  cat: string;
  isNew: boolean;
  rate: number;
  sizes: string[];
  colors: {
    title: string;
    value: string;
  }[];
};

type CartItemType = Omit<ProductType, "src"> & {
  count: number;
  color?: string;
  size?: string;
  src: string;
};

type GlobalSliceType = {
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  isGalleryOpen: boolean;
  isCartOpen: boolean;
};

type CartSliceType = {
  cartList: CartItemType[];
  item: CartItemType | null;
};

type AddressType = {
  fname: string;
  lname: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
};

type CardType = {
  cardOwner: string;
  cardNumber: string;
  expiredDate: string;
  CVV: string;
};

type OrderSliceType = {
  shippingAddress: AddressType | null;
  promocode: string;
  delivery: {
    title: string;
    price: string | number;
  };
  card: CardType | null;
  currentTab: number;
};

type ProductSliceType = {
  goodsList: ProductType[];
  filterGoods: ProductType[];
  filters: {
    sortBy: "New" | "Rating" | "Price";
    dir: "down" | "up";
    view: "grid" | "list";
    q?: string;
  };
  good?: ProductType;
};

type DialogPropType = {
  open: boolean;
  onOpenChange: () => void;
};

export type {
  AddressType,
  CardType,
  CartItemType,
  CartSliceType,
  DialogPropType,
  GlobalSliceType,
  MenuTab,
  OrderSliceType,
  ProductSliceType,
  ProductType,
};
