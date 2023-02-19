import { Menu } from '@headlessui/react'
import { ReactComponent as ArrowDown } from "../assets/icon-arrow-down.svg";
import { useEffect, useState } from "react";

export function Dropdown() {

  const fonts = [
    { label: 'Serif', value: 'serif' },
    { label: 'Sans Serif', value: 'sans-serif' },
    { label: 'Mono', value: 'mono' },
  ]

  const handleFontChange = (event) => {
    const fontValue = event.target.dataset.font;
    document.documentElement.setAttribute("data-font", fontValue);
    localStorage.setItem("font", fontValue);
  };

  const checkLocalStorageSetState = () => {
    let font = localStorage.getItem("font");

    switch (font) {
      case 'serif':
        document.documentElement.setAttribute("data-font", "serif");
      break;

      case 'sans-serif':
        document.documentElement.setAttribute("data-font", "sans-serif");
      break;

      case 'mono':
        document.documentElement.setAttribute("data-font", "mono");
      break;
    
      default:
        document.documentElement.setAttribute("data-font", "sans-serif");
        break;
    }

  };

  useEffect(() => {
    checkLocalStorageSetState();
  }, []);

  return (
    <Menu>
      <Menu.Button className='selector__btn'><span>{document.documentElement.getAttribute("data-font")}</span><ArrowDown /></Menu.Button>
      <Menu.Items className='selector__items'>
        {fonts.map((font, i) => (
          <Menu.Item
            as="button"
            key={i}
            data-font={font.value}
            className="selector__item"
            onClick={handleFontChange}
          >
            {font.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}