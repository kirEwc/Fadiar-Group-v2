

export default function SectionMoreproducts(){
    return(
<>

<div className="px-20">
          <span className="text-[#022954] font-bold">
            Entra y consulta
            <h3 className="text-[#D69F04] text-lg font-bold">
              Categorias destacadas
            </h3>
          </span>
        </div>

        <div className="flex justify-center items-center mx-4">
          <div className="px-4 py-8 text-[#022954] ">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">

                <div id="card1" className="w-full relative ml-70">
                  <img src="/images/vent.png" alt="vent" className="h-70" />
                  <div className="absolute top-1/3 left-[-250]  transform -translate-y-1/2 w-9/12 p-4 text-black ">
                    <h4 className="font-bold">Ventilador</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      hendrerit scelerisque.
                    </p>
                  </div>
                </div>

                <div id="card2" className="w-full relative">
                  {/* Imagen desplazada a la derecha */}
                  <img
                    src="/images/Fridge.png"
                    alt="vent"
                    className="h-70 ml-20" // Ajusta el valor según necesites
                  />

                  {/* Texto encima de la imagen */}
                  <div className="absolute top-1/3 left-[-70px] transform -translate-y-1/2 w-9/12 p-4 text-black">
                    <h4 className="font-bold">Refrigeradores y Neveras</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      hendrerit scelerisque, blandit duis sapien.
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
</>
    );
}