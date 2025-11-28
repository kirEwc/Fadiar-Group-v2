"use client";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
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

export default function Card2({
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
    e.stopPropagation();
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
          className={`bg-white w-full max-w-full p-3 border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between gap-3 ${
            productId ? "cursor-pointer transition-shadow hover:shadow-md" : ""
          }`}
          style={{ height: "calc(2 * 240px + 0.75rem)" }}
        >
          {/* primer section */}
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-gray-50 shrink-0"
            style={{ height: "190px" }}
          >
            <Image
              className="h-full w-full object-contain"
              alt={title}
              width={500}
              height={500}
              src={`${server_url}/${image}`}
            />
          </div>

          {/* segundo section */}
          <div className="flex flex-col gap-2 shrink-0">
            <p className="text-sm text-[#777777] line-clamp-1">{category}</p>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#022954] line-clamp-2">
                {title}
              </h3>
              <p className="text-md text-[#022954] line-clamp-1">{brand}</p>
            </div>
          </div>

          {/* tercer section */}
          <div className="flex flex-1 flex-col justify-end gap-3 min-h-0">
            {warrantyNumber > 0 ? (
              <p className="text-sm font-medium text-[#D69F04]">
                Garantía de {warrantyNumber / 30} meses
              </p>
            ) : (
              <span className="h-6" />
            )}
            {temporal_price !== null ? (
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="flex items-baseline text-2xl font-bold text-[#022954]">
                  ${temporal_price}
                  <span className="ml-1 text-base font-normal text-[#022954]">
                    USD
                  </span>
                </p>
                <p className="text-md text-[#777777] line-through">
                  ${price} USD
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap items-baseline gap-2 text-[#022954]">
                <p className="text-2xl font-bold">${price}</p>
                <span className="text-base font-normal">
                  {currency?.currency ?? "USD"}
                </span>
              </div>
            )}
            <div
              className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2"
              onClick={handleButtonClick}
            >
              {actionIcon === "cart" ? (
                <>
                  <div className="flex items-center rounded-2xl border border-gray-200 bg-white">
                    <button
                      className="px-2.5 py-2 text-yellow-500 hover:bg-gray-50 cursor-pointer"
                      aria-label="Restar"
                      onClick={adjustQuantity(-1)}
                    >
                      −
                    </button>
                    <span className="px-2 py-1 text-sm font-semibold border-x border-gray-200">
                      {quantity}
                    </span>
                    <button
                      className="px-2.5 py-2 text-yellow-500 hover:bg-gray-50 cursor-pointer"
                      aria-label="Sumar"
                      onClick={adjustQuantity(1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="rounded-2xl border border-[#022954] hover:bg-gray-50 p-2.5 px-5"
                    onClick={handleAddToCart}
                  >
                  <ShoppingCartIcon className="h-5 w-5 text-primary" />

                  </button>
                </>
              ) : quantityProducts && quantityProducts > 0 ? (
                <p className="text-sm text-[#777777]">
                  Cantidad: {quantityProducts}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={productId ? handleCardClick : undefined}
          className={`bg-white flex w-full flex-col gap-4 rounded-2xl border border-gray-200 p-3 shadow-sm sm:flex-row sm:gap-6 ${
            productId ? "cursor-pointer transition-shadow hover:shadow-md" : ""
          }`}
          style={{ height: "240px" }}
        >
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-gray-50 sm:w-40 sm:shrink-0 lg:w-48"
            style={{ minHeight: "160px" }}
          >
            <Image
              className="h-full w-full object-contain"
              alt={title}
              width={500}
              height={500}
              src={`${server_url}/${image}`}
            />
          </div>

          <div className="flex flex-1 flex-col overflow-hidden min-w-0">
            <p className="mb-2 text-sm text-[#777777] line-clamp-1">
              {category}
            </p>

            <div className="mb-3 space-y-1">
              <h3 className="text-md font-bold text-primary sm:text-lg line-clamp-2">
                {title}
              </h3>
              <p className="text-sm text-primary sm:text-md line-clamp-1">
                {brand}
              </p>
            </div>

            {warrantyNumber > 0 ? (
              <p className="mb-3 text-sm font-medium text-[#D69F04]">
                Garantía de {warrantyNumber / 30} meses
              </p>
            ) : (
              <span className="h-6" />
            )}

            {temporal_price !== null ? (
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="flex items-baseline text-2xl font-bold text-[#022954]">
                  ${temporal_price}
                  <span className="ml-1 text-base font-normal text-[#022954]">
                    USD
                  </span>
                </p>
                <p className="text-md text-[#777777] line-through">
                  ${price} USD
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap items-baseline gap-2 text-[#022954]">
                <p className="text-2xl font-bold">${price}</p>
                <span className="text-base font-normal">
                  {currency?.currency ?? "USD"}
                </span>
              </div>
            )}

            <div
              className="mt-auto flex flex-wrap items-center justify-between gap-3"
              onClick={handleButtonClick}
            >
              {actionIcon === "cart" ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-xl border border-gray-200 font-bold">
                    <button
                      className="px-3 py-2 text-accent"
                      aria-label="Restar"
                      onClick={adjustQuantity(-1)}
                    >
                      −
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                    <button className="px-3 py-2 text-accent" aria-label="Sumar" onClick={adjustQuantity(1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="rounded-xl border border-primary p-2.5 px-6"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCartIcon className="h-5 w-5 text-primary" />
                  </button>
                </div>
              ) : quantityProducts && quantityProducts > 0 ? (
                <p className="text-sm text-[#777777]">Cantidad: {quantityProducts}</p>
              ) : null}

              {actionIcon === "delete" && (
                <Trash2 className="h-6 w-6 cursor-pointer text-[#1E1E1E]" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}