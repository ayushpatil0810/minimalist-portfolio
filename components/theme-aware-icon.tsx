"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeAwareIcon({ 
  iconThemeObjects, 
  alt, 
  className 
}: { 
  iconThemeObjects: { light: string; dark: string };
  alt: string;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Before hydration, render the light icon or a placeholder
  if (!mounted) {
    return (
      <Image
        src={iconThemeObjects.light}
        alt={alt}
        width={14}
        height={14}
        className={className}
      />
    );
  }

  return (
    <Image
      src={resolvedTheme === "dark" ? iconThemeObjects.dark : iconThemeObjects.light}
      alt={alt}
      width={14}
      height={14}
      className={className}
    />
  );
}
