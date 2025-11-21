import Amount from "@/component/amount/amount";
import Card from "@/component/ui/card";
import { CheckoutStepper } from "@/component/ui/stepper";

export default function Cart1() {
  return (
    <div className=" mx-4 md:px-25 2xl:px-28">
      <div className="mt-5">
        <p className="text-xs text-gray-400 mb-4">
          <span className="text-gray-400">Home - </span>
          <span className="text-primary font-semibold">Carrito de Compras</span>
        </p>
        <h1 className="text-3xl text-primary font-bold ">Carrito</h1>
      </div>

      <div className="flex justify-center items-center">
        <div className=" w-140  lg:ml-20">
          <CheckoutStepper currentStep={0} />
        </div>
      </div>

      <div className="mt-20 flex flex-col justify-center items-center lg:flex-row lg:items-start  gap-20">
        <div className="w-full flex flex-col gap-y-3  lg:w-140">
          <Card
            brand="Marca Whirlpool"
            price="520"
            image="/images/pot.png"
            title="Refrigerador 12 "
            position="vertical"
            maxWidthVertical="full"
          />

            <Card
            brand="Marca Whirlpool"
            price="520"
            image="/images/pot.png"
            title="Refrigerador 12 "
            position="vertical"
            maxWidthVertical="full"
          />
        </div>

        <div className="w-/3">
          <Amount />
        </div>
      </div>
    </div>
  );
}
