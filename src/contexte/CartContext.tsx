import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Cart {
  id: string | number;
}

interface CartContextType {
  cart: Cart[] | null;
  setCart: (cart: Cart[]) => void;
  addProduct: (product: Cart) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const addProduct = (product: Cart) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("UseCart must be used within a UserProvider");
  }
  return context;
};
