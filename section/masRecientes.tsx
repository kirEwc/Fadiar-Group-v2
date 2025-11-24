"use client";
import Card from "@/component/ui/card";
import { useState, useEffect, useRef } from "react";

interface Product {
    id: number;
    categoria:{
      id: number;
      name: string;
    }
    name: string;
    brand: string;
    warranty: string;
    price: string;
    img: string;
    temporal_price?: string;
}
export const SectionMasRecientes = ( { products } : { products: Product[] } ) => {
    
  const lastSixProducts = [...products]
  .sort((a, b) => b.id - a.id) // primero el id más grande
  .slice(0, 6);

  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const calculatePages = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollWidth = scrollRef.current.scrollWidth;
      const pages = Math.ceil(scrollWidth / containerWidth);
      setTotalPages(pages);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.clientWidth;
      const scrollWidth = scrollRef.current.scrollWidth;
      const maxScroll = scrollWidth - containerWidth;
      
      // Calcular el porcentaje de scroll
      const scrollPercentage = scrollLeft / maxScroll;
      
      // Determinar el índice basado en el porcentaje
      const index = Math.min(
        Math.floor(scrollPercentage * totalPages),
        totalPages - 1
      );
      
      setActiveIndex(Math.max(0, index));
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      calculatePages();
      scrollContainer.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', calculatePages);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', calculatePages);
      };
    }
  }, [lastSixProducts, totalPages]);

    return (
        <>
        <div id="Mas recientes" className="w-full h-auto mt-20 my-30">
              <div className="flex flex-col items-start mb-5 ml-20">
              <h2 className="text-lg font-bold text-[#022954]">Más recientes</h2>
              <h1 className="text-xl font-bold text-accent mb-2">Últimos productos</h1>
              </div>

                <div className="relative px-5 xl:px-20">
                  <div 
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {lastSixProducts.map((product) => (
                      <div key={product.id} className="shrink-0">
                        <Card
                          category={product.categoria.name}
                          title={product.name}
                          brand={product.brand}
                          warranty={product.warranty}
                          price={product.price}
                          image={product.img}
                          position="vertical"                   
                        />
                      </div>
                    ))}
                  </div>
                  
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === activeIndex ? 'bg-accent' : 'bg-gray-300'
                          }`}
                          onClick={() => {
                            if (scrollRef.current) {
                              const containerWidth = scrollRef.current.clientWidth;
                              scrollRef.current.scrollTo({ left: index * containerWidth, behavior: 'smooth' });
                            }
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
            </div>
        </>
    );
};