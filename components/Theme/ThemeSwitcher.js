import { useThemeContext } from "../../hooks/useTheme";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

const ThemeSwitcher = ({ className }) => {

  const [isDark, setIsDark] = useState(false);

  const { setTheme } = useThemeContext();

  const setMode = (mode) => {
    setTheme(mode)
    setIsDark(!isDark)
  }

  return (
    <div className="bg-foreground">
    {isDark ?
      <SunIcon onClick={() => setMode('light')} className="w-5 bg-foreground" />
      :
      <MoonIcon onClick={() => setMode('dark')} className="w-5 bg-foreground" />
    }
    </div>
  );
};

export default ThemeSwitcher;