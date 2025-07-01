"use client";

import { cn } from "@/shared/utils";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export function HydrationLoader({ children }: Props) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <div
        aria-label="Loading..."
        className="fixed inset-0 bg-background flex justify-center items-center z-50"
      >
        <div
          aria-label="Loading pulser"
          className={cn(
            "w-6 h-6 rounded-full animate-pulseGlow",
            "bg-green-600 dark:bg-white shadow-[0_0_10px_2px_rgba(59,130,246,0.6)] dark:shadow-[0_0_10px_2px_rgba(255,255,253,0.6)] "
          )}
        />
      </div>
    );
  }

  return <>{children}</>;
}
