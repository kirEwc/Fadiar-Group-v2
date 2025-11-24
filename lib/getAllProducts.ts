import { api } from "@/lib/apiClient";

type InventoryResponse = {
  products: Product[];
};

export async function getProducts(token?: string): Promise<Product[]> {
  const response = await api.get<InventoryResponse>("/inventory_manager", token);
  return response.products || [];
}
