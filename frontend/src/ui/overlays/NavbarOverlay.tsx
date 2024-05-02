import React from 'react';
import { Link } from 'react-router-dom';
import { TLink } from '../../types/NavbarTypes';
import CloseIcon from '../../assets/icons/CloseIcon';

type TNavBarOverlay = {
  isOpen: boolean;
  onMenuClickHandler: () => void;
  links: TLink[];
  setIsOpen: (isOpen: boolean) => void;
};

export default function NavbarOverlay({
  isOpen,
  onMenuClickHandler,
  links,
  setIsOpen,
}: TNavBarOverlay) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col justify-center items-center z-50">
          <div className="fixed top-0 right-0 mt-4 mr-4 ">
            <button onClick={onMenuClickHandler}>
              <CloseIcon />
            </button>
          </div>
          {links.map((link, index) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={index}
              to={link.path}
              className="text-black font-bold w-full h-12 flex flex-col justify-center items-center hover:bg-gray-100 transition duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
