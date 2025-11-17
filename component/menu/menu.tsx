"use client";

export default function Menu() {

  return (
    <div className="w-full bg-white">
      {/* BARRA DE BÚSQUEDA */}

      {/* MENÚ CENTRAL */}
      <nav className="flex justify-center gap-10 text-sm text-gray-700">
        <a href="#" className="hover:text-[002b5c] transition">Inicio</a>
        <a href="#" className="hover:text-[002b5c] transition">Productos</a>
        <a href="#" className="hover:text-[002b5c] transition">About Us</a>
        <a href="#" className="hover:text-[002b5c] transition">FAQ</a>
        <a href="#" className="hover:text-[002b5c] transition">Contacto</a>
      </nav>
    </div>
  );
}
