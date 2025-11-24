export const SectionAbout4 = () => {
  return (
    <>
      <div className="bg-primary w-full h-[437px] md:h-72 relative">

        <div className="absolute font-bold mt-12 text-center w-full md:ml-30 2xl:ml-60 md:w-90 text-3xl">
          <h1>
            <span className="text-accent">Pague de forma Segura</span>{" "}
            <span className="text-white">Presencial y en efectivo</span>
          </h1>
        </div>

        <div>
          <img
            src="/images/Rectangle.png"
            alt="Background"
            className="absolute bottom-0 left-30 "
          />

          <img
            src="/images/Vector15.png"
            alt="Background"
            className="absolute bottom-0 ml-70"
          />

          <img
            src="/images/Vector16.png"
            alt="Background"
            className="absolute bottom-0 left-0  w-325"
          />

          <img
            src="/images/mony.svg"
            alt="Background"
            className="absolute hidden md:block  bottom-0 right-0 w-210"
          />

         <img
            src="/images/monyMobile.svg"
            alt="Background"
            className="absolute  md:hidden  bottom-0 right-0 w-210"
          />


        </div>
      </div>
    </>
  );
};
