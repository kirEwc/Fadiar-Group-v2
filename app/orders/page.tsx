import MobileOrdes from "@/component/mobileOrdes/mobileOrdes";
import OrdersTable from "@/component/ordersTable/ordersTable";

export default function Orders() {
  return (
    <>
      <div className="mx-4 md:px-40 mt-10 md:mt-15">
        <div className="  md:ml-40">
          <h2 className="text-3xl text-primary font-bold">Mis Pedidos</h2>
        </div>

        <div className="md:hidden">
          <MobileOrdes/>
        </div>

        <div className="hidden md:block">
          <OrdersTable />
        </div>
        
      </div>
    </>
  );
}
