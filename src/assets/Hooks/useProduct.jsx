import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProduct = () => {
  const {  data: product = [], isError, error } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const res = await axios.get('https://dummyjson.com/products');
      return res.data;
    },
    onError: (err) => {
      console.error("Error fetching products:", err); 
    },
  });

  return { product, isError, error };
};

export default useProduct;
