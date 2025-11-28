"use client";
import { useEffect, useState } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";
import { server_url } from "@/lib/apiClient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartStore";
import ShoppingCartIcon from "../icons";

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
  currency?: {
    currency: string;
  };
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
  currency,
}: CardProps) {
  const router = useRouter();
  const addOrUpdateItem = useCartStore((state) => state.addOrUpdateItem);
  const isCartAction = actionIcon === "cart";
  const isDeleteAction = actionIcon === "delete";
  const hasExternalQuantity = !isCartAction && quantityProducts && quantityProducts > 0;

  const [quantity, setQuantity] = useState(Math.max(1, quantityProducts ?? 1));

  useEffect(() => {
    if (quantityProducts && quantityProducts > 0) {
      setQuantity(quantityProducts);
    }
  }, [quantityProducts]);

  const handleCardClick = () => {
    if (productId) {
      router.push(`/products/${productId}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevenir que el click del botón active la navegación
  };

  const adjustQuantity = (delta: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!productId && productId !== 0) {
      console.warn("Product without ID cannot be added to cart");
      return;
    }

    addOrUpdateItem({
      productId: productId ?? title,
      title,
      price,
      temporal_price,
      image,
      quantity,
    });
  };

  const warrantyNumber = +(warranty ?? "0");
  return (
    <>
      {position === "vertical" ? (
        <div
          onClick={productId ? handleCardClick : undefined}
          className={`bg-white max-w-[184px] md:max-w-[250px] p-2 md:p-3 border border-gray-300 rounded-2xl shadow-sm h-[500px] flex flex-col justify-between ${
            productId ? "cursor-pointer hover:shadow-md transition-shadow" : ""
          }`}
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
                Garantía de {warrantyNumber / 30} meses
              </p>
            ) : (
              <p className="h-6 text-sm font-medium mb-3"></p>
            )}
            {temporal_price !== null ? (
              // Cuando SÍ hay descuento (temporal_price tiene valor)
              <div className="flex flex-row items-center justify-between gap-2">
                <p className="flex items-baseline text-[#022954] font-bold text-2xl whitespace-nowrap">
                  ${temporal_price}
                  <span className="ml-1 text-[#022954] font-normal text-base">
                    {/* {currency?.currency} */}
                    USD
                  </span>
                </p>
                <p className="text-[#777777] text-md line-through whitespace-nowrap">
                  {/* ${price} {currency?.currency} */}
                  ${price} USD
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
            <div
              className="mt-auto pt-4 flex items-center justify-between gap-x-2"
              onClick={handleButtonClick}
            >
              {isCartAction ? (
                <>
                  <div className="flex items-center rounded-2xl border border-gray">
                    <button
                      className="px-2.5 py-2 text-yellow-500"
                      onClick={adjustQuantity(-1)}
                    >
                      −
                    </button>
                    <span className="px-1 md:px-4 py-1 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      className="px-2.5 md:px-3 md:py-2 text-yellow-500"
                      onClick={adjustQuantity(1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="p-2.5 px-4.5 md:px-7 border border-[#022954] rounded-2xl"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCartIcon className="h-5 w-5 text-primary" />
                  
                  </button>
                </>
              ) : hasExternalQuantity ? (
                <p className="text-[#777777] text-sm">Cantidad: {quantityProducts}</p>
              ) : null}
              {isDeleteAction && (
                <Trash2 className="w-6 h-6 text-[#1E1E1E] cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={productId ? handleCardClick : undefined}
          className={`bg-white p-2 sm:p-4 border border-gray-300 rounded-2xl shadow-sm h-full flex flex-row gap-3 lg:gap-8 max-w-[${maxWidthVertical}] ${
            productId ? "cursor-pointer hover:shadow-md transition-shadow" : ""
          }`}
        >
          <div
            className="w-1/3 sm:w-48  overflow-hidden rounded-2xl"
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

            {warrantyNumber > 0 ? (
              <p className="text-[#D69F04] text-sm font-medium mb-3">
                Garantía de {warrantyNumber / 30} meses
              </p>
            ) : (
              <p className="h-6 text-sm font-medium mb-3"></p>
            )}

            {temporal_price !== null ? (
              // Cuando SÍ hay descuento (temporal_price tiene valor)
              <div className="flex flex-row items-center justify-between gap-2">
                <p className="flex items-baseline text-[#022954] font-bold text-2xl whitespace-nowrap">
                  ${temporal_price}
                  <span className="ml-1 text-[#022954] font-normal text-base">
                    {/* {currency?.currency} */}
                    USD
                  </span>
                </p>
                <p className="text-[#777777] text-md line-through whitespace-nowrap">
                  {/* ${price} {currency?.currency} */}
                  ${price} USD
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

            <div
              className="mt-auto flex items-center justify-between gap-2"
              onClick={handleButtonClick}
            >
              {isCartAction ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-xl font-bold border border-gray">
                    <button
                      className="px-3 py-2 text-accent cursor-pointer"
                      onClick={adjustQuantity(-1)}
                    >
                      −
                    </button>
                    <span className="px-4 my-1 border-x border-gray-300 ">
                      {quantity}
                    </span>
                    <button
                      className="px-3 py-2 text-accent cursor-pointer"
                      onClick={adjustQuantity(1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="p-2.5 px-8 border border-primary rounded-xl cursor-pointer"
                    onClick={handleAddToCart}
                  >
                  <ShoppingCartIcon className="h-5 w-5 text-primary" />

                  </button>
                </div>
              ) : hasExternalQuantity ? (
                <p className="text-[#777777] text-sm">Cantidad: {quantityProducts}</p>
              ) : null}

              {isDeleteAction && (
                <Trash2 className="w-6 h-6 text-[#1E1E1E] cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}