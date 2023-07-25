import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface IHandleThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  themeObject: any;
}

export const HandleThemeContext = createContext<IHandleThemeContext>(
  {} as IHandleThemeContext
);

type HandleThemeProviderProps = {
  children: ReactNode;
};

export const HandleThemeProvider = ({ children }: HandleThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  useCallback(() => setTheme(theme === "light" ? "dark" : "light"), []);

  const themeObject = theme === "light" ? light : dark;

  return (
    <HandleThemeContext.Provider value={{ theme, themeObject, setTheme }}>
      {children}
    </HandleThemeContext.Provider>
  );
};

export const useHandleTheme = () => {
  const context = useContext(HandleThemeContext);

  if (context === undefined) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }

  return context;
};
