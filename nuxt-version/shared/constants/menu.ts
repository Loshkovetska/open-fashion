const COMMON_LIST = [
  {
    title: 'Outer',
    link: '/',
  },
  {
    title: 'Dress',
    link: '/',
  },
  {
    title: 'Blouse',
    link: '/',
  },
  {
    title: 'T-shirt',
    link: '/',
  },
]

const COMMON_TAB_LIST = [
  {
    title: 'New',
    list: COMMON_LIST,
  },
  {
    title: 'Apparel',
    list: COMMON_LIST,
  },
  {
    title: 'Bag',
    list: COMMON_LIST,
  },
  {
    title: 'Shoes',
    list: COMMON_LIST,
  },
  {
    title: 'Beauty',
    list: COMMON_LIST,
  },
  {
    title: 'Accessories',
    list: COMMON_LIST,
  },
]

const MENU_TABS = [
  {
    tab: 'Women',
    list: COMMON_TAB_LIST,
  },
  {
    tab: 'Men',
    list: [
      {
        title: 'New',
        list: COMMON_LIST,
      },
      {
        title: 'Apparel',
        list: COMMON_LIST,
      },
      {
        title: 'Beauty',
        list: COMMON_LIST,
      },
    ],
  },
  {
    tab: 'Kids',
    list: [
      {
        title: 'New',
        list: COMMON_LIST,
      },
      {
        title: 'Apparel',
        list: COMMON_LIST,
      },
    ],
  },
]

export { MENU_TABS }
