import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BorderRadius = "normal" | "full" | "none";

const borderRadius: Record<BorderRadius, string> = {
  full: "rounded-full",
  normal: "rounded-[5px]",
  none: "",
};

type Padding = "normal" | "md" | "lg";

const padding: Record<Padding, string> = {
  normal: "p-2",
  md: "p-3",
  lg: "p-4",
};

type Variant = "filled" | "outlined" | "subtle";

const variantStyle: Record<Variant, string> = {
  filled:
    "text-white bg-main-purple p-2 border border-2 border-transparent outline-2 outline-offset-2 outline-transparent focus:outline-main-purple",
  outlined:
    "text-main-purple border border-main-purple outline-2 outline-offset-2 outline-transparent focus:outline-main-purple",
  subtle: "",
};

const hoverVariantStyle: Record<Variant, string> = {
  filled: "hover:bg-dark-purple border-main-purple",
  outlined: "hover:bg-light-purple",
  subtle: "",
};

type ButtonProps = {
  radius?: BorderRadius;
  p?: Padding;
  icon?: ReactNode;
  variant?: Variant;
} & ComponentProps<"button">;

export function Button({
  children,
  className = "",
  radius = "normal",
  variant = "filled",
  p = "normal",
  icon,
  ...rest
}: ButtonProps) {
  const buttonClass = twMerge(
    variantStyle[variant],
    hoverVariantStyle[variant],
    className,
    variant != "subtle" ? borderRadius[radius] : "",
    variant != "subtle" ? padding[p] : ""
  );
  return (
    <button className={buttonClass} {...rest}>
      {!icon && children}
      {icon && (
        <div className="flex gap-8 items-center">
          {children} {icon}
        </div>
      )}
    </button>
  );
}
