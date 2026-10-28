const bgVariants = {
  default: "bg-white",
  white: "bg-white",
  dark: "bg-brand-secondary text-white",
  gray: "bg-brand-gray text-brand-text-dark",
  secondary: "bg-brand-secondary text-white",
  base: "bg-brand-base text-brand-text-dark",
};

export default function Section({
  children,
  bg = "default",
  variant,
  className = "",
  id,
  as: Component = "section",
}) {
  const chosenBg = variant || bg;
  return (
    <Component
      id={id}
      className={`relative py-[80px] md:py-[100px] lg:py-[120px] ${bgVariants[chosenBg] || bgVariants.default} ${className}`}
    >
      {children}
    </Component>
  );
}
