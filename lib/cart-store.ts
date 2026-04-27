import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  subtitle: string;
  price: number;
  size: string;
  colorName: string;
  colorHex: string;
  image: string;
  type: "top" | "bottom" | "onepiece" | "short";
  quantity: number;
};

export type CartTotals = {
  subtotal: number;
  bundleDiscount: number;
  total: number;
  bundleCount: number;
  freeShipping: boolean;
  shippingCost: number;
};

function calcTotals(items: CartItem[]): CartTotals {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  // Bundle: each pair (top qty + bottom qty) gets -10€
  const totalTops = items
    .filter((i) => i.type === "top")
    .reduce((s, i) => s + i.quantity, 0);
  const totalBottoms = items
    .filter((i) => i.type === "bottom")
    .reduce((s, i) => s + i.quantity, 0);
  const bundleCount = Math.min(totalTops, totalBottoms);
  const bundleDiscount = bundleCount * 10;

  const freeShipping = subtotal - bundleDiscount >= 150;
  const shippingCost = freeShipping ? 0 : 5.9;

  return {
    subtotal,
    bundleDiscount,
    total: subtotal - bundleDiscount + shippingCost,
    bundleCount,
    freeShipping,
    shippingCost,
  };
}

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totals: () => CartTotals;
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.productId === item.productId &&
              i.size === item.size &&
              i.colorName === item.colorName
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },

      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      updateQty: (id, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) => (i.id === id ? { ...i, quantity: qty } : i)),
        })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      totals: () => calcTotals(get().items),
    }),
    { name: "mayina-cart", skipHydration: true }
  )
);
