import { ArrowRight } from "lucide-react";

interface ButtonPromoHome1Props {
  name: string;
  color: string;
}

export default function ButtonPromoHome1({
  name: nombre,
  color,
}: ButtonPromoHome1Props) {
  return (
    <button
      className="inline-flex items-center  sm:gap-2 rounded-xl px-3 sm:px-6  py-2 sm:py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
      style={{ backgroundColor: color }}
    >
      <span>{nombre}</span>

      
   <span ><ArrowRight className="w-8 h-5" /></span>

    </button>
  );
}
