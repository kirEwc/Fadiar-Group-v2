import Image from "next/image";
import "@fontsource/just-me-again-down-here";

export default function SectionPromoHome1() {
  return (
    <>
      <div id="blanco" className="bg-white  w-full h-82 relative text-white">
        <div
          id="azul"
          className="bg-primary w-full h-80 md:h-60 py-4 flex justify-center items-center"
        >
          <div className="flex flex-col md:flex-row h-full  md:w-4xl justify-center items-center mt-20 p-4 md:mx-1">
            <div id="lorem" className="flex justify-center  flex-col w-full md:w-3/4 md:mb-20 md:ml-5">
              <h1 className="text-2xl md:text-3xl font-bold">
                <samp className="text-[#D29C05] block">
                  Variedad de productos
                </samp>
                <span >Electrodomésticos</span>
              </h1>
              <p className="w-full mt-4  text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                scelerisque, blandit duis sapien phasellus turpis sem convallis
                imperdiet tempus.
              </p>
            </div>
            <div id="sazon" className=" md:w-2/4  relative mt-2">
              <div className="w-full md:w-52">
                <h1
                  className="font-['Just_Me_Again_Down_Here'] mr-38 mt-4 md:mt-0 md:mr-0 text-3xl md:text-3xl text-white md:text-center         
                "
                >
                  Échale Sazón a la Olla
                </h1>
              </div>

              <div
                id="img"
                className="relative flex justify-center items-center top-[-35] z-10"
              >
                <Image
                  src="/images/pot.png"
                  alt="Electrodomésticos"
                  width={1600}
                  height={1600}
                  className="w-62 ml-2 md:scale-110 md:w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
