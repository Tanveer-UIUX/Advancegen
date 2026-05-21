import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "outline-glow" | "primary";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type AsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = AsButton | AsAnchor;

const VARIANTS = {
  "outline-glow":
    "flex items-center justify-center rounded-[6px] border border-cyan bg-transparent text-white-soft " +
    "shadow-[0_0_14px_rgba(0,194,255,0.25),inset_0_0_14px_rgba(0,194,255,0.06)] " +
    "hover:bg-cyan/10 hover:shadow-[0_0_22px_rgba(0,194,255,0.40),inset_0_0_18px_rgba(0,194,255,0.10)] " +
    "transition-all duration-200",
  primary:
    "flex items-center justify-center rounded-[6px] bg-gradient-to-br from-cyan to-cyan-2 text-navy-900 font-extrabold " +
    "shadow-[0_12px_36px_rgba(0,194,255,0.28)] hover:brightness-110 transition-all duration-200",
};

const SIZES = {
  sm: "h-[50px] px-6 py-0 text-[14px] font-semibold",
  md: "h-[50px] px-6 py-0 text-[15px] font-semibold",
};

export default function Button({
  variant = "outline-glow",
  size = "md",
  className = "",
  children,
  as,
  ...rest
}: ButtonProps) {
  const classes = [VARIANTS[variant], SIZES[size], className].join(" ");

  if (as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
