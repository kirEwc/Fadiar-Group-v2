"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { SectionMasRecientes } from "@/section/masRecientes";
import { SectionAbout4 } from "@/section/aboutUS/sectionAbout4";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [qty, setQty] = useState(1);

  const product = {
    id,
    category: "Cocinas y Hornos",
    title: "Freidora de Aire 5.5 L",
    brand: "Marca Eko",
    description:
      "Cocina más saludable y sin complicaciones. Disfruta de tus comidas favoritas con menos aceite gracias a esta freidora de aire de 5.5 litros. Con un diseño moderno en color negro, ofrece potencia de 1500W, control de temperatura de 80°C a 200°C y temporizador de hasta 60 minutos. Ideal para preparar alimentos crujientes y deliciosos.",
    warranty: "Garantía 1 Año",
    price: 63,
    oldPrice: 80,
    image: "/images/pot.png",
    images: ["/images/pot.png", "/images/pot.png", "/images/pot.png"],
    properties: [
      { key: "CAPACIDAD", value: "5.5 Litros" },
      { key: "POTENCIA", value: "1500W" },
      { key: "VOLTAJE", value: "120 V" },
      { key: "TEMPERATURA", value: "80°C a 200°C" },
      { key: "TEMPORIZADOR", value: "60 Min" },
      { key: "COLOR", value: "Negro" },
    ],
  };

  return (
    <main>
      <div className="px-4 md:px-20 2xl:px-36 mt-10">

        <div id={"list"} className="mt-10">
          <p className="text-xs text-gray-400 mb-4">
            <span className="text-gray-400">Home - </span>
            <span className="text-gray-400">Products - </span>
            <span className="text-primary font-semibold">{id}</span>
          </p>
          <h1 className="text-3xl text-primary font-bold">Detalles del Producto</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-16 mt-10">

          <div className="md:w-1/3">
            {/* Imagen Principal */}
            <div className="w-full h-[400px] rounded-xl object-cover">
            <Image
              src={product.image}
              alt="producto"
              width={613}
              height={682}
              className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Miniaturas */}
            <div className="flex gap-2 mt-3">
              {product.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="thumb"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-md object-cover border cursor-pointer hover:border-blue-500 duration-150"
                />
              ))}
            </div>
          </div>

          {/* 📌 INFORMACIÓN */}
          <div className="md:w-2/3">
            <p className="text-xs text-gray-500 mb-3">{product.category}</p>
            <h2 className="text-3xl font-bold text-[#1A2B49]">{product.title}</h2>
            <p className="text-3xl text-[#022954] font-medium">{product.brand}</p>

            {/* Descripción */}
            <p className="text-[#1E1E1E] text-sm mt-3 max-w-xl leading-relaxed">
              {product.description}
            </p>

            {/* Garantía */}
            <p className="text-yellow-500 font-semibold text-md mt-2">{product.warranty}</p>

            {/* Precios */}
            <div className="mt-3 flex items-center gap-4">
              <p className="text-3xl font-bold text-primary">${product.price} USD</p>
              <p className="text-gray-400 line-through text-lg">${product.oldPrice} USD</p>
            </div>

            {/* Cantidad */}
            <div className="mt-auto pt-4 flex items-center justify-between">
              <div className="flex items-center rounded-xl border border-primary">
                <button className="px-3 py-2 text-yellow-500">−</button>
                <span className="px-4 my-1 border-x border-gray-300">1</span>
                <button className="px-3 py-2 text-yellow-500">+</button>
              </div>

              <button className="p-2.5 px-8 border border-[#022954] rounded-xl">
                <svg
                  className="w-5 h-5 text-[#022954]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Tabla de propiedades */}
            <div className="mt-8 bg-[#F5F7FA] rounded-xl p-5 border border-gray">
              <h3 className="font-semibold text-[#1A2B49] mb-3">Propiedades</h3>
              <table className="w-full text-sm text-gray-600">
                <tbody>
                  {product.properties.map((p, i) => (
                    <tr key={i} className="border-b border-gray ">
                      <td className="py-2 font-medium text-[#1E1E1E]">{p.key}</td>
                      <td className="py-2 text-right">{p.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-20">
           <SectionAbout4/>       
      </div>
      <div>
          <SectionMasRecientes/>
        </div>
    </main>
  );
}
