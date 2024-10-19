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

export type OrderItemType = {
  product: {
    name: string;
    price: number;
  };
  quantity: number;
};

export type UserType = {
  firstname: string;
  email: string;
  address: string;
};

export type OrderType = {
  id: number;
  createdAt: string;
  total: number;
  status: string;
  items: OrderItemType[];
  userId: number;
  user: UserType;
};
