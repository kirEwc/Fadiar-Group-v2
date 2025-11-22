"use client";
import { useState } from "react";
import { InputField } from "../inputField/inputField";
import PhoneInput from "../phoneInput/phoneInput";

export default function BuyerDetails() {
  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCountry: "",
    address: "",
    note: "",
  });

  // Function to handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle phone changes
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
        <h5 className="text-primary font-bold text-xl">
          02 - Datos del comprador
        </h5>
        <p className="text-[#777777] text-md mt-4">
          Propietario de la cuenta desde donde se realiza la compra
        </p>
        <div className="w-full space-y-6 mt-4">
          {/* 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              type="email"
              placeholder="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            {/* Phone with flag */}
            <PhoneInput
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="Teléfono"
            />
          </div>

          <InputField
            type="text"
            placeholder="Dirección"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />

          {/* Note */}
          <textarea
            placeholder="Nota"
            rows={5}
            name="note"
            value={formData.note}
            onChange={handleInputChange}
            className="w-full rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
    </>
  );
}
