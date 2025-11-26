
"use client";
import SectionPromoHome1 from "@/section/home/sectionPromoHome1";
import { FilterSection } from "@/component/ui/filterModal";
import { useEffect, useState } from "react";
import Card from "@/component/ui/card";
import Pagination from "@/component/ui/pagination";
import { SectionAbout4 } from "@/section/aboutUS/sectionAbout4";
import { server_url } from "@/lib/apiClient";
import Pot from "@/section/pot/pot";
import { SectionMasRecientes } from "@/section/masRecientes";


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
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

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
  setIsMounted(true);
  getAllProducts();
}, []);


    const removeFilter = (type: 'category' | 'brand' | 'relevant', value: string) => {
      if (type === 'category') {
        setCategory(category.filter(c => c !== value));
      } else if (type === 'brand') {
        setBrands(brands.filter(b => b !== value));
      } else if (type === 'relevant') {
        setRelevant(relevant.filter(r => r !== value));
      }
    };

    const resetPrice = () => {
      setPrice([0, 200]);
    };

    return(
        <main className="flex w-full h-auto flex-col">
            <div id="main" className="flex flex-row">

            {/* Sidebar Desktop */}
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

            <div id="content" className="w-full mb-20  xl:w-4/5 overflow-hidden">
                <div id="content-ollas">
                    <SectionPromoHome1 />
                </div>

                   <div id={"list"} className="mt-20 ml-5 lg:ml-0 flex w-full justify-between items-center">
                      <span className="text-gray-400 mb-4">
                      <span className="text-md text-primary mr-4 font-bold">Todos las Categorías</span>
                      
                      <span id="filters-applied">
                      {(category.length > 0 || brands.length > 0 || relevant.length > 0 || price[0] !== 0 || price[1] !== 200) && (
                    <div className="flex flex-col gap-2 mb-6 ml-3">
                      
                      {category.map((cat) => (
                        <div key={cat} className="inline-flex items-center gap-2 px-3 py-[6px] bg-[#f6f8fb] text-[#0b2a4a] rounded-md text-sm font-semibold leading-none w-fit">
                          <div className="w-4 h-4 border border-[#0b2a4a] flex items-center justify-center rounded">
                          <svg className="w-3 h-3 text-[#0b2a4a]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          </div>
                          <span>{cat === 'neveras' ? 'Refrigeradores y Neveras' : cat === 'cocinas' ? 'Cocinas y Hornos' : 'Lavadoras y Secadoras'}</span>
                          <button onClick={() => removeFilter('category', cat)} className="ml-10 text-gray-400 hover:text-gray-600 font-bold text-lg leading-none">×</button>
                        </div>
                      ))}

                      {brands.map((brand) => (
                        <div key={brand} className="inline-flex items-center gap-2 px-3 py-[6px] bg-[#f6f8fb] text-[#0b2a4a] rounded-md text-sm font-semibold leading-none w-fit">
                          <div className="w-4 h-4 border border-[#0b2a4a] flex items-center justify-center rounded">
                          <svg className="w-3 h-3 text-[#0b2a4a]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          </div>
                          <span>{brand.charAt(0).toUpperCase() + brand.slice(1)}</span>
                          <button onClick={() => removeFilter('brand', brand)} className="ml-10 text-gray-400 hover:text-gray-600 font-bold text-lg leading-none">×</button>
                        </div>
                      ))}
                      {relevant.map((rel) => (
                        <div key={rel} className="inline-flex items-center gap-2 px-3 py-[6px] bg-[#f6f8fb] text-[#0b2a4a] rounded-md text-sm font-semibold leading-none w-fit">
                          <div className="w-4 h-4 border border-[#0b2a4a] flex items-center justify-center rounded">
                          <svg className="w-3 h-3 text-[#0b2a4a]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          </div>
                          <span>{rel === 'ofertas' ? 'Ofertas' : rel === 'masVendidos' ? 'Más vendidos' : 'Próximamente'}</span>
                          <button onClick={() => removeFilter('relevant', rel)} className="ml-1 text-gray-400 hover:text-gray-600 font-bold text-lg leading-none">×</button>
                        </div>
                      ))}
                      {(price[0] !== 0 || price[1] !== 200) && (
                        <div className="inline-flex items-center gap-2 px-3 py-[6px] bg-[#f6f8fb] text-[#0b2a4a] rounded-md text-sm font-semibold leading-none w-fit">
                          <div className="w-4 h-4 border border-[#0b2a4a] flex items-center justify-center rounded">
                          <svg className="w-3 h-3 text-[#0b2a4a]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          </div>
                          <span>${price[0]} - ${price[1]}</span>
                          <button onClick={resetPrice} className="ml-1 text-gray-400 hover:text-gray-600 font-bold text-lg leading-none">×</button>
                        </div>
                      )}
                    </div>
                       )}
                      </span>
                     

                      <span className="text-sm text-[#777777]">{products?.length ?? 0} Productos</span>
                      </span>


                      <button 
                        onClick={() => setIsFilterOpen(true)}
                        className="xl:hidden flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-primary"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        
                      </button>
                  </div>

                  {/* Filtros aplicados */}
                  
                  

                <div id="products" className="mt-20 ml-5 lg:ml-0 grid grid-cols-2 justify-between grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 lg:mt-0 xl:grid-cols-4 xl:grid-rows-3 2xl:grid-cols-5 2xl:grid-rows-3 gap-4 xl:mr-20">
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

            <SectionMasRecientes products={products} />



        </main>
    );
}