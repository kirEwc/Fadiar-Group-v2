"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Productos" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <div className="w-full bg-white">
      {/* BARRA DE BÚSQUEDA */}

      {/* MENÚ CENTRAL */}
      <nav className="flex justify-center gap-10 text-sm text-gray-700">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#002b5c] transition ${
                isActive ? "text-primary font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
