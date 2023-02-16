import { useState, useEffect } from 'react';
import { ReactComponent as AppLogo } from '../assets/logo.svg';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';

export function Nav() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitch = (event) => { 
    const switchValue = event.target.checked;   
    setIsDarkMode(switchValue);
    localStorage.setItem('darkMode', switchValue);
  }

  const checkLocalStorageSetState = () => {
    let darkMode = localStorage.getItem('darkMode');
    darkMode = JSON.parse(darkMode)

    if (darkMode) {
      document.querySelector('input[type=checkbox]').checked = true;
    }

    setIsDarkMode(darkMode); 
  }

  useEffect(() => {
    checkLocalStorageSetState()
  }, [])

  return (
    <section className='nav'>
      <div className='nav__logo'>
        <AppLogo />
      </div>

      <div className='nav__actions'>
        <select name="select">
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="mono">Mono</option>
        </select>

        <div className='actions__theme-switch'>
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleSwitch}
            />
            <span className="slider round"></span>
          </label>
          <Moon stroke={isDarkMode ? 'hsl(274, 82%, 60%)' : '#757575'} />
        </div>
      </div>
    </section>
  )
}