"use client";
import { ShoppingCart, Trash2 } from "lucide-react";
import { server_url } from "@/lib/apiClient";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface CardProps {
  category?: string;
  title: string;
  brand: string;
  warranty?: string;
  price: string;
  image: string;
  position?: "horizontal" | "vertical";
  maxWidthVertical?: string;
  actionIcon?: "cart" | "delete" | "none";
  quantityProducts?: number;
  temporal_price?: string;
  productId?: string | number;
  currency?:{
    currency:string,
  }
}

export default function Card({
  category,
  title,
  brand,
  warranty,
  price,
  image,
  position = "horizontal",
  maxWidthVertical = "480px",
  actionIcon = "cart",
  quantityProducts,
  temporal_price,
  productId,
  currency
}: CardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    if (productId) {
      router.push(`/products/${productId}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir que el click del botón active la navegación
  };

const warrantyNumber = +(warranty ?? "0");
  return (
    <>
      {position === "vertical" ? (
        <div 
          onClick={productId ? handleCardClick : undefined}
          className={`bg-white max-w-[184px] md:max-w-[250px] p-2 md:p-3 border border-gray-300 rounded-2xl shadow-sm h-[500px] flex flex-col justify-between ${productId ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
        >
          
          {/* primer section */}
          <div
            className="w-full h-4/12  overflow-hidden rounded-2xl shrink-0"
            style={{ minHeight: "190px" }}
          >
            <Image
              className="w-full h-full object-contain"
              alt={title}
              width={500}
              height={500}
              src={`${server_url}/${image}`}
            />
          </div>

          {/* segundo section */}

          <div className="flex flex-col h-2/12">
            <p className="text-[#777777] text-sm mb-2">{category}</p>

            <div className="mb-4">
              <h3 className="text-[#022954] font-semibold text-lg line-clamp-2">
                {title}
              </h3>
              <p className="text-[#022954] text-md">{brand}</p>
            </div>
          </div>

            {/* tercer section */}
            <div className="flex flex-col h-3/12 justify-end">

            {warrantyNumber > 0 ? (
            <p className="text-[#D69F04] text-sm font-medium mb-3">
             Garantía de {warrantyNumber/30} meses
            </p>
            ) : 
            <p className="h-6 text-sm font-medium mb-3">
            </p>
            }
            {temporal_price !== null ? (
                // Cuando SÍ hay descuento (temporal_price tiene valor)
                <div className="flex flex-row items-center justify-between gap-2">
                  <p className="flex items-baseline text-[#022954] font-bold text-2xl whitespace-nowrap">
                    ${temporal_price}
                    <span className="ml-1 text-[#022954] font-normal text-base">
                      {currency?.currency}
                    </span>
                  </p>
                  <p className="text-[#777777] text-md line-through whitespace-nowrap">
                    ${price} {currency?.currency}
                  </p>
                </div>
              ) : (
                // Cuando NO hay descuento (temporal_price es null)
                <p className="text-[#022954] font-bold text-2xl">
                  ${price}{" "}
                  <span className="text-[#022954] font-normal text-base">
                    {currency?.currency}
                  </span>
                </p>
              )}
            <div className="mt-auto pt-4 flex items-center justify-between" onClick={handleButtonClick}>
              <div className="flex items-center rounded-2xl border border-gray">
                <button className="px-2.5 py-2 text-yellow-500">−</button>
                <span className="px-1 md:px-4 py-1 border-x border-gray-300">1</span>
                <button className="px-2.5 md:px-3 md:py-2 text-yellow-500">+</button>
              </div>

              <button className="p-2.5 px-4.5 md:px-7 border border-[#022954] rounded-2xl">
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
            </div>
          </div>
      ) : (
        <div
          onClick={productId ? handleCardClick : undefined}
          className={`bg-white p-2 sm:p-4 border border-gray-300 rounded-2xl shadow-sm h-full flex flex-row gap-3 lg:gap-8 max-w-[${maxWidthVertical}] ${productId ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
        >
          <div
            className="w-35 sm:w-48  overflow-hidden rounded-2xl"
            // style={{ height: "160px" }}
          >
             <Image
              className="w-full h-full object-contain"
              alt={title}
              width={500}
              height={500}
              src={`${server_url}/${image}`}

            />
          </div>

          <div className="flex-1 flex flex-col">
            <p className="text-[#777777] text-sm mb-2">{category}</p>

            <div className="mb-3">
              <h3 className="text-primary font-bold  text-md sm:text-lg line-clamp-2">
                {title}
              </h3>
              <p className="text-primary text-sm sm:text-md">{brand}</p>
            </div>

            <p className="text-accent text-sm font-medium mb-2">{warranty}</p>

            <p className="text-primary font-bold text-xl sm:text-2xl mb-4">
    
              ${price}{" "}
              <span className="text-primary font-normal text-base">USD</span>
            </p>

            <div className="mt-auto flex items-center justify-between gap-2" onClick={handleButtonClick}>
              {quantityProducts && quantityProducts > 0 ? (
                <p className="text-[#777777] text-sm">
                  Cantidad: {quantityProducts}
                </p>
              ) : (
                <div
                  className={`flex items-center rounded-xl font-bold border ${
                    actionIcon === "delete" ? "border-primary" : "border-gray"
                  }`}
                >
                  <button className="px-3 py-2 text-accent cursor-pointer">
                    −
                  </button>
                  <span className="px-4 my-1 border-x border-gray-300 ">1</span>
                  <button className="px-3 py-2 text-accent cursor-pointer">
                    +
                  </button>
                </div>
              )}

              <div>
                {actionIcon === "delete" ? (
                  <Trash2 className="w-6 h-6 text-[#1E1E1E] cursor-pointer" />
                ) : actionIcon === "cart" ? (
                  <button className="p-2.5 px-8 border border-primary rounded-xl cursor-pointer">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}