import Image from "next/image";
import "@fontsource/just-me-again-down-here";

export default function SectionPromoHome1() {
  return (
    <>
      <div id="blanco" className="bg-white w-full h-82 relative text-white">
        <div
          id="azul"
          className="bg-primary w-full h-60 py-4 flex justify-center items-center"
        >
          <div className="flex h-full w-4xl justify-center mx-1">
            <div id="lorem" className="flex justify-center flex-col w-3/4 ">
              <h1 className="text-3xl font-bold">
                <samp className="text-[#D29C05] block">
                  Variedad de productos
                </samp>
                <span className="font-bold">Electrodomésticos</span>
              </h1>
              <p className="w-full mt-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                scelerisque, blandit duis sapien phasellus turpis sem convallis
                imperdiet tempus.
              </p>
            </div>
            <div id="sazon" className="w-2/4  relative mt-2">
              <div className="w-52">
                <h1
                  className="font-['Just_Me_Again_Down_Here'] text-3xl text-white text-center
                
                "
                >
                  Échale Sazón a la Olla
                </h1>
              </div>

              <div
                id="img"
                className="relative flex justify-center items-center top-[-35] z-100"
              >
                <Image
                  src="/images/pot.png"
                  alt="Electrodomésticos"
                  width={1600}
                  height={1600}
                  className="scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
