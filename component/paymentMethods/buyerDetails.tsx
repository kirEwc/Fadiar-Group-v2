"use client";
import { useState } from "react";
import { InputField } from "../inputField/inputField";
import PhoneInput from "../phoneInput/phoneInput";

export default function BuyerDetails() {
  // Estados para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    telefonoCountry: "",
    direccion: "",
    nota: "",
  });

  // Función para manejar cambios en los inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para manejar cambios en el teléfono
  const handlePhoneChange = (value: string, countryCode: string) => {
    setFormData((prev) => ({
      ...prev,
      telefono: value,
      telefonoCountry: countryCode,
    }));
  };


  return (
    <>
      <div>
        <h5 className="text-primary font-bold text-xl">
          02 - Datos del comprador
        </h5>
        <p className="text-[#777777] text-md mt-4">
          Propietario de la cuenta desde donde se realiza la compra
        </p>
        <div className="w-full space-y-6 mt-4">
          {/* Grid de 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <InputField
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleInputChange}
            />
            <InputField
              type="email"
              placeholder="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            {/* Teléfono con bandera */}
            <PhoneInput
              value={formData.telefono}
              onChange={handlePhoneChange}
              placeholder="Teléfono"
            />
          </div>

          <InputField
            type="text"
            placeholder="Dirección"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
          />

          {/* Nota */}
          <textarea
            placeholder="Nota"
            rows={5}
            name="nota"
            value={formData.nota}
            onChange={handleInputChange}
            className="w-full rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
    </>
  );
}
