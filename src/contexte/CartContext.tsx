import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface CartContextType {
  cart: string[] | null;
  setCart: (cart: string[]) => void;
  clearCart: () => void;
  addProduct: (product: string) => void;
  removeProduct: (product: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<string[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const addProduct = (product: string) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeProduct = (product: string) => {
    setCart((prev) => {
      const pos = prev.indexOf(product);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  };
  const clearCart = () => {
    localStorage.setItem("cart", "[]");
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addProduct, removeProduct, clearCart }}
    >
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
