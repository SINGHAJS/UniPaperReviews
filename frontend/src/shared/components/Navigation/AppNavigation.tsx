import { useState } from "react";
import { NavLink } from "./NavLink";
import { AppHeader } from "./AppHeader";
import { Bar } from "../../../assets/icons/Bar";
import { SideDrawer } from "./SideDrawer";

export const AppNavigation = () => {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  const onBarClickHandler = () => {
    setShowMenuOverlay(!showMenuOverlay);
  };

  const onCloseClickHandler = () => {
    setShowMenuOverlay(false);
  };

  return (
    <AppHeader>
      <div className="flex justify-center items-center">
        <div className="hidden md:flex ">
          <NavLink />
        </div>
        <button onClick={onBarClickHandler}>
          <Bar />
        </button>
      </div>
      {showMenuOverlay && <SideDrawer onCloseClick={onCloseClickHandler} />}
    </AppHeader>
  );
};
