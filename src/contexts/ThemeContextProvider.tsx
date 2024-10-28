"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type ThemeType = "dark" | "light" | undefined;

interface ThemeContextType {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

const defaultValue: ThemeContextType = {
  theme: typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(defaultValue.theme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
