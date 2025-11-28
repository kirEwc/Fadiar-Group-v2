import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  productId: number | string;
  title: string;
  price: string;
  temporal_price?: string;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  addOrUpdateItem: (item: CartItem) => void;
  removeItem: (productId: number | string) => void;
  clearCart: () => void;
};

const cartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addOrUpdateItem: (item) => {
        const quantity = Math.max(1, item.quantity);
        set((state) => {
          const existingIndex = state.items.findIndex(
            (existing) => existing.productId === item.productId
          );

          if (existingIndex === -1) {
            return {
              items: [...state.items, { ...item, quantity }],
            };
          }

          const updatedItems = [...state.items];
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            ...item,
            quantity,
          };
          return { items: updatedItems };
        });
      },
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined"
          ? localStorage
          : (undefined as unknown as Storage)
      ),
      version: 1,
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);

export default cartStore;
