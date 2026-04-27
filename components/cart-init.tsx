"use client";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-store";

export function CartInit() {
  useEffect(() => {
    useCart.persist.rehydrate();
  }, []);
  return null;
}
