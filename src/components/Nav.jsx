import { useState, useEffect } from "react";
import { ReactComponent as AppLogo } from "../assets/logo.svg";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { Dropdown } from './Dropdown';

export function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitch = (event) => {
    const switchValue = event.target.checked;
    setIsDarkMode(switchValue);
    document.documentElement.setAttribute(
      "data-theme",
      switchValue ? "dark" : "light"
    );
    localStorage.setItem("theme", switchValue ? "dark" : "light");
  };

  const checkLocalStorageSetState = () => {
    let theme = localStorage.getItem("theme");
    const switchElement = document.querySelector("input[type=checkbox]");

    if (
      theme == "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      switchElement.checked = true;
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }

    if (theme == "light") {
      switchElement.checked = false;
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    checkLocalStorageSetState();
  }, []);

  return (
    <section className="nav">
      <div className="nav__logo">
        <AppLogo />
      </div>

      <div className="nav__actions">
        <Dropdown />
        <div className="actions__theme-switch">
          <label className="switch">
            <input type="checkbox" onChange={handleSwitch} />
            <span className="slider round"></span>
          </label>
          <Moon stroke={isDarkMode ? "hsl(274, 82%, 60%)" : "#757575"} />
        </div>
      </div>
    </section>
  );
}
