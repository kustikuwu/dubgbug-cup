<<<<<<< HEAD
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
=======
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
>>>>>>> 122a8781d24b66fa3ca694b4dc0f231c8e52fc28
