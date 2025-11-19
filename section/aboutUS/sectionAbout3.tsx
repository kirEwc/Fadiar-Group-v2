import ButtonPromoHome1 from "@/component/button/buttonPromoHome1";
import { ArrowDownToLine } from "lucide-react";



export const SectionAbout3 = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-72 ">
        <div>
          <img
            src="/images/mobile.svg"
            alt="Group"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="w-140">
          <p className="text-gray-500 text-md">Al alcance de su mano</p>
          <h1 className="text-3xl font-bold">
            Descargue nuestra App{" "}
            <span className="text-[#F5A623]">Grupo Fadiar</span>
          </h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </p>
          <div className="mt-8">
            <ButtonPromoHome1 
            name="Download" 
            color="#022854" 
            icon={<ArrowDownToLine  />}
            iconPosition="left"
            />
          </div>
        </div>
      </div>
    </>
  );
};
