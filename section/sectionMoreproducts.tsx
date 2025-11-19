import ButtonPromoHome1 from "@/component/button/buttonPromoHome1";


export default function SectionMoreproducts() {
  return (
    <>
      <div className="px-20">
        <span className="text-[#022954] font-bold">
          Entra y consulta
          <h3 className="text-accent text-lg font-bold">
            Categorias destacadas
          </h3>
        </span>
      </div>

<div className="flex flex-col xl:flex-row justify-center items-center px-30 w-full">
  <div
   id="card1" 
   className="w-full xl:w-6/12 flex flex-col md:flex-row items-center">
    <div className="text-black xl:w-96">
      <h4 className="font-bold">Ventilador</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
        scelerisque.
      </p>
      <div className="mt-5">
        <ButtonPromoHome1
          name="Ver más"
          color="#022954"               
        />
      </div>
    </div>

    <div>
      <img src="/images/vent.png" alt="vent" className="h-70" />
    </div>
  </div>

  <div
    id="card2"
    className="w-full xl:w-6/12 flex flex-col md:flex-row justify-center items-center relative"
  >

    <div className="relative md:absolute top-0 md:top-[20%] left-0 md:left-[0%] 2xl:left-[10%] z-50 w-72 xl:w-80 p-4 text-black">
      <h4 className="font-bold">Refrigeradores y Neveras</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
        scelerisque, blandit duis sapien.
      </p>

      <div className="mt-5">
        <ButtonPromoHome1
          name="Ver más"
          color="#022954"               
        />
      </div> 
    </div>

    <img
      src="/images/Fridge.png"
      alt="vent"
      className="h-70 object-contain xl:ml-50"
    />
  </div>
</div>






    </>
  );
}
