import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import BottomShadow from "@/component/ui/bottomShadow";

export default function SectionPromoHome1() {
  return (
    <>
      {/* <div
        id="blanco"
        className="bg-white  w-full h-[400px]  relative text-white "
      >
        <div
          id="azul"
          className="bg-primary w-full h-[360px] sm:h-[580px] lg:h-[300px] xl:h-[300px] 2xl:h-[400px] py-4 flex justify-center items-center"
        >
          <div className="flex flex-col lg:flex-row h-full  md:w-full justify-center items-center mt-20 p-4 md:mx-30  ">
           
            <div id="lorem"
              className="flex justify-center  flex-col  md:mb-20  w-90 sm:w-150  sm:mt-30 md:mt-auto  "
            >
              <h1 className="text-2xl sm:text-4xl  xl:text-5xl font-bold">
                <samp className="text-[#D69F04] block">
                  Variedad de productos
                </samp>
                <span>Electrodomésticos</span>
              </h1>
              <p className="sm:w-150 lg:w-120  xl:w-150 mt-4  text-sm sm:text-base xl:text-xl ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                scelerisque, blandit duis sapien phasellus turpis sem convallis
                imperdiet tempus.
              </p>
            </div>

            <div id="sazon" className="  md:w-2/4  relative mt-2">
            
              <div className="w-full md:w-120 absolute  xl:-left-12 lg:left-[-100] lg:mt-1   sm:ml-10 md:ml-0 sm:mt-10  md:mt-[-50] md:left-[-160] xl:mt-0
              ">
                <h1 className="font-['Just_Me_Again_Down_Here'] text-3xl sm:text-5xl md:mr-25 2xl:mr-0 mt-8 sm:mt-0 2xl:text-6xl text-white md:text-center">
                  Échale Sazón a la Olla
                </h1>
              </div>

              <div
                id="img"
                className="relative flex justify-center items-center  "
              >
                <div className="relative w-fit h-fit  mx-auto">
                  <Image
                    src="/images/pot.svg"
                    alt="Electrodomésticos"
                    width={1000}
                    height={1000}
                    className="scale-120 sm:h-full sm:w-full md:scale-240 lg:scale-150 xl:scale-140 2xl:scale-150 z-20 "
                  />

                  <BottomShadow
                    opacity={0.9}
                    className="w-[70%]  sm:w-[50%] md:w-[70%] h-12 bottom-3 sm:bottom-10 md:bottom-[-70] md:left-1/7  lg:bottom-0
                    lg:left-2/7
                    xl:bottom-0 left-2/6 sm:left-3/9 xl:left-2/6 -translate-x-1/2 z-10"
                  />

                  
                  <BottomShadow
                    opacity={0.9}
                    className="w-[70%] sm:w-[50%] md:w-[70%]  h-12 bottom-5 sm:bottom-14  md:bottom-[-60] md:left-7/7 
                    lg:bottom-1 lg:left-6/8
                     xl:bottom-4 left-6/8  sm:left-/8 -translate-x-1/2 z-10 xl:left-6/8"
                  />
                </div>         
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-primary w-full h-[380px] xl:h-[400px] relative">

         <div id="lorem" className="absolute text-white top-5 left-5 md:mt-10 xl:top-20  xl:left-10 2xl:left-40 "            >
              <h1 className="text-[28px] sm:text-4xl  xl:text-5xl font-bold  animate__animated  animate__lightSpeedInLeft">
                <samp className="text-[#D69F04] block">
                  Variedad de productos
                </samp>
                <span>Electrodomésticos</span>
              </h1>
              <p className=" mt-4 w-85 xl:w-120 text-sm sm:text-base xl:text-xl animate__animated  animate__fadeInUp  [animation-delay:0.5s]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                scelerisque, blandit duis sapien phasellus turpis sem convallis
                imperdiet tempus.
              </p>
            </div>


        <div >
          <h1 className="font-['Just_Me_Again_Down_Here'] absolute text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl text-white left-4 sm:left-auto top-55 sm:top-auto sm:bottom-30 sm:right-45 md:bottom-50 md:right-45 lg:bottom-60 right-30 lg:right-70 xl:right-90 xl:bottom-80 animate__animated animate__backInDown  [animation-delay:1s] ">
            Échale Sazón a la Olla
          </h1>

          <img
            src="/images/pot.svg"
            alt="Background"
            className="absolute bottom-[-80] lg:bottom-[-170] right-0 md:right-[-70] xl:right-0 w-100 md:w-150 md:bottom-[-120] lg:w-200 xl:w-220   h-auto object-cover "
          />          
         
          
               
        </div>
      </div>
    </>
  );
}
