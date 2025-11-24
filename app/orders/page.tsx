import OrdersTable from "@/component/ordersTable/ordersTable";

export default function Orders() {
  return (
    <>
      <div className="px-40 mt-15">
        <div className=" ml-40">
          <h2 className="text-3xl text-primary font-bold">Mis Pedidos</h2>
        </div>

        <div>
          <OrdersTable />
        </div>
        
      </div>
    </>
  );
}
