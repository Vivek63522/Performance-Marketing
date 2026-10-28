export default function Container({
  children,
  fluid = false,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component
      className={`
        w-full mx-auto px-[15px]
        ${
          fluid
            ? ""
            : "sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1260px]"
        }
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
