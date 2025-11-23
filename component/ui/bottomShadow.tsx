interface BottomShadowProps {
  width?: string;   // ej: "200px"
  height?: string;  // ej: "25px"
  opacity?: number; // ej: 0.25
  className?: string;
}

export default function BottomShadow({
  width = "180px",
  height = "22px",
  opacity = 0.25,
  className
}: BottomShadowProps) {
  return (
    <div
      className={`mx-auto rounded-full absolute ${className}`}
      style={{
        width,
        height,
        background: `radial-gradient(ellipse at center, rgba(0,0,0,${opacity}) 0%, rgba(0,0,0,0) 70%)`,
        filter: "blur(6px)",
      }}
    />
  );
}
