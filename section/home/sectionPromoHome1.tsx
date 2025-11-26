import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import BottomShadow from "@/component/ui/bottomShadow";

export default function SectionPromoHome1() {
  return (
    <>
      <div
        id="blanco"
        className="bg-white  w-full h-[400px] relative text-white "
      >
        <div
          id="azul"
          className="bg-primary w-full h-[360px] md:h-[300px] 2xl:h-[400px] py-4 flex justify-center items-center"
        >
          <div className="flex flex-col md:flex-row h-full  md:w-full justify-center items-center mt-20 p-4 md:mx-30  ">
            <div
              id="lorem"
              className="flex justify-center  flex-col  md:mb-20  w-90 sm:w-auto  sm:top-0"
            >
              <h1 className="text-2xl xl:text-5xl font-bold">
                <samp className="text-[#D69F04] block">
                  Variedad de productos
                </samp>
                <span>Electrodomésticos</span>
              </h1>
              <p className="sm:w-150 mt-4  text-sm md:text-xl ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                scelerisque, blandit duis sapien phasellus turpis sem convallis
                imperdiet tempus.
              </p>
            </div>

            <div id="sazon" className=" md:w-2/4  relative mt-2">
              <div className="w-full md:w-120 absolute  md:-left-12 ">
                <h1 className="font-['Just_Me_Again_Down_Here'] text-3xl md:text-5xl md:mr-25 2xl:mr-0 mt-8 sm:mt-0 2xl:text-6xl text-white md:text-center">
                  Échale Sazón a la Olla
                </h1>
              </div>

              <div
                id="img"
                className="relative flex justify-center items-center  "
              >
                <Image
                  src="/images/pot.svg"
                  alt="Electrodomésticos"
                  width={1000}
                  height={1000}
                  className=" scale-120   md:scale-140  2xl:scale-150 z-20"
                />

                {/* Sombra pegada a la imagen */}
                <div id="arrocera" className="absolute -bottom-3 w-full flex justify-center ">
                  <BottomShadow 
                  opacity={0.9} 
                  className="w-60 h-10 sm:w-70 sm:h-14 md:w-100 md:h-20 lg:w-30 lg:h-15 xl:w-70 xl:h-18 2xl:w-100 2xl:h-25
                  left-8 top-[-70] sm:top-[-105] sm:left-15 md:left-0 md:top-[-20] lg:left-[-1] lg:top-[-90] z-10 
                  2xl:top-[-100] 2xl:left-[-30]"
                  />
                </div>
                <div id="shadow-reina" className="absolute -bottom-3 w-full flex justify-center">
                    <BottomShadow 
                    opacity={0.9} 
                    className="w-70 h-10 sm:w-70 sm:h-14 md:w-100 md:h-20 lg:w-120 lg:h-24 xl:w-70 xl:h-18 
                    2xl:w-100 2xl:h-25
                    left-45 top-[-80] sm:left-75 sm:top-[-115] md:top-[-36] lg:left-38 lg:top-[-35] xl:left-55 xl:top-[-100] z-10 2xl:left-70 2xl:top-[-120]"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
