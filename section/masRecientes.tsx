import Card from "@/component/ui/card";

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

    return (
        <>
        <div id="Mas recientes" className="w-full h-auto mt-20 my-30">
              <div className="flex flex-col items-start mb-5 ml-20">
              <h2 className="text-lg font-bold text-[#022954]">Más recientes</h2>
              <h1 className="text-xl font-bold text-accent mb-2">Últimos productos</h1>
              </div>

                <div id="products" className="grid 2xl:grid-cols-6 2xl:grid-rows-1 gap-4 md:ml-5 xl:mx-20">
                    {lastSixProducts.map((product) => (
                    <Card
                      key={product.id}
                      category={product.categoria.name}
                      title={product.name}
                      brand={product.brand}
                      warranty={product.warranty}
                      price={product.price}
                      image={product.img}
                      position="vertical"                   
                    />
                ))}
                </div>
            </div>
        </>
    );
};