"use client";
import { useState } from "react";
import { useCart } from "@/lib/definitions/cart";

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: Number(product.id),
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <button
      className="btn"
      type="button"
      onClick={handleAddToCart}
      style={{
        backgroundColor: added ? "#28a745" : undefined,
        transition: "background-color 0.3s",
      }}
    >
      {added ? "Added! ✓" : "Add to cart"}
    </button>
  );
}