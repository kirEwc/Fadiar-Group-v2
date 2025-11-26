import React from "react";

interface FloatingLabelInputProps {
  type: "email" | "password" | "text";
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  className?: string;
}

export default function FloatingLabelInput({
  type,
  label,
  required = false,
  value,
  onChange,
  name,
  id,
  className = "",
}: FloatingLabelInputProps) {
  return (
    <div className={`relative mt-6 group ${className}`}>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        placeholder=" "
        className="w-full h-10 md:h-11 bg-transparent border-2 border-white outline-none rounded-full text-base text-white px-4 transition-all duration-500 peer focus:border-white"
      />
      <label className="absolute top-1/2 left-4 -translate-y-1/2 text-md font-bold pointer-events-none transition-all duration-500 text-gray peer-focus:top-[-10px] peer-focus:text-sm peer-focus:px-1.5 peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:text-accent">
        {label}
      </label>
    </div>
  );
}
