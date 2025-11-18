
import Menu from "@/component/menu/menu";
import Serchbar from "@/component/searchBar/searchBar";
import { TablerShoppingCart, TablerUserCircle } from "@/icons/icons";
import Image from "next/image";
import "@fontsource/just-me-again-down-here";



export default function Header(){
  return(
    <>
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
    </>
  );  
}