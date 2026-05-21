interface LogoMarkProps {
  size?: "sm" | "lg";
}

export default function LogoMark({ size = "sm" }: LogoMarkProps) {
  const isLarge = size === "lg";

  return (
    <div
      aria-hidden="true"
      className={`relative grid place-items-center overflow-visible ${isLarge ? "h-82.5 w-130" : "h-14.5 w-14.5"}`}
      style={
        isLarge ? { filter: "drop-shadow(0 25px 45px rgba(0,194,255,0.26))" } : undefined
      }
    >
      {/* The A letter */}
      <span
        className={`gradient-text-brand leading-none font-black ${isLarge ? "text-[310px] tracking-[-46px]" : "text-[54px] tracking-[-7px]"}`}
        style={
          isLarge
            ? { lineHeight: 0.8, display: "block" }
            : {
                filter: "drop-shadow(0 0 14px rgba(0,194,255,0.2))",
                display: "block",
              }
        }
      >
        A
      </span>

      {/* The diagonal arrow */}
      <div
        className="logo-arrow-line absolute"
        style={
          isLarge
            ? {
                width: 330,
                height: 38,
                transform: "rotate(-21deg) translate(22px, 24px)",
              }
            : {
                width: 56,
                height: 9,
                transform: "rotate(-24deg) translate(5px, 5px)",
              }
        }
      >
        {/* Arrowhead */}
        <span
          className="absolute top-0"
          style={
            isLarge
              ? {
                  right: -28,
                  top: -22,
                  width: 0,
                  height: 0,
                  borderLeft: "58px solid #00e5a8",
                  borderTop: "39px solid transparent",
                  borderBottom: "39px solid transparent",
                }
              : {
                  right: -7,
                  top: -6,
                  width: 0,
                  height: 0,
                  borderLeft: "15px solid #00e5a8",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                }
          }
        />
      </div>

      {/* Glow floor — large only */}
      {isLarge && (
        <>
          <div
            className="absolute bottom-[34px] h-[34px] w-[460px] rounded-full opacity-75"
            style={{
              background:
                "radial-gradient(circle, rgba(0,194,255,0.72), transparent 70%)",
              filter: "blur(12px)",
            }}
          />
        </>
      )}
    </div>
  );
}
