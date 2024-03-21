import React, { useContext } from "react";
import { Button } from "primereact/button";

const AppFooter = () => {
  return (
    <div className="layout-footer">
      <div className=" justify-content-end flex gap-2 col-12 md:col-12">
        <div className="col-12 md:col-1 p-fluid">
          <Button
            label="최종제출"
            icon="pi pi-cloud-upload"
            severity="secondary"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
