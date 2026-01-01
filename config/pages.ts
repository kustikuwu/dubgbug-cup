export const pageEffects = [
  {
    match: (path: string) => path === "/",
    snow: true,
    count: 60,
  },
  {
    match: (path: string) => path === "/tournaments",
    snow: true,
    count: 90,
  },
  {
    match: (path: string) => path.startsWith("/tournaments/"),
    snow: true,
    count: 70,
  },
  {
    match: (path: string) => path === "/teams",
    snow: true,
    count: 80,
  },
] as const;
