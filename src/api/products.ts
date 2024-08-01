const apiKey = import.meta.env.VITE_API_KEY;

export const fetchProducts = async () => {
  const response = await fetch(`${apiKey}/products`);
  const data = await response.json();
  return data;
};
