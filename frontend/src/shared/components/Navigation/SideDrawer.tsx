import { NavLink } from "./NavLink";
import { Close } from "../../../assets/icons/Close";

type TSideDrawer = {
  onCloseClick: () => void;
};

export const SideDrawer = ({ onCloseClick }: TSideDrawer) => {
  return (
    <div className="w-screen h-screen z-50 bg-white fixed top-0 left-0 flex items-center justify-center">
      <button onClick={onCloseClick}>
        <Close />
      </button>
      <NavLink />
    </div>
  );
};
