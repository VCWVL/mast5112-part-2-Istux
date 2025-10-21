export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: 'Starter' | 'Main' | 'Dessert';
  price: number;
}

export interface MenuStats {
  totalItems: number;
  avgPriceStarters: number;
  avgPriceMains: number;
  avgPriceDesserts: number;
}

export type UserRole = 'Chef' | 'User';

export interface User {
  role: UserRole;
  username: string;
}
