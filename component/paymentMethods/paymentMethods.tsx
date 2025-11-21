import { ChevronDown } from "lucide-react";

export default function PaymentMethods() {
  return (
    <>
      <div className="flex flex-col xl:flex-row mx-4 sm:mx-2 gap-4">
        <div>
          <h5 className="text-primary font-bold text-lg">01 - Forma de pago</h5>

          <div className="w-full sm:w-100 h-36 bg-snow mt-5 border border-gray rounded-xl p-4 shadow-sm font-bold flex">
            <div>
              <div>
                <label className="flex items-center gap-3 cursor-pointer relative">
                  <input
                    type="radio"
                    name="metodo"
                    className="peer absolute opacity-0"
                  />

                  {/* Círculo - ahora es hermano directo del input */}
                  <span className="w-6 h-6 rounded-full border-3 border-[#022954] flex items-center justify-center peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:rounded-full peer-checked:after:bg-[#022954] peer-checked:after:block after:hidden transition" />
                </label>
              </div>
            </div>

            <div>
              <div className="ml-4">
                <p className="text-[#1E1E1E] text-lg">
                  Tarjetas de crédito o débito{" "}
                </p>
                <p className="text-[gray] text-[13px]">
                  Comisión por forma de pago: 4%
                </p>
              </div>

              <div>
                <img
                  src="/images/creditCards.svg"
                  alt="Visa"
                  className="h-18 mr-4 "
                />
              </div>
            </div>
          </div>

          <div className="w-full sm:w-100 h-36 bg-snow mt-5 border border-gray rounded-xl p-6 shadow-sm font-bold flex">
            <div>
              <div>
                <label className="flex items-center gap-3 cursor-pointer relative">
                  <input
                    type="radio"
                    name="metodo"
                    className="peer absolute opacity-0"
                  />

                  {/* Círculo - ahora es hermano directo del input */}
                  <span className="w-6 h-6 rounded-full border-3 border-[#022954] flex items-center justify-center peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:rounded-full peer-checked:after:bg-[#022954] peer-checked:after:block after:hidden transition" />
                </label>
              </div>
            </div>

            <div>
              <div className="ml-4">
                <p className="text-[#1E1E1E] text-lg">Saldo TropiPay</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-primary font-bold text-xl">
            02 - Datos del comprador
          </h5>
          <p className="text-[#777777] text-md mt-2">
            Propietario de la cuenta desde donde se realiza la compra
          </p>
          <div className="w-full space-y-8 mt-4">
            {/* Grid de 2 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre */}
              <input
                type="text"
                placeholder="Nombre"
                className="w-full rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 placeholder:text-gray-500"
              />

              {/* Apellidos */}
              <input
                type="text"
                placeholder="Apellidos"
                className="w-full rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 placeholder:text-gray-500"
              />

              {/* Correo */}
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 placeholder:text-gray-500"
              />

              {/* Teléfono con bandera */}
              <div className="w-full flex items-center gap-2 rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700">
                <span className="text-lg leading-none">🇨🇺</span>
                <ChevronDown className="h-3 w-3 text-gray-400" />
                <span className="text-gray-600">|</span>
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Dirección */}
            <input
              type="text"
              placeholder="Dirección"
              className="w-full rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 placeholder:text-gray-500"
            />

            {/* Nota */}
            <textarea
              placeholder="Nota"
              rows={5}
              className="w-full rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 placeholder:text-gray-500 resize-none"
            />
          </div>
        </div>

        {/* FORMA DE PAGO*/}
        <div className="w-full sm-w-100">
          <div>
            <h5 className="text-primary font-bold text-xl">FORMA DE PAGO</h5>
            <div className="w-full  border-b-2 border-gray"></div>
          </div>
          <div className="relative h-20 w-full ">
            <img
              src="/images/mastercard.svg"
              alt="Mastercard"
              className="absolute top-2 right-2 h-12 w-10"
            />
          </div>
          <div>
            <h5 className="text-primary font-bold text-xl">IMPORTE</h5>
            <div className="w-full  border-b-2 border-gray"></div>
          </div>

          <div className="mb-8">
            <div className="bg-[#F5F7FA] rounded-xl overflow-hidden">
              <div className="flex justify-between items-center p-6 text-[#022954]">
                <span className="text-md">Subtotal</span>
                <span className="font-medium">$ 582 USD</span>
              </div>

              <div>
                <div className="flex justify-between items-center p-6 text-[#022954]">
                  <span className="text-md">Comisión por forma de pago:</span>
                  <span className="font-medium whitespace-nowrap">$ 5 USD</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-[#E2E6EA]">
                <span className="font-bold text-[#022954] text-xl">Total</span>
                <span className="text-xl font-bold text-[#022954]">
                  $ 582 <span className="text-base font-normal">USD</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <div className="w-full">
              <button className="bg-white text-primary border border-primary py-4 w-full font-semibold rounded-xl hover:scale-103 transition cursor-pointer">
                Atrás
              </button>
            </div>
             <div className="w-full">
              <button className="bg-[#022954] text-white py-4 w-full font-semibold rounded-xl hover:scale-103 transition cursor-pointer">
               Continuar
              </button>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
