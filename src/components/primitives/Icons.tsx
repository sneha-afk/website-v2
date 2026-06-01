import React from "react";

export interface IconProps {
  size?: number;
  className?: string;
  padding?: number;
}

const DEFAULT_ICON_SIZE = 16;

const createBaseProps = (size: number) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: size <= 16 ? 1.8 : 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const CopyIcon: React.FC<IconProps> = ({
  size = DEFAULT_ICON_SIZE,
  className,
  padding = 2,
}) => {
  const baseProps = createBaseProps(size);
  const viewBox = `${padding} ${padding} ${24 - padding * 2} ${24 - padding * 2}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      {...baseProps}
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <rect x="4" y="4" width="11" height="11" rx="2" />
    </svg>
  );
};

export const CheckIcon: React.FC<IconProps> = ({
  size = DEFAULT_ICON_SIZE,
  className,
  padding = 3,
}) => {
  const baseProps = createBaseProps(size);
  const viewBox = `${padding} ${8 + padding} ${24 - padding * 2} ${12 - padding}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      {...baseProps}
    >
      <path d="M5 12.5l4 4 10-10" />
    </svg>
  );
};

export const SunIcon: React.FC<IconProps> = ({
  size = DEFAULT_ICON_SIZE,
  className,
  padding = 1,
}) => {
  const baseProps = createBaseProps(size);
  const viewBox = `${padding} ${padding} ${24 - padding * 2} ${24 - padding * 2}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      {...baseProps}
    >
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.5" y1="4.5" x2="6.8" y2="6.8" />
      <line x1="17.2" y1="17.2" x2="19.5" y2="19.5" />
      <line x1="17.2" y1="6.8" x2="19.5" y2="4.5" />
      <line x1="4.5" y1="19.5" x2="6.8" y2="17.2" />
    </svg>
  );
};

export const MoonIcon: React.FC<IconProps> = ({
  size = DEFAULT_ICON_SIZE,
  className,
  padding = 3,
}) => {
  const baseProps = createBaseProps(size);
  const viewBox = `${padding + 3} ${padding} ${24 - padding * 2 - 6} ${24 - padding * 2}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      {...baseProps}
    >
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5 7 7 0 0 0 20.5 14.5z" />
    </svg>
  );
};
