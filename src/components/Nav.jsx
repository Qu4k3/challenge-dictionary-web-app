import AppLogo from '../assets/logo.svg';
import Moon from '../assets/icon-moon.svg';
import MoonDark from '../assets/icon-moon-purple.svg';

export function Nav() {

  return (
    <section className='nav'>
      <div className='nav__logo'>
        <img src={AppLogo} alt='Dictionary' />
      </div>

      <div className='nav__actions'>
        <select name="select">
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="mono">Mono</option>
        </select>

        <div className='actions__theme-switch'>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>

          <img src={Moon} alt='Moon' />
        </div>
      </div>
    </section>
  )
}