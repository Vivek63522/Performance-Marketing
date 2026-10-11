type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      <div className={`flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}>
        <div className="w-2 h-2 bg-brand-base rounded-full" />
        <span className={`text-sm font-bold uppercase tracking-wider ${light ? "text-brand-base" : "text-brand-base"}`}>
          {eyebrow}
        </span>
        <div className="w-8 h-[2px] bg-brand-base" />
      </div>
      
      <h2 className={`text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight mb-6 ${light ? "text-white" : "text-brand-text-dark"}`}>
        {title}
      </h2>
      
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-brand-text-gray" : "text-brand-text"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
