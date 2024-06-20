import { NavLink as NLink } from "react-router-dom";

export const NavLink = () => {
  const linkStyle =
    "w-full text-center transition ease-in duration-500 hover:font-bold";

  const activeLinkStyle =
    "w-full text-center transition ease-in duration-500 font-bold underline";

  return (
    <div className="w-60 flex justify-center items-center">
      <NLink
        to="/"
        className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Home
      </NLink>
      <NLink
        to="/paper-reviews"
        className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Paper Reviews
      </NLink>
    </div>
  );
};
