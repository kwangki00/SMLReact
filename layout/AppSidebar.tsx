import Link from "next/link";
import React, { useContext } from "react";
import AppMenu from "./AppMenu";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import AppMenuProfile from "./AppMenuProfile";

const AppSidebar = () => {
  const { layoutConfig, setLayoutState } = useContext(LayoutContext);

  const anchor = () => {
    setLayoutState((prevLayoutState) => ({
      ...prevLayoutState,
      anchored: !prevLayoutState.anchored,
    }));
  };

  return (
    <React.Fragment>
      <div className="layout-sidebar-top">
        <Link href="/">
          <img
            className="layout-sidebar-logo-slim"
            src={`/layout/images/logo/Labtree_${
              layoutConfig.colorScheme === "light"
                ? "wartermark"
                : "wartermark_dark"
            }.svg`}
            alt="logo"
          />
          <img
            className="layout-sidebar-logo"
            src={`/layout/images/logo/Labtree_${
              layoutConfig.colorScheme === "light" ? "main" : "main_dark"
            }.svg`}
            alt="logo"
          />
        </Link>
        <button
          className="layout-sidebar-anchor p-link"
          type="button"
          onClick={anchor}
        ></button>
      </div>

      <div className="layout-menu-container">
        <MenuProvider>
          <AppMenu />
        </MenuProvider>
      </div>
    </React.Fragment>
  );
};

AppSidebar.displayName = "AppSidebar";

export default AppSidebar;
