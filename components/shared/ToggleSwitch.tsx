"use client";

export function ToggleSwitch({
  leftLabel,
  rightLabel,
  checked,
  onChange,
  dark = false,
}: {
  leftLabel: string;
  rightLabel: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  dark?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className={`text-sm font-semibold ${
          !checked ? (dark ? "text-white" : "text-navy-deep") : dark ? "text-slate/65" : "text-navy/65"
        }`}
      >
        {leftLabel}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-14 shrink-0 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
          checked ? "bg-orange" : "bg-navy/20"
        }`}
      >
        <span
          className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
      <span
        className={`text-sm font-semibold ${
          checked ? (dark ? "text-white" : "text-navy-deep") : dark ? "text-slate/65" : "text-navy/65"
        }`}
      >
        {rightLabel}
      </span>
    </div>
  );
}
