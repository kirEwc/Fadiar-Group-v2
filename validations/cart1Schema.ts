import { z } from "zod";

export const cart1Schema = z.object({
  phone: z.string().min(1, "El teléfono es requerido"),
  identityCard: z.string().min(1, "El carnet de identidad es requerido"),
  province: z.string().min(1, "La provincia es requerida"),
  municipality: z.string().min(1, "El municipio es requerido"),
}).refine((data) => {
  // Extraer solo el número de teléfono (sin código país)
  const phoneNumbers = data.phone.replace(/^\+\d+\s/, "");
  return phoneNumbers === "" || /^\d+$/.test(phoneNumbers);
}, {
  message: "Solo números",
  path: ["phone"],
}).refine((data) => data.identityCard === "" || /^\d+$/.test(data.identityCard), {
  message: "Solo números",
  path: ["identityCard"],
});

export type Cart1FormData = z.infer<typeof cart1Schema>;
