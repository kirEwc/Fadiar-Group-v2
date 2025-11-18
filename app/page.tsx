import Menu from "@/component/menu/menu";
import Serchbar from "@/component/searchBar/searchBar";
import { TablerShoppingCart, TablerUserCircle } from "@/icons/icons";
import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import SectionPromoHome1 from "@/section/sectionPromoHome1";

export default function Home() {
  return (
    <>
      <div className="bg-white  w-screen h-screen">
        <div className="pt-4 flex justify-around items-start">
          <div>
            <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
          </div>

          <div>
            <Serchbar />
          </div>

          <div className="flex ">
            <div>
              <TablerShoppingCart className="mr-4" />
            </div>

            <div>
              <TablerUserCircle />
            </div>
          </div>
        </div>

        <div>
          <Menu />
        </div>

        <div>
          <SectionPromoHome1/>
        </div>

        <div className="px-20">
          <span className="text-[#022954]">
            Entra y consulta
            <h3 className="text-[#D69F04] text-lg font-bold">
              Categorias destacadas
            </h3>
          </span>

          <div className="px-4 py-8 text-[#022954] ">
            <div className="flex justify-between items-center">
            <div>
                <h4 className="font-bold">Ventilador</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit  scelerisque.
                </p>
              </div>
              <div>
                
              </div>
            </div>
              
          </div>
        </div>

      </div>
    </>
  );
}
