"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string, countryCode: string) => void;
  placeholder?: string;
  defaultCountry?: { name: string; code: string };
}

export default function PhoneInput({
  value = "",
  onChange,
  placeholder = "Teléfono",
  defaultCountry = { name: "Cuba", code: "CU" },
}: PhoneInputProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneValue, setPhoneValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cargar países
  useEffect(() => {
    async function loadFlags() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,flags"
        );
        if (!res.ok) throw new Error("Error al cargar países");

        const data = await res.json();

        if (!Array.isArray(data)) throw new Error("Datos inválidos recibidos");

        const mapped = data.map((c: any) => ({
          name: c.name.common,
          code: c.cca2,
          flag: c.flags.png,
        }));

        setCountries(mapped);
      } catch (err) {
        console.error("ERROR:", err);
      }
    }

    loadFlags();
  }, []);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPhoneValue(newValue);
    if (onChange) {
      onChange(newValue, selectedCountry.code);
    }
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    if (onChange) {
      onChange(phoneValue, country.code);
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <div className="w-full flex items-center gap-2 rounded-2xl px-4 py-3 bg-[#F5F7FA] text-gray-700 focus-within:ring-2 focus-within:ring-accent">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center cursor-pointer gap-1 hover:opacity-80 transition-opacity"
        >
          <img
            src={`https://flagcdn.com/32x24/${selectedCountry.code.toLowerCase()}.png`}
            alt={`Bandera de ${selectedCountry.name}`}
            className="w-6 h-auto"
          />
          {isDropdownOpen ? (
            <ChevronUp className="h-3 w-3 min-w-5 min-h-4" />
          ) : (
            <ChevronDown className="h-3 w-3 min-w-5 min-h-4" />
          )}
        </button>
        <span className="text-gray-600 ml-4">|</span>
        <input
          type="text"
          placeholder={placeholder}
          value={phoneValue}
          onChange={handlePhoneChange}
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
        />
      </div>

      {/* Dropdown de países */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-full max-h-60 overflow-y-auto bg-white rounded-2xl shadow-lg border border-gray-200">
          {countries.length > 0 ? (
            countries.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors text-left"
              >
                <img
                  src={country.flag}
                  alt={`Bandera de ${country.name}`}
                  className="w-6 h-auto"
                />
                <span className="text-gray-700">{country.name}</span>
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">Cargando países...</div>
          )}
        </div>
      )}
    </div>
  );
}
