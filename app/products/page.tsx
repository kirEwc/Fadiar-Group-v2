
"use client";
import SectionPromoHome1 from "@/section/home/sectionPromoHome1";
import { FilterSection } from "@/component/ui/filterModal";
import { useEffect, useState } from "react";
import Card from "@/component/ui/card";
import Pagination from "@/component/ui/pagination";
import { SectionAbout4 } from "@/section/aboutUS/sectionAbout4";
import { SectionMasRecientes } from "@/section/masRecientes";
import { server_url } from "@/lib/apiClient";


export type Product = {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  brand: string;
  warranty: string;
  price: string;
  temporal_price?: string;
  img: string;
  categoria?: {
    id: number;
    name: string;
  };
};

export default function Products(){
    const [category, setCategory] = useState<string[]>([]);
    const [price, setPrice] = useState<[number, number]>([0, 200]);
    const [brands, setBrands] = useState<string[]>([]);
    const [relevant, setRelevant] = useState<string[]>([]);

const [products, setProducts] = useState<Product[]>([]);




const getAllProducts = async () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo4NDAsImV4cCI6MTc2Mzg3NDg0NX0.-W2-13mCQ6L7x8MQ5KQCzuhK59ZpeqAOe6Vfo7TsThk'; // tu token guardado
  const res = await fetch(`${server_url}/inventory_manager`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  setProducts(data.products);
};

useEffect(() => {
  getAllProducts();
}, []);


    return(
        <main className="flex w-full h-auto flex-col">
            <div id="main" className="flex flex-row">

            <div id="Sidebar" className="w-1/5 mx-4 hidden xl:flex flex-col gap-3">

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

            <div id="content" className="w-full mb-20 xl:w-4/5 overflow-hidden">
                <div id="content-ollas">
                    <SectionPromoHome1 />
                </div>

                   <div id={"list"} className="mt-20 sm:mt-0 flex w-full justify-between">
                      <p className="text-gray-400 mb-4">
                      <span className="text-md text-primary mr-4 font-bold">Todos las Categorías</span>
                     <span className="text-sm text-[#777777]">{products?.length ?? 0} Productos</span>
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-md text-primary mr-15 md:mr-30 font-bold">F</span>
                      </div>
                  </div>

                <div id="products" className="mt-20 grid grid-cols-2 justify-between grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 lg:mt-0 xl:grid-cols-4 xl:grid-rows-3 2xl:grid-cols-5 2xl:grid-rows-3 gap-4 xl:mr-20">
                  {products && products.length > 0 ? (
                      products.slice(0, 15).map((product) => (
                        <Card
                          key={product.id}
                          category={product.categoria?.name}
                          title={product.name}
                          brand={product.brand}
                          warranty={product.warranty}
                          price={product.price}
                          image={product.img}
                          temporal_price={product?.temporal_price}
                          position="vertical"
                        />
                      ))
                    ) : (
                      <p className="col-span-full text-center text-gray-500">Cargando productos...</p>
                    )}
                </div>
                <div className="flex justify-center my-10">
                  <Pagination totalPages={5} />
                </div>
            </div>
        </div>

            <div id="Banner dolar" className="w-full h-auto">
            <SectionAbout4 />
            </div>

            <SectionMasRecientes 
            products={products}
            />



        </main>
    );
}