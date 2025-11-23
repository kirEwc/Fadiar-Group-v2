import { products } from "@/data/products";
import PayerPaymentDetails from "./payerPaymentDetails";
import RecipientPaymentDetails from "./recipientPaymentDetails";

import CartCard from "../cartCard/cartCard";

export default function PaymentConfirmation() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 space-y-6 xl:space-y-0">
        <div >
          <h5 className="text-primary font-bold text-xl ml-4 pb-1">
            PRODUCTOS
          </h5>
          <div className="w-full  border-b-2 border-gray"></div>
          <div className="mt-4  flex flex-col justify-center items-center lg:flex-row lg:items-start  ">
            <div className=" flex flex-col gap-y-3 ">
              {products.map((item) => (
                <CartCard 
                  key={item.id}
                  brand={item.brand}
                  price={item.price}
                  image={item.image}
                  title={item.title}
                  quantityProducts={item.quantityProducts}
                  actionIcon="none"
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <PayerPaymentDetails />
        </div>

        <div>
          <RecipientPaymentDetails />
        </div>

        <div className="2xl:w-110">
          <div>
            <h5 className="text-primary font-bold text-xl  pb-1">IMPORTE</h5>
            <div className="w-full  border-b-2 border-gray"></div>
          </div>

          <div>
            <div className="mb-4 mt-4 ">
              <div className="bg-[#F5F7FA] rounded-xl overflow-hidden">

                <div className="p-4 space-y-6">
                  <div className="flex justify-between items-center  text-[#022954]">
                    <span className="text-md">Subtotal:</span>
                    <span className="font-medium">$ 582 USD</span>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-[#022954]">
                      <span className="text-md">
                        Comisión por forma de pago:
                      </span>
                      <span className="font-medium whitespace-nowrap text-xl">
                        $ 5 USD
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-[#022954]">
                      <span className="text-md">Costo de envio:</span>
                      <span className="font-medium whitespace-nowrap text-xl">
                        $ 10 USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-2 py-4  bg-[#E2E6EA]">
                  <span className="font-bold text-[#022954] text-2xl">
                    Total
                  </span>
                  <span className="text-xl font-bold text-[#022954]">
                    $ 582 <span className="text-2xl font-normal">USD</span>
                  </span>
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-between space-x-2">
            <div className="w-full">
              <button className="bg-white text-primary border border-primary py-2 w-full font-semibold rounded-xl hover:scale-103 transition cursor-pointer">
                Atrás
              </button>
            </div>
            <div className="w-full">
              <button className="bg-[#022954] text-white py-2 w-full font-semibold rounded-xl hover:scale-103 transition cursor-pointer">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
