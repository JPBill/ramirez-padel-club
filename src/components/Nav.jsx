import { useState } from 'react';
import { menuItems } from '../constants/data';
import { Link } from 'react-router-dom';
import styles from '../style';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.boxWidth} relative`}>
      <nav className="absolute left-1/2 top-[20px] z-50 flex px-6 h-[80px] w-[90%] translate-x-[-50%] items-center justify-between rounded-[13px] bg-transparent sm:px-16">
        <Link to="/">
          <img
            src="/logo-2.webp"
            className="h-16 w-16 sm:h-20 sm:w-20"
            alt="Ramirez Padel Club"
          />
        </Link>

        <div
          className="block cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>

        <ul className={open ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={() => setOpen(!open)}
                  className={`text-black bg-transparent uppercase text-lg transition-colors md:text-primary-white ${item.cName}`}
                  to={`${item.url}`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
