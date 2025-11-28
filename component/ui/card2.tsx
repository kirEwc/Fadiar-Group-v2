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

  const handleCardClick = () => {
    if (productId) {
      router.push(`/products/${productId}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
            className="relative w-full overflow-hidden rounded-2xl bg-gray-50 flex-shrink-0"
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
          <div className="flex flex-col gap-2 flex-shrink-0">
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
              <div className="flex items-center rounded-2xl border border-gray bg-white">
                <button
                  className="px-2.5 py-2 text-yellow-500"
                  aria-label="Restar"
                >
                  −
                </button>
                <span className="px-2 py-1 text-sm font-semibold border-x border-gray-200">
                  1
                </span>
                <button
                  className="px-2.5 py-2 text-yellow-500"
                  aria-label="Sumar"
                >
                  +
                </button>
              </div>

              <button className="rounded-2xl border border-[#022954] p-2.5 px-5">
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
              {quantityProducts && quantityProducts > 0 ? (
                <p className="text-sm text-[#777777]">
                  Cantidad: {quantityProducts}
                </p>
              ) : (
                <div
                  className={`flex items-center rounded-xl border font-bold ${
                    actionIcon === "delete" ? "border-primary" : "border-gray"
                  }`}
                >
                  <button
                    className="px-3 py-2 text-accent"
                    aria-label="Restar"
                  >
                    −
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300">1</span>
                  <button className="px-3 py-2 text-accent" aria-label="Sumar">
                    +
                  </button>
                </div>
              )}

              <div>
                {actionIcon === "delete" ? (
                  <Trash2 className="h-6 w-6 cursor-pointer text-[#1E1E1E]" />
                ) : actionIcon === "cart" ? (
                  <button className="rounded-xl border border-primary p-2.5 px-6">
                    <ShoppingCart className="h-5 w-5 text-primary" />
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