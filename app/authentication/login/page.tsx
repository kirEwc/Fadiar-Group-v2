"use client";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4">
      {/* Container principal con animación circular */}
      <div className="relative w-[400px] h-[400px] flex items-center justify-center rounded-full overflow-hidden">
        {/* Spans animados en círculo */}
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute left-0 w-8 h-1.5 bg-primary rounded-full animate-blink"
            style={{
              transformOrigin: "200px",
              transform: `rotate(${i * (360 / 50)}deg)`,
              animationDelay: `${i * (3 / 50)}s`,
            }}
          />
        ))}

        {/* Login Box */}
        <div className="absolute w-4/5 max-w-[300px] z-10 p-5 rounded-3xl">
          <form className="w-full px-2.5">
            <h2 className="text-3xl text-white text-center mb-2.5 font-semibold">
              Login
            </h2>

            {/* Email Input */}
            <div className="relative mt-6 group">
              <input
                type="email"
                required
                className="w-full h-11  border-2 border-white outline-none rounded-full text-base text-white px-4 transition-all duration-500 peer focus:border-white"
              />

              <label className="absolute top-1/2 left-4 -translate-y-1/2 text-md font-bold pointer-events-none transition-all duration-500 text-white peer-focus:top-[-10px] peer-focus:text-sm peer-focus:px-1.5 peer-focus:text-white peer-valid:top-[-10px] peer-valid:text-xs  peer-valid:px-1.5 peer-valid:text-white">
                Correo
              </label>
            </div>
            {/* Password Input */}
            <div className="relative mt-6 group">
              <input
                type="password"
                required
                className="w-full h-11 bg-transparent border-2 border-white outline-none rounded-full text-md text-white px-4 transition-all duration-500 peer focus:border-white"
              />
              <label className="absolute top-1/2 left-4 -translate-y-1/2 text-md font-bold pointer-events-none transition-all duration-500 text-white peer-focus:top-[-10px] peer-focus:text-sm  peer-focus:px-1.5 peer-focus:text-white peer-valid:top-[-10px] peer-valid:text-sm  peer-valid:px-1.5 peer-valid:text-white">
                Contraseña
              </label>
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
            <button
              type="submit"
              className="w-full h-11 bg-accent border-none outline-none rounded-full cursor-pointer text-base text-white font-semibold hover:bg-accent/90 transition-all"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <div className="mt-2.5 text-center">
              <a
                href="#"
                className="text-base text-gray no-underline  font-semibold hover:underline"
              >
                Registrarse 
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
