import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import BottomShadow from "@/component/ui/bottomShadow";

export default function Pot() {
  return (
    <>
      <div
        id="blanco"
        className="bg-white  w-full h-[400px] relative text-white "
      >
        <div
          id="azul"
          className="bg-primary w-full h-[360px] md:h-[300px]  py-4 flex justify-center items-center"
        >
          <div className="flex flex-col md:flex-row h-full  md:w-full justify-center items-center mt-20 p-4 md:mx-10  ">
            <div
              id="lorem"
              className="flex justify-center  flex-col  md:mb-20  w-90 sm:w-auto  sm:top-0"
            >
              <h1 className="text-3xl  2xl:text-4xl font-bold">
                <samp className="text-[#D69F04] block animate__animated  animate__lightSpeedInLeft">
                  Variedad de productos
                </samp>
                <span>Electrodomésticos</span>
              </h1>
              <p className="w-120 2xl:w-150 mt-4  text-sm md:text-lg 2xl:text-xl  animate__animated  animate__fadeInUp  [animation-delay:0.5s]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                scelerisque, blandit duis sapien phasellus turpis sem convallis
                imperdiet tempus.
              </p>
            </div>

            <div id="sazon" className=" md:w-2/4  relative mt-2 2xl:mt-[-70]">
              <div className="w-full md:w-120 absolute  md:-left-20 2xl:-left-25 mt-4 2xl:mt-20 ">
                <h1 className="font-['Just_Me_Again_Down_Here'] text-3xl md:text-5xl md:mr-25 2xl:mr-0 mt-8 sm:mt-0 xl:text-5xl  text-white md:text-center animate__animated animate__backInDown  [animation-delay:1s] ">
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
                  className=" scale-120   md:scale-140  2xl:scale-150 z-20  2xl:mt-20"
                />

                <BottomShadow
                  opacity={0.9}
                  className="w-[70%] h-15 bottom-3 sm:bottom-[-3] left-2/7 -translate-x-1/2 z-10"
                />

                <BottomShadow
                  opacity={0.9}
                  className="w-[60%] h-15 bottom-1 left-6/8 -translate-x-1/2 z-10"
                />

                {/* Sombra pegada a la imagen */}
                {/* <div id="arrocera" className="absolute -bottom-3 w-full flex justify-center ">
                  <BottomShadow 
                  opacity={0.9} 
                  className="w-40 h-10 sm:w-96 sm:h-18 md:w-100 md:h-20 lg:w-30 lg:h-15 xl:w-70 xl:h-18 2xl:w-100 2xl:h-25
                  left-8 top-[-70] sm:top-[-30] md:left-0 md:top-[-20] lg:left-[-1] lg:top-[-90] z-10 
                  2xl:top-[-100] 2xl:left-[-60]"
                  />
                </div>
                <div id="shadow-reina" className="absolute -bottom-3 w-full flex justify-center">
                    <BottomShadow 
                    opacity={0.9} 
                    className="w-40 h-10 sm:w-96 sm:h-18 md:w-100 md:h-20 lg:w-120 lg:h-24 xl:w-70 xl:h-18 
                    2xl:w-100 2xl:h-25
                    left-45 top-[-80] sm:left-38 md:top-[-36] lg:left-38 lg:top-[-35] xl:left-55 xl:top-[-100] z-10 2xl:left-44 2xl:top-[-100]"
                    />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
