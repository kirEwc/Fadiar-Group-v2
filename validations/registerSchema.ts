import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  lastname1: z.string().min(1, "El primer apellido es requerido"),
  lastname2: z.string().min(1, "El segundo apellido es requerido"),
  email: z.string().min(1, "El correo es requerido").pipe(z.email("Debe ser un correo válido")),
  password: z.string().min(1, "La contraseña es requerida"),
  confirmPassword: z.string().min(1, "Confirmar contraseña es requerido"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;
