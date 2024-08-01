import React, { createContext, ReactNode, useReducer } from "react";

// Define your context type
interface Item {
  name: string;
  quantity: number;
}

const ItemContext = createContext<Item | null>(null);

const initialItem: Item = {
  name: "",
  quantity: 0,
};

interface ItemProviderProps {
  children: ReactNode;
}

function reducer(state: Item, action: { type: any }) {
  switch (action.type) {
    case "item/add":
      return { ...state, quantity: state.quantity + 1 };

    case "item/remove":
      return { ...state, quantity: state.quantity - 1 };

    default:
      return state;
  }
}

function ItemProvider({ children }: ItemProviderProps) {
  const [{ name, quantity }, dispatch] = useReducer(reducer, initialItem);

  return (
    <ItemContext.Provider value={{ name, quantity }}>
      {children}
    </ItemContext.Provider>
  );
}

export { ItemProvider, ItemContext };
