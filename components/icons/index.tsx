import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "h-6 w-6";

export function GearIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1" />
    </svg>
  );
}

export function WifiApIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8.5 15.5a5 5 0 0 1 7 0M5.8 12.8a8.6 8.6 0 0 1 12.4 0" />
    </svg>
  );
}

export function CctvDomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <path d="M3 8c3-2.5 15-2.5 18 0" />
      <ellipse cx="12" cy="9" rx="6.5" ry="2.4" />
      <circle cx="12" cy="9" r="1.4" fill="currentColor" stroke="none" />
      <path d="M8 13.5 6.5 19M16 13.5 17.5 19" />
    </svg>
  );
}

export function SmokeDetectorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function HeatDetectorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5c1.3 1.6 1.9 2.8 1.9 3.9a1.9 1.9 0 1 1-3.8 0c0-1.1.6-2.3 1.9-3.9Z" />
    </svg>
  );
}

export function BreakGlassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M8 8l2.5 3M16 8l-2.5 3M9 16l1.5-3M15 16l-1.5-3" />
    </svg>
  );
}

export function FirePanelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8 7.5h8M8 11h8M8 14.5h4" />
      <circle cx="16.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ElectricalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function MechanicalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

export function PlumbingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <path d="M6 4v6a4 4 0 0 0 4 4h0a4 4 0 0 1 4 4v2" />
      <path d="M14 4v4M18 6h-8" />
    </svg>
  );
}

export function FireIcon(props: IconProps) {
  return <BreakGlassIcon {...props} />;
}

export function CctvIcon(props: IconProps) {
  return <CctvDomeIcon {...props} />;
}

export function SmartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <rect x="4" y="3" width="11" height="18" rx="1.5" />
      <circle cx="9.5" cy="19.2" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="18" cy="9" r="2.5" />
      <path d="M18 3v2.2M18 14.8V17M22 9h-2.2M14.2 9H12" />
    </svg>
  );
}

export function DrawingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <rect x="3" y="4" width="18" height="14" rx="1" />
      <path d="M3 9h18M8 9v9M15 9v9" />
    </svg>
  );
}

export function WalkthroughIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={base} {...props}>
      <path d="M3 20 9 6l4 8 3-5 5 11Z" />
    </svg>
  );
}

export const SERVICE_ICONS = {
  electrical: ElectricalIcon,
  mechanical: MechanicalIcon,
  plumbing: PlumbingIcon,
  fire: FireIcon,
  cctv: CctvIcon,
  smart: SmartIcon,
  drawings: DrawingsIcon,
  walkthrough: WalkthroughIcon,
} as const;
