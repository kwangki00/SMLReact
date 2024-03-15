import React, { useContext } from "react";
import { Button } from "primereact/button";

const AppFooter = () => {
  return (
    <div className="layout-footer">
      <div></div>
      <div className="flex gap-2">
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
      </div>
    </div>
  );
};

export default AppFooter;
