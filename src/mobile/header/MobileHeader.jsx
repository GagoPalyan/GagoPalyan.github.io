import { NavLink } from "react-router-dom";
import style from "./MobileHeader.module.css";
import { HOME_PAGE } from "../../utils/URL";

function MobileHeader() {
  return (
    <header className={style.header}>
      <NavLink to={HOME_PAGE}>
        <svg
          width="20.000000"
          height="31.000000"
          viewBox="0 0 20 31"
          fill="none"
        >
          <path
            id="Subtract"
            d="M8.25 1.75C3.69336 1.75 0 8.1106 0 15.957C0 23.8032 3.69336 30.1638 8.25 30.1638C12.8047 30.1638 16.498 23.8032 16.498 15.957C16.498 15.8345 16.498 15.7124 16.4961 15.5908C16.4668 23.1416 12.9902 29.2473 8.70508 29.2473C4.40234 29.2473 0.914062 23.0918 0.914062 15.4985C0.914062 8.03711 4.28125 1.96411 8.48242 1.75562C8.4043 1.75195 8.32617 1.75 8.25 1.75Z"
            clipRule="evenodd"
            fill="#5B5D4B"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
          <path
            id="Subtract"
            d="M8.70508 1.75C4.40234 1.75 0.914062 7.90552 0.914062 15.4985C0.914062 23.0918 4.40234 29.2473 8.70508 29.2473C13.0078 29.2473 16.4961 23.0918 16.4961 15.4985C16.4961 15.4529 16.4961 15.4072 16.4961 15.3616C16.4062 22.5684 13.1465 28.3604 9.13867 28.3604C5.07617 28.3604 1.78125 22.4033 1.78125 15.0552C1.78125 7.83569 4.96094 1.95898 8.92578 1.75537C8.85352 1.75171 8.7793 1.75 8.70508 1.75Z"
            clipRule="evenodd"
            fill="#5B5D4B"
            fillOpacity="0.240000"
            fillRule="evenodd"
          />
          <path
            id="Subtract"
            d="M16.47 14.78C16.43 21.83 13.34 27.52 9.54 27.52C5.72 27.52 2.62 21.75 2.62 14.63C2.62 7.64 5.61 1.95 9.34 1.74C9.27 1.74 9.21 1.74 9.14 1.74C5.09 1.74 1.81 7.7 1.81 15.06C1.81 22.42 5.09 28.38 9.14 28.38C13.19 28.38 16.47 22.41 16.47 15.06C16.47 14.96 16.47 14.87 16.47 14.78Z"
            fill="#5B5D4B"
            fillOpacity="0.140000"
            fillRule="nonzero"
          />
          <path
            id="Subtract"
            d="M3.93164 15.1301C3.8125 9.48145 6.3125 4.84766 9.51172 4.78027C9.57422 4.77905 9.63672 4.77954 9.69727 4.78174C6.74219 4.979 4.46094 9.40723 4.57422 14.7886C4.68945 20.2551 7.23242 24.635 10.2559 24.5713C13.2031 24.5093 15.5176 20.2468 15.5254 14.9678C15.6191 20.5796 13.1289 25.1692 9.94336 25.2361C6.74219 25.3035 4.05078 20.7788 3.93164 15.1301Z"
            clipRule="evenodd"
            fill="#5B5D4B"
            fillOpacity="0.080000"
            fillRule="evenodd"
          />
          <path
            id="Vector 35"
            d="M18.75 15.27C19.61 23.24 15.22 13.57 12.91 7.75C10.61 1.92 7.08 0 7.08 0C10.61 1.77 17.88 7.3 18.75 15.27Z"
            stroke="#D9D9D9"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
          />
          <path
            id="Vector 36"
            d="M18.84 14.98C19.68 22.79 15.4 13.31 13.16 7.59C10.91 1.88 7.47 0 7.47 0C10.91 1.73 18 7.16 18.84 14.98Z"
            stroke="#797B6D"
            strokeOpacity="0.700000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
          />
          <path
            id="Vector 37"
            d="M18.88 14.63C19.73 22.26 15.42 13 13.16 7.42C10.91 1.83 7.45 0 7.45 0C10.91 1.69 18.03 6.99 18.88 14.63Z"
            stroke="#616352"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>
      <button>
        <svg
          width="20.000000"
          height="15.000000"
          viewBox="0 0 20 15"
          fill="none"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            d="M1 1L19 1"
            stroke="#5B5D4B"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinecap="round"
          />
          <path
            d="M1 7.5L19 7.5"
            stroke="#5B5D4B"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinecap="round"
          />
          <path
            d="M1 14L19 14"
            stroke="#5B5D4B"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  );
}

export default MobileHeader;
