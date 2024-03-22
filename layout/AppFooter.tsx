import React, { useContext } from "react";
import { Button } from "primereact/button";

const AppFooter = () => {
  return (
    <div className="layout-footer">
      <div></div>
      <div className=" flex-wrap">
        <Button
          label="최종제출"
          icon="pi pi-cloud-upload"
          severity="secondary"
        ></Button>
        <Button
          label="기능버튼2"
          icon="pi pi-cloud-upload"
          severity="secondary"
        ></Button>
        <Button
          label="기능버튼3"
          icon="pi pi-cloud-upload"
          severity="secondary"
        ></Button>
        <Button
          label="기능버튼4"
          icon="pi pi-cloud-upload"
          severity="secondary"
        ></Button>
        <Button
          label="기능버튼5"
          icon="pi pi-cloud-upload"
          severity="secondary"
        ></Button>
      </div>
    </div>
  );
};

export default AppFooter;
