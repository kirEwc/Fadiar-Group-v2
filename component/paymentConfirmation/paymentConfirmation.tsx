import { products } from "@/data/products";
import Card from "../ui/card";
import PayerPaymentDetails from "./payerPaymentDetails";
import RecipientPaymentDetails from "./recipientPaymentDetails";

export default function PaymentConfirmation() {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <h5 className="text-primary font-bold text-xl ml-4 pb-1">PRODUCTOS</h5>
          <div className="w-full  border-b-2 border-gray"></div>
          <div className="mt-4  flex flex-col justify-center items-center lg:flex-row lg:items-start  ">
            <div className=" flex flex-col gap-y-3 ">
              {products.map((item) => (
                <Card
                  key={item.id}
                  brand={item.brand}
                  price={item.price}
                  image={item.image}
                  title={item.title}
                  quantityProducts={item.quantityProducts}
                  position="horizontal"
                  maxWidthVertical="full"
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
          <RecipientPaymentDetails/>
        </div>

        {/* <div>
           <div>
          <h5 className="text-primary font-bold text-xl">IMPORTE</h5>
          <div className="w-full  border-b-2 border-gray"></div>
        </div>

        <div className="mb-8">
          <div className="bg-[#F5F7FA] rounded-xl overflow-hidden">
            <div className="flex justify-between items-center p-6 text-[#022954]">
              <span className="text-md">Subtotal:</span>
              <span className="font-medium">$ 582 USD</span>
            </div>
             

            <div>
              <div className="flex justify-between items-center px-6 py-4 text-[#022954]">
                <span className="text-md">Comisión por forma de pago:</span>
                <span className="font-medium whitespace-nowrap">$ 5 USD</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 py-6 bg-[#E2E6EA]">
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
 */}

      </div>
    </>
  );
}
