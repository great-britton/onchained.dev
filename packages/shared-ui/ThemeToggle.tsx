import { Effect, Option } from "effect";

const currentTheme = localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) 


export const ThemeToggle = Effect.runFork()
  
    
    ),
});
