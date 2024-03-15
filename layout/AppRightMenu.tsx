import { Sidebar } from "primereact/sidebar";
import { useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppProfileSidebar = () => {
  const { layoutState, setLayoutState, layoutConfig } =
    useContext(LayoutContext);

  const onRightMenuHide = () => {
    setLayoutState((prevLayoutState) => ({
      ...prevLayoutState,
      rightMenuActive: false,
    }));
  };

  return (
    <Sidebar
      visible={layoutState.rightMenuActive}
      onHide={onRightMenuHide}
      baseZIndex={1000}
      position="right"
      showCloseIcon={true}
    >
      <div className="p-3">
        <div className="flex flex-column mb-5">
          <h6 className="pb-2 mb-2 border-bottom-1 surface-border">즐겨찾기</h6>
          <div className="flex flex-row flex-wrap gap-1"></div>
        </div>
      </div>
    </Sidebar>
  );
};

export default AppProfileSidebar;
