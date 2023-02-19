import { useState, useEffect } from "react";
import { ReactComponent as AppLogo } from "../assets/logo.svg";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";

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
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    checkLocalStorageSetState();
  }, []);

  const handleFontChange = (event) => {
    console.log('handleFontChange - event', event)
  }

  return (
    <section className="nav">
      <div className="nav__logo">
        <AppLogo />
      </div>

      <div className="nav__actions">
        {/* <select name="select">
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="mono">Mono</option>
        </select> */}

        <div className="selector">
          <div
            className="select__control"
            role="combobox"
            aria-haspopup="listbox"
            aria-labelledby="select__label"
            aria-controls="font-theme-select__listbox"
            aria-expanded="false"
            tabindex="0"
            onClick={handleFontChange}
          >
            <span>Sans Serif</span>
          </div>

          <div
            role="listbox"
            aria-labelledby="select__label"
            tabIndex="-1"
            className="select__popup"
          >
            <ul>
              <li role="option" className="text--sans-serif" aria-selected="true">
                Sans Serif
              </li>
              <li role="option" className="text--serif">
                Serif
              </li>
              <li role="option" className="text--mono">
                Mono
              </li>
            </ul>
          </div>
        </div>

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
