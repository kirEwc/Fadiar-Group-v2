"use client";
import { useState } from "react";
import { InputField } from "../inputField/inputField";

export default function DeliveryMethod() {
  const [formData, setFormData] = useState({
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

  return (
    <>
      <div>
        <div>
          <h5 className="text-primary font-bold text-xl">
            02 - Forma de entrega
          </h5>
          <p className="text-[#777777] text-md mt-4">
            Añadir domicilio del beneficiario
          </p>
        </div>

        <div className="space-y-6 mt-4">
          <InputField
            type="text"
            placeholder="Dirección"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />

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
