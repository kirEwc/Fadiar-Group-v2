import Image from "next/image";

export default function VentiladoresCard() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* ------ BLOQUE IZQUIERDO ------ */}
        <div className="flex-1 space-y-4 px-6">
          <h2 className="text-[#022854] text-2xl font-semibold">Ventiladores</h2>

          <p className="text-gray-600 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit hendrerit scelerisque.
          </p>

          <button className="bg-[#022854] text-white px-5 py-2 rounded-md hover:bg-[#033a78] transition flex items-center gap-2">
            Ver más
            <span>→</span>
          </button>
        </div>

        {/* ------ BLOQUE DERECHO (FIGURAS + IMÁGENES) ------ */}
        <div className="flex-1 relative w-full h-[260px] md:h-[320px]">

          {/* Figuras geométricas */}
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Amarillo */}
            <div className="w-56 h-56 bg-[#D9A300] rotate-45 absolute"></div>

            {/* Azul */}
            <div className="w-56 h-56 bg-[#022854] rotate-45 absolute top-5 right-5"></div>
          </div>

          {/* Imagen principal */}
          <Image
            src="/images/005.svg"
            alt="Ventilador"
            width={350}
            height={350}
            className="absolute bottom-0 left-5 z-20 object-contain"
          />

          {/* Imagen secundaria */}
          <Image
            src="/images/007.svg"
            alt="Ventilador"
            width={350}
            height={350}
            className="absolute top-0 right-0 opacity-60 z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
