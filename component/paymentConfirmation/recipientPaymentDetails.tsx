

export default function RecipientPaymentDetails() {
    return(
        <div >
        <div>
        <h5 className="text-primary font-bold text-xl ml-4 pb-1">
          DATOS DE ENTREGA
        </h5>
        <div className="w-full  border-b-2 border-gray"></div>
      </div>

      <div className="space-y-3 mt-4 ">

        <div className="ml-4">
          <p className="text-[gray] ">
            Método de entrega:{" "}
            <span className="text-primary ">Domicilio</span>
          </p>
        </div>

        <div className="w-full bg-[#F5F7FA] ">
          <p className="ml-4 text-primary">Datos de beneficiario</p>
        </div>

        <div className="ml-4">
          <p className="text-[gray] ">
            Nombre:{" "}
            <span className="text-primary ">Julio</span>
          </p>
        </div>

           <div className="ml-4">
          <p className="text-[gray] ">
            Apellidos:{" "}
            <span className="text-primary ">Almaguer Adán</span>
          </p>
        </div>
        
           <div className="ml-4">
          <p className="text-[gray] ">
            Teléfono:{" "}
            <span className="text-primary ">+53 56729455</span>
          </p>
        </div>

           <div className="ml-4">
          <p className="text-[gray] ">
            Correo electrónico: {" "}
            <span className="text-primary ">julioaa02@gmail.com</span>
          </p>

        </div>
          <div className="w-full bg-[#F5F7FA] ">
          <p className="ml-4 text-primary">Dirección de entrega</p>
        </div>

           <div className="ml-4">
          <p className="text-[gray] ">
            Dirección: {" "}
            <span className="text-primary ">Calle Sol #815 entre 1ra y 3ra. 
                   Cerro, La Habana</span>
          </p>
        </div> 

            <div className="w-full  border-b-2 border-gray"></div>
           
            <div className="ml-4">
            <p className="text-accent">Editar datos de entrega</p>
            </div>

      </div>
        </div>
    );
}