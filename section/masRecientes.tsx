import Card from "@/component/ui/card";

export const SectionMasRecientes = () => {
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
];
    return (
        <>
        <div id="Mas recientes" className="w-full h-auto mt-20 my-30">
              <div className="flex flex-col items-start mb-5 ml-20">
              <h2 className="text-lg font-bold text-[#022954]">Más recientes</h2>
              <h1 className="text-xl font-bold text-accent mb-2">Últimos productos</h1>
              </div>

                <div id="products" className="grid 2xl:grid-cols-6 2xl:grid-rows-1 gap-4 md:ml-5 xl:mx-20">
                    {products.slice(0, 6).map((product) => (
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
            </div>
        </>
    );
};