"use client";

import { ThemeProvider } from "next-themes";

function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider enableSystem={true}>{children}</ThemeProvider>;
}

export default Provider;
