export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-orange" : "text-orange-ink"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-slate" : "text-navy/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
