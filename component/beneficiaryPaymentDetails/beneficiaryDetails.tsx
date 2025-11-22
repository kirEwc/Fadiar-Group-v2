"use client";
import { useState } from "react";
import { InputField } from "../inputField/inputField";
import PhoneInput from "../phoneInput/phoneInput";

export default function BeneficiaryDetails() {
  // Estados para los datos del formulario
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCountry: "",
    identityCard: "",
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
      phone: value,
      phoneCountry: countryCode,
    }));
  };

  return (
    <>
      <div>
        <div>
          <h5 className="text-primary font-bold text-xl">
            01 - Datos del beneficiario
          </h5>
          <p className="text-[#777777] text-md mt-4">
            Persona que recibirá y será propietario del producto.
          </p>
        </div>

        <div className="space-y-6 mt-4">
          <InputField
            type="text"
            placeholder="Nombre"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

          <InputField
            type="text"
            placeholder="Apellidos"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          <InputField
            type="gmail"
            placeholder="Correo Electrónico"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          {/* Teléfono con bandera */}
          <PhoneInput
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Teléfono"
          />

          <InputField
            type="text"
            placeholder="Carnet de Identidad"
            name="identityCard"
            value={formData.identityCard}
            onChange={handleInputChange}
          />
        </div>

      </div>
    </>
  );
}
