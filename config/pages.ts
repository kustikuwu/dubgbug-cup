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
  {
    match: (path: string) => path === "/participants",
    snow: true,
    count: 80,
  },
  {
    match: (path: string) => path.startsWith("/participants/"),
    snow: true,
    count: 70,
  },
  {
    match: (path: string) => path === "/people",
    snow: true,
    count: 80,
  },
  {
    match: (path: string) => path === "/server",
    snow: true,
    count: 70,
  },
  {
    match: (path: string) => path === "/squad",
    snow: true,
    count: 80,
  },
  {
    match: (path: string) => path.startsWith("/squad/"),
    snow: true,
    count: 70,
  },
] as const;
