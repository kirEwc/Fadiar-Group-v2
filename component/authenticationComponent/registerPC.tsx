"use client";

import FloatingLabelInput from "./FloatingLabelInput";


export default function RegisterPC() {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-primary p-4">
      {/* Container principal con animación circular */}
      <div className="relative w-[700px] h-[600px] flex items-center justify-center md:rounded-full overflow-hidden">
        {/* Spans animados en círculo - 270 grados (lado derecho y superior/inferior) */}
        {[...Array(45)].map((_, i) => {
          // Calcular ancho: más pequeño al inicio y final, más grande en el centro
          const progress = i / 44; // 0 a 1
          const widthScale = 0.3 + Math.sin(progress * Math.PI) * 0.7; // 0.3 a 1
          const width = Math.round(50 * widthScale * 100) / 100; // Redondear a 2 decimales
          const rotation = Math.round((-135 + i * (270 / 45)) * 100) / 100;
          const delay = Math.round(i * (3 / 45) * 100) / 100;

          return (
            <span
              key={i}
              className="absolute left-10 h-1.5  bg-primary rounded-full animate-blink"
              style={{
                width: `${width}px`,
                transformOrigin: "270px",
                transform: `rotate(${rotation}deg)`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}

        {/* Login Box */}
        <div className="md:absolute ml-20 md:ml-0 mx-4 md:mx-0 w-full md:w-[500px] z-10  md:p-5 md:rounded-3xl">
          <form className="  md:w-full md:px-2.5">
            <h2 className="text-2xl md:text-3xl text-white text-center  md:mb-2.5 font-semibold">
              Registro
            </h2>

            {/* Nombre y Primer Apellido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3">
              <FloatingLabelInput type="text" label="Nombre" required />
              <FloatingLabelInput
                type="text"
                label="Primer Apellido"
                required
              />
            </div>

            {/* Segundo Apellido y Correo */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FloatingLabelInput
                type="text"
                label="Segundo Apellido"
                required
              />
              <FloatingLabelInput type="email" label="Correo" required />
            </div>

            {/* Contraseñas */}
                <div className="grid grid-cols-1 md:grid-cols-2  md:gap-3">
              <FloatingLabelInput type="password" label="Contraseña" required />
              <FloatingLabelInput
                type="password"
                label="Confirmar contraseña"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-center  my-4">
              <a
                href="#"
                className="text-md font-bold no-underline text-gray  hover:underline transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 h-11 bg-accent border-none outline-none rounded-full cursor-pointer text-base text-white font-semibold hover:bg-accent/90 transition-all"
              >
                Registrarse
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-2.5 text-center">
              <a
                href="#"
                className="text-base text-gray no-underline  font-semibold hover:underline"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
