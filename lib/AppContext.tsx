import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, MenuItem } from './types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  menuItems: MenuItem[];
  setMenuItems: (items: MenuItem[]) => void;
  addMenuItem: (item: MenuItem) => void;
  removeMenuItem: (id: string) => void;
  removeMenuItems: (ids: string[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Chicken Soup',
      description: 'Hearty soup with chicken, vegetables',
      course: 'Starter',
      price: 75,
    },
    {
      id: '2',
      name: 'Beef Steak',
      description: 'Grilled steak with garlic and herbs',
      course: 'Main',
      price: 120,
    },
    {
      id: '3',
      name: 'Chocolate Tart',
      description: 'Rich chocolate tart with a crust',
      course: 'Dessert',
      price: 60,
    },
    {
      id: '4',
      name: 'Greek Salad',
      description: 'Salad with feta, olives, cucumbers',
      course: 'Starter',
      price: 65,
    },
    {
      id: '5',
      name: 'Salmon Fillet',
      description: 'Seared salmon with dill sauce',
      course: 'Main',
      price: 150,
    },
  ]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems(prev => [...prev, item]);
  };

  const removeMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const removeMenuItems = (ids: string[]) => {
    setMenuItems(prev => prev.filter(item => !ids.includes(item.id)));
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      menuItems,
      setMenuItems,
      addMenuItem,
      removeMenuItem,
      removeMenuItems,
    }}>
      {children}
    </AppContext.Provider>
  );
};
