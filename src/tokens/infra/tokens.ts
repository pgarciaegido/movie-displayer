import { Token } from "@/tokens/models/tokens";
import defaultToken  from "@/tokens/data/default.json";
import darkTheme from "@/tokens/data/dark.json";

export const loadTheme = (theme: string) => {
  const root = document.documentElement;
  const selectedTheme = theme === 'LIGHT' ? defaultToken : darkTheme;
  selectedTheme.forEach((token: Token) => {
    root.style.setProperty(token.name, token.value);
  });
};
