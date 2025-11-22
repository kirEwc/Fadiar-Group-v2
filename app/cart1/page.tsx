import Amount from "@/component/amount/amount";
import Card from "@/component/ui/card";
import { CheckoutStepper } from "@/component/ui/stepper";
import { products } from "@/data/products";
import { SectionAbout3 } from "@/section/aboutUS/sectionAbout3";
import { SectionAbout4 } from "@/section/aboutUS/sectionAbout4";

export default function Cart1() {
  return (
    <div>
      <div className="   md:px-25 ">
        <div className="mx-4">
          <div className="mt-10 ">
            <p className="text-xs text-gray-400 mb-4">
              <span className="text-gray-400">Home - </span>
              <span className="text-primary font-semibold">
                Carrito de Compras
              </span>
            </p>
            <h1 className="text-3xl text-primary font-bold ">Carrito</h1>
          </div>

          <div className="flex justify-center items-center ">
            <div className=" w-140  lg:ml-25">
              <CheckoutStepper currentStep={0} />
            </div>
          </div>

          <div className="mt-20  flex flex-col justify-center items-center lg:flex-row lg:items-start  gap-20">
            <div className="w-full flex flex-col gap-y-3  lg:w-140">

              <div className=" flex flex-col gap-y-3 ">
              {products.map((item) => (
                <Card
                  key={item.id}
                  brand={item.brand}
                  price={item.price}
                  image={item.image}
                  title={item.title}
                  position="horizontal"
                  maxWidthVertical="full"
                  actionIcon="delete"
                />
              ))}
            </div>
           
            </div>

            <div className="w-/3">
              <Amount />
            </div>
          </div>
        </div>

        <div className="sm:py-20">
          <SectionAbout3 />
        </div>
      </div>

      <div className="sm:hidden mt-60">
        <SectionAbout4 />
      </div>
    </div>
  );
}
