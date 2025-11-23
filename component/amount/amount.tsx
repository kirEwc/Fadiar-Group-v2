"use client";
import { ChevronDown, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { InputField } from "../inputField/inputField";
import PhoneInput from "../phoneInput/phoneInput";

const provinces = ["La Habana", "Matanzas", "Santiago de Cuba"];
const municipalitiesHavana = [
  "Playa",
  "Plaza de la Revolución",
  "Centro Habana",
  "Habana Vieja",
  "Diez de Octubre",
  "La Lisa",
  "Boyeros",
  "Cotorro",
  "Guanabacoa",
  "Regla",
  "Marianao",
  "San Miguel del Padrón",
];

export default function Amount() {
  const [openProvinces, setOpenProvinces] = useState(false);
  const [selectedProvinces, setSelectedProvinces] = useState("");
  const [openMunicipalitiesHavana, setOpenmunicipalitiesHavana] =
    useState(false);
  const [selectedMunicipalitiesHavana, setSelectedMunicipalitiesHavana] =
    useState("");

  const [formData, setFormData] = useState({
    phoneCountry: "",
    identityCard: "",
    phone: "",
  });

  const provincesRef = useRef<HTMLDivElement>(null);
  const municipalitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        provincesRef.current &&
        !provincesRef.current.contains(event.target as Node)
      ) {
        setOpenProvinces(false);
      }
      if (
        municipalitiesRef.current &&
        !municipalitiesRef.current.contains(event.target as Node)
      ) {
        setOpenmunicipalitiesHavana(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div className="max-h-full   bg-white font-sans text-[#022954]">
      {/* Importe Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wide mb-4 border-b pb-2 border-gray-200">
          Importe
        </h2>
        <div className="flex justify-between text-xl items-center text-gray-500">
          <span>Subtotal</span>
          <span>$ 582 USD</span>
        </div>
      </div>

      {/* Personal Info Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#022954] mb-6">
          Leydis Jadiar López
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-md ">
          <div className="space-y-2">
            <label className=" font-medium text-gray-600">Teléfono</label>
            <div className="relative">
              {/* Teléfono con bandera */}
              <PhoneInput
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Teléfono"
              />
            </div>
          </div>
          
            <div>
              <label className=" font-medium text-gray-600">
                Carnet de Identidad
              </label>
              <InputField
                type="text"
                placeholder="Carnet de Identidad"
                name="identityCard"
                value={formData.identityCard}
                onChange={handleInputChange}
              />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-md">
          <div className="w-full relative" ref={provincesRef}>
            <label className=" font-medium text-gray-600">Provincia</label>
            <div
              tabIndex={0}
              className="flex h-12 items-center justify-between rounded-xl border border-gray-100 bg-[#F5F7FA] px-3 cursor-pointer focus-within:ring-2 focus-within:ring-accent focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => setOpenProvinces(!openProvinces)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenProvinces(!openProvinces);
                }
              }}
            >
              <span
                className={
                  selectedProvinces ? "text-gray-800" : "text-gray-500"
                }
              >
                {selectedProvinces || "Seleccione provincia"}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>

            {openProvinces && (
              <ul className="absolute w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 max-h-60 overflow-auto">
                {provinces.map((prov) => (
                  <li
                    key={prov}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors text-gray-700"
                    onClick={() => {
                      setSelectedProvinces(prov);
                      setOpenProvinces(false);
                    }}
                  >
                    {prov}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-full relative" ref={municipalitiesRef}>
            <label className=" font-medium text-gray-600">Municipio</label>
            <div
              tabIndex={0}
              className="flex h-12 items-center justify-between rounded-2xl border border-gray-100 bg-[#F5F7FA] px-3 cursor-pointer focus-within:ring-2 focus-within:ring-accent focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() =>
                setOpenmunicipalitiesHavana(!openMunicipalitiesHavana)
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenmunicipalitiesHavana(!openMunicipalitiesHavana);
                }
              }}
            >
              <span
                className={
                  selectedMunicipalitiesHavana
                    ? "text-gray-800"
                    : "text-gray-500"
                }
              >
                {selectedMunicipalitiesHavana || "Seleccione municipio"}
              </span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>

            {openMunicipalitiesHavana && (
              <ul className="absolute w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 max-h-60 overflow-auto">
                {municipalitiesHavana.map((muni) => (
                  <li
                    key={muni}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors text-gray-700"
                    onClick={() => {
                      setSelectedMunicipalitiesHavana(muni);
                      setOpenmunicipalitiesHavana(false);
                    }}
                  >
                    {muni}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <div className="relative flex items-center ">
            <input
              type="checkbox"
              id="delivery"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-400 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#022954] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-[#022954] checked:border-[#022954] appearance-none"
            />
            <Check className="absolute h-3 w-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5" />
          </div>

          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="delivery"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500"
            >
              ¿Necesitas entrega a domicilio?{" "}
              <span className="text-accent text-xs font-normal">
                (Disponible solo en La Habana)
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="mb-8">
        <h3 className=" font-bold uppercase tracking-wide mb-4 text-[#022954]">
          RESUMEN DEL PEDIDO
        </h3>
        <div className="bg-[#F5F7FA] rounded-xl overflow-hidden">
          <div className="flex justify-between items-center p-4 text-[#022954]">
            <span className="text-xl">Subtotal</span>
            <span className="text-xl">$ 582 USD</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-[#E2E6EA]">
            <span className="font-bold text-[#022954] text-2xl">
              Total a pagar
            </span>
            <span className="text-3xl font-bold text-[#022954]">
              $ 582 <span className="text-base font-normal">USD</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#022954] text-white py-4 px-20 text-base font-semibold rounded-xl hover:scale-103 transition cursor-pointer">
          Confirmar Orden
        </button>
      </div>
    </div>
  );
}
