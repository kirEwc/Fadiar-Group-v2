"use client";

import ButtonPromoHome1 from "@/component/button/buttonPromoHome1";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SectionMoreproducts() {
  const router = useRouter();
  return (
    <>
      <div className=" px-4 md:px-25 2xl:px-28 mt-10 sm:mt-30 text-start">
        <span className="text-[#022954] text-xl font-bold">
          Entra y consulta
          <h3 className="text-accent text-2xl font-bold">
            Categorias destacadas
          </h3>
        </span>
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-center  ">
        <div
          id="card1"
          className="mx-1 lg:w-6/12 relative overflow-hidden rounded-xl"
        >
          <div>
            <img
              src="/images/vent.png"
              alt="vent"
              className="w-70 h-50 ml-25 xl:w-1/2 xl:h-1/2 object-cover  lg:ml-90 mt-4"
            />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col justify-center p-2 mr-50 lg:ml-32 w-55 lg:w-82">
            <div className="text-black ">
              <h4 className="font-bold text-xl">Ventilador</h4>
              <p className="text-xs w-42 sm:text-base sm:w-full">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                scelerisque.
              </p>
              <div className="mt-5 ">
                <ButtonPromoHome1
                  name="Ver más"
                  color="#022954"
                  icon={<ArrowRight  className="w-4 h-4 md:w-5 md:h-5" />}
                  onClick={() => router.push("/products")}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="card2"
          className=" sm:w-6/12 flex  justify-center items-center relative"
        >
          <div className="absolute mr-55  sm:mr-60  z-50 w-45 sm:w-80 p-4 text-black">
            <h4 className="font-bold text-xl">Refrigeradores y Neveras</h4>
            <p className="text-xs sm:text-base ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
              scelerisque, blandit duis sapien.
            </p>

            <div className="mt-1 md:mt-5">
              <ButtonPromoHome1
                name="Ver más"
                color="#022954"
                icon={<ArrowRight  className="w-4 h-4 md:w-5 md:h-5" />}
                onClick={() => router.push("/products")}
              />
            </div>
          </div>
          <div className="mt-5">
            <img
              src="/images/Fridge.png"
              alt="vent"
              className="ml-4 sm:ml-4 sm:h-70 object-contain xl:ml-50"
            />
          </div>
        </div>
      </div>
    </>
  );
}
