
"use client";
import SectionPromoHome1 from "@/section/home/sectionPromoHome1";
import { FilterSection } from "@/component/ui/filterModal";
import { useState } from "react";
import Card from "@/component/ui/card";
import Pagination from "@/component/ui/pagination";
import { SectionAbout4 } from "@/section/aboutUS/sectionAbout4";
import { SectionMasRecientes } from "@/section/masRecientes";

export default function Products(){
    const [category, setCategory] = useState<string[]>([]);
    const [price, setPrice] = useState([0, 200]);
    const [brands, setBrands] = useState<string[]>([]);
    const [relevant, setRelevant] = useState<string[]>([]);

    const products = [
  {
    id: 1,
    category: "neveras y refrigeradores",
    title: "Nevera 8.1 Pies",
    brand: "Marca Ecko",
    warranty: "Garantia 1 año",
    price: "100",
    image: "/images/pot.png"
  },
  {
    id: 2,
    category: "neveras y refrigeradores",
    title: "Nevera 10.5 Pies",
    brand: "Marca Samsung",
    warranty: "Garantia 2 años",
    price: "450",
    image: "/images/pot.png"
  },
  {
    id: 3,
    category: "neveras y refrigeradores",
    title: "Nevera 9 Pies",
    brand: "Marca LG",
    warranty: "Garantia 1 año",
    price: "320",
    image: "/images/pot.png"
  },
  {
    id: 4,
    category: "neveras y refrigeradores",
    title: "Refrigerador 12 ",
    brand: "Marca Whirlpool",
    warranty: "Garantia 2 años",
    price: "520",
    image: "/images/pot.png"
  },
  {
    id: 5,
    category: "neveras y refrigeradores",
    title: "Nevera 7 Pies",
    brand: "Marca Mabe",
    warranty: "Garantia 1 año",
    price: "250",
    image: "/images/pot.png"
  },
  {
    id: 6,
    category: "neveras y refrigeradores",
    title: "Refrigerador 14 Pies",
    brand: "Marca Frigidaire",
    warranty: "Garantia 3 años",
    price: "600",
    image: "/images/pot.png"
  },
  {
    id: 7,
    category: "neveras y refrigeradores",
    title: "Nevera 11 ",
    brand: "Marca Daewoo",
    warranty: "Garantia 1 año",
    price: "380",
    image: "/images/pot.png"
  },
  {
    id: 8,
    category: "neveras y refrigeradores",
    title: "Nevera 13 ",
    brand: "Marca Samsung",
    warranty: "Garantia 3 años",
    price: "670",
    image: "/images/pot.png"
  },
  {
    id: 9,
    category: "neveras y refrigeradores",
    title: "Refrigerador 10 ",
    brand: "Marca Hisense",
    warranty: "Garantia 1 año",
    price: "290",
    image: "/images/pot.png"
  },
  {
    id: 10,
    category: "neveras y refrigeradores",
    title: "Nevera 6 Pies ",
    brand: "Marca Ecko",
    warranty: "Garantia 6 meses",
    price: "160",
    image: "/images/pot.png"
  },
  {
    id: 11,
    category: "neveras y refrigeradores",
    title: "Refrigerador 15 ",
    brand: "Marca LG",
    warranty: "Garantia 3 años",
    price: "720",
    image: "/images/pot.png"
  },
  {
    id: 12,
    category: "neveras y refrigeradores",
    title: "Nevera 9.5 ",
    brand: "Marca Panasonic",
    warranty: "Garantia 2 años",
    price: "410",
    image: "/images/pot.png"
  },
  {
    id: 13,
    category: "neveras y refrigeradores",
    title: "Refrigerador 8 ",
    brand: "Marca Haceb",
    warranty: "Garantia 1 año",
    price: "280",
    image: "/images/pot.png"
  },
  {
    id: 14,
    category: "neveras y refrigeradores",
    title: "Nevera 16 Pies ",
    brand: "Marca Whirlpool",
    warranty: "Garantia 3 años",
    price: "850",
    image: "/images/pot.png"
  },
  {
    id: 15,
    category: "neveras y refrigeradores",
    title: "Refrigerador 12 ",
    brand: "Marca Midea",
    warranty: "Garantia 2 años",
    price: "530",
    image: "/images/pot.png"
  }
];




    return(
        <main className="flex w-full h-auto flex-col">
            <div id="main" className="flex flex-row">

            <div id="Sidebar" className="w-1/5 mx-4 hidden lg:flex flex-col gap-3">

            {/* Categorías */}
                <FilterSection
                  title="Categorías"
                  type="checkbox"
                  selected={category}
                  onChange={setCategory}
                  options={[
                    { label: "Refrigeradores y Neveras", value: "neveras" },
                    { label: "Cocinas y Hornos", value: "cocinas" },
                    { label: "Lavadoras y Secadoras", value: "lavadoras" },
                  ]}
                />

                {/* Precio */}
                <FilterSection
                  title="Precio"
                  type="range"
                  min={0}
                  max={200}
                  valueMin={price[0]}
                  valueMax={price[1]}
                  onChange={setPrice}
                />

                {/* Marcas */}
                <FilterSection
                  title="Marcas"
                  type="checkbox"
                  selected={brands}
                  onChange={setBrands}
                  options={[
                    { label: "Ecko", value: "ecko" },
                    { label: "Midea", value: "midea" },
                    { label: "Columbia", value: "columbia" },
                  ]}
                />

                {/* Relevantes */}
                <FilterSection
                  title="Relevantes"
                  type="radio"
                  selected={relevant}
                  onChange={(value) => setRelevant(value as string[])}
                  options={[
                    { label: "Ofertas", value: "ofertas" },
                    { label: "Más vendidos", value: "masVendidos" },
                    { label: "Próximamente", value: "proximamente" },
                  ]}
                />

            </div>

            <div id="content" className="w-full mb-20  lg:w-4/5 overflow-hidden">
                <div id="content-ollas">
                    <SectionPromoHome1 />

                </div>

                <div id="products" className="ml-10 mt-20 lg:mt-0 grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-3 2xl:grid-cols-5 2xl:grid-rows-3 gap-4 md:ml-5 xl:mr-20">
                    {products.map((product) => (
                    <Card
                      key={product.id}
                      category={product.category}
                      title={product.title}
                      brand={product.brand}
                      warranty={product.warranty}
                      price={product.price}
                      image={product.image}
                      position="vertical"
                    />
                ))}
                </div>
                <div className="flex justify-center my-10">
                  <Pagination totalPages={5} />
                </div>
            </div>
        </div>

            <div id="Banner dolar" className="w-full h-auto">
            <SectionAbout4 />
            </div>

            <SectionMasRecientes />



        </main>
    );
}