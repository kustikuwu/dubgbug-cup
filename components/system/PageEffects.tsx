<<<<<<< HEAD
"use client";

import { usePathname } from "next/navigation";
import Snowfall from "@/components/ui/Snowfall";
import { newYearConfig } from "@/config/newYear";
import { pageEffects } from "@/config/pages";

export default function PageEffects() {
  const pathname = usePathname();

  if (!newYearConfig.enabled) return null;

  const effect = pageEffects.find((e) => e.match(pathname));

  if (!effect || !effect.snow) return null;

  return (
    <Snowfall
      count={effect.count ?? newYearConfig.defaultSnowfall.count}
      zIndex={newYearConfig.defaultSnowfall.zIndex}
    />
  );
}
=======
"use client";

import { usePathname } from "next/navigation";
import Snowfall from "@/components/ui/Snowfall";
import { newYearConfig } from "@/config/newYear";
import { pageEffects } from "@/config/pages";

export default function PageEffects() {
  const pathname = usePathname();

  if (!newYearConfig.enabled) return null;

  const effect = pageEffects.find((e) => e.match(pathname));

  if (!effect || !effect.snow) return null;

  return (
    <Snowfall
      count={effect.count ?? newYearConfig.defaultSnowfall.count}
      zIndex={newYearConfig.defaultSnowfall.zIndex}
    />
  );
}
>>>>>>> 122a8781d24b66fa3ca694b4dc0f231c8e52fc28
