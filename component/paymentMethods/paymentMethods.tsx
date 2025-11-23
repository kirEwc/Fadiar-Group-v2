import CreditCards from "./creditCards";
import BuyerDetails from "./buyerDetails";
import CheckoutPayment from "./checkoutPayment";

export default function PaymentMethods() {
  return (
    <>
      <div className="flex flex-col xl:flex-row mx-4 sm:mx-2 gap-4 space-y-4 sm:space-y-0">
        <div>
          <CreditCards />
        </div>

        <div>
          <BuyerDetails />
        </div>

        <div>
          <CheckoutPayment />
        </div>
      </div>
    </>
  );
}
