// store/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

type CartStore = {
    items: CartItem[];
    count: number;
    total: number;
    addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
    removeItem: (id: string) => void;
    updateQty: (id: string, qty: number) => void;
    clear: () => void;
};

const computeDerived = (items: CartItem[]) => ({
    count: items.reduce((s, i) => s + i.quantity, 0),
    total: items.reduce((s, i) => s + i.quantity * i.price, 0),
});

export const useCart = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            count: 0,
            total: 0,

            addItem: (item, qty = 1) =>
                set((state) => {
                    const found = state.items.find((i) => i.id === item.id);
                    const items = found
                        ? state.items.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
                        )
                        : [...state.items, { ...item, quantity: qty }];
                    return { items, ...computeDerived(items) };
                }),

            removeItem: (id) =>
                set((state) => {
                    const items = state.items.filter((i) => i.id !== id);
                    return { items, ...computeDerived(items) };
                }),

            updateQty: (id, qty) =>
                set((state) => {
                    const items = state.items.map((i) =>
                        i.id === id ? { ...i, quantity: Math.max(1, qty) } : i
                    );
                    return { items, ...computeDerived(items) };
                }),

            clear: () => set({ items: [], count: 0, total: 0 }),
        }),
        {
            name: "aquaverde-cart",
        }
    )
);