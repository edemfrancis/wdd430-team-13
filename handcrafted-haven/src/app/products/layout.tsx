"use client";
import { CartProvider } from "@/lib/definitions/cart";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}