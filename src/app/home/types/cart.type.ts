import { Product } from "../componets/products/products.type";


export interface CartItem {
  product: Product;
  quantity: number;
  amount: number;
}

export interface Cart {
  products: CartItem[];
  totalAmount: number;
  totalProducts: number;
}
export interface loginToken {
  token: string;
  expiresInSeconds: number;
}