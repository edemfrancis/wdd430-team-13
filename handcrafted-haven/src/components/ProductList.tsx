"use client";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1>Products</h1>
        <Link href="/cart">
          <button style={{ backgroundColor: "#0070f3", color: "white" }}>
            View Cart
          </button>
        </Link>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3>{product.name}</h3>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#0070f3", marginTop: "0.5rem" }}>
                ${product.price.toFixed(2)}
              </p>
              <p style={{ marginTop: "0.5rem", color: "#666" }}>
                Click to view details →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}