"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material";
import { themeDark, themeLight } from "@/lib/theme";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

export function Providers({ children }: Props) {
  const [themaSelecionado, setThemaSelecionado] = useState(themeDark);

  const toggleDark = () => setThemaSelecionado(themeDark);
  const toggleLight = () => setThemaSelecionado(themeLight);
  return (
    <>
      <ThemeProvider theme={themaSelecionado}>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </>
  );
}
