import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarOverlay from '../ui/overlays/NavbarOverlay';
import { TLink } from '../types/NavbarTypes.ts';
import Bar from '../assets/icons/BarIcon.tsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuClickHandler = (): void => {
    setIsOpen(!isOpen);
  };

  const links: TLink[] = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/reviews',
      title: 'Reviews',
    },
    {
      path: '/about',
      title: 'About Us',
    },
  ];

  return (
    <header className="w-screen h-16 bg-white flex justify-between items-center fixed top-0 left-0 border-gray-300 border-b-2">
      <div className="ml-4">
        <p className="font-bold text-black text-xl">UniPaperReviews</p>
      </div>
      <div className="w-2/5 h-full hidden md:flex justify-betweem items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-black font-bold w-full h-full flex justify-center items-center hover:bg-gray-100 transition duration-300"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="md:hidden mr-4">
        <button onClick={onMenuClickHandler}>
          <Bar />
        </button>

        <NavbarOverlay
          isOpen={isOpen}
          onMenuClickHandler={onMenuClickHandler}
          links={links}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
}
