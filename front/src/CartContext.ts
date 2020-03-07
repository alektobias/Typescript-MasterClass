import { createContext } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}


interface Cart {
  products?: Product[];
  shipping_value?: number;
}

const CartContext = createContext<Cart>({
  products: [],
  shipping_value: 0
});

export default CartContext