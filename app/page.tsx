import Menu from "@/component/menu/menu";
import Serchbar from "@/component/searchBar/searchBar";
import { TablerShoppingCart, TablerUserCircle } from "@/icons/icons";
import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import SectionPromoHome1 from "@/section/sectionPromoHome1";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-white">
        <div>
          <SectionPromoHome1 />
        </div>

        <div className="px-20">
          <span className="text-[#022954]">
            Entra y consulta
            <h3 className="text-[#D69F04] text-lg font-bold">
              Categorias destacadas
            </h3>
          </span>
        </div>

        <div className="flex justify-center items-center mx-4">
          <div className="px-4 py-8 text-[#022954] ">
            <div className="flex justify-between items-center">  

              <div>
                <h4 className="font-bold">Ventilador</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  hendrerit scelerisque.
                </p>
              </div>
              <div className="flex items-center ">
                <div className="relative w-[400px] h-[400px]">
                  <div className="w-full h-full">
                    <Image
                      src="/images/vent.png"
                      alt="Electrodomésticos"
                      fill
                      className="object-contain"
                    />
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
