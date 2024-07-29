export type CategoryType = {
  id: number;
  name: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: { id: number; name: string };
  categoryId: number;
  price: string;
};
