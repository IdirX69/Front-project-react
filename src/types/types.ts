export type CategoryType = {
  id: number;
  name: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  categories: CategoryType;
  price: string;
};
