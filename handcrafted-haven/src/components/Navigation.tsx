import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products/list", label: "Products" },
  //{ href: "/sellers", label: "Sellers" },
  //{ href: "/seller/profile", label: "Seller Profile" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  //{ href: "/login", label: "Login" },
];

export default function Navigation() {
  return (
    <aside>
      <div>
        <h2>Logo</h2>
      </div>

      <nav aria-label="Main navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
