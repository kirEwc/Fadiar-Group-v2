import Image from "next/image";
import "@fontsource/just-me-again-down-here";
import Countdown from "@/component/countdown/countdown";

export default function SectionPromoHome2() {
  return (
    <>
      <div className="bg-primary w-full h-102 md:h-52 py-4 mb-4 flex flex-col md:flex-row justify-end items-center ">

        <div className="mx-10  font-bold text-3xl w-80 flex flex-col  items-start md:justify-center md:items-center ">
          <span className="text-accent">
            Próximamente
            <h3 className="text-white ">en nuestra Tienda</h3>
          </span>

          <div>
            <Countdown targetDate="2025-12-31T23:59:59" />
          </div>
        </div>

        <div className="bg-primary w-full h-52 py-4  relative flex justify-center items-center overflow-visible">
          <div className="absolute -bottom-4 md:bottom-0 md:ml-20 2xl:ml-0 xl:mr-100  ">
            <Image
              src="/images/Rectangle.png"
              alt="icon"
              width={1000}
              height={1000}
              className="mr-10 h-4 md:w-300 md:h-10 xl:w-130 xl:h-10 "
            />
          </div>

          <div className="absolute -bottom-4 md:bottom-0 ml-40  xl:ml-60 ">
            <Image
              src="/images/Vector15.png"
              alt="icon"
              width={1000}
              height={1000}
              className="mr-100  md:w-190 md:h-15 xl:w-230  "
            />
          </div>

          <div className="absolute -bottom-3 md:bottom-0 md:mb-1 ml-20 xl:ml-40 ">
            <Image
              src="/images/Vector16.png"
              alt="icon"
              width={1000}
              height={1000}
              className="mr-100 md:w-230 md:h-20 xl:w-245 "
            />
          </div>

          <div className="absolute mt-10 md:mt-0 xl:ml-20">
            <Image
              src="/images/productos.png"
              alt="icon"
              width={1000}
              height={1000}
              className="scale-140 h-38 md:h-auto mt-6 w-60 md:ml-15 md:w-50 2xl:mr-10 md:mt-0 xl:scale-[2.5]"
            />
          </div>
        </div>

      </div>
    </>
  );
}
