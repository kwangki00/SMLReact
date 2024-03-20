import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import React from "react";

const Samplepage2 = () => {
  return (
    <div className="page-content">
      <div className="card">
        <div className="flex justify-content-between align-items-center">
          <div className="formgroup-inline gap-5">
            <div>
              <label htmlFor="buttondisplay" className="label1_s">
                접수일자
              </label>
              <Calendar id="buttondisplay" showIcon placeholder="접수일자" />
            </div>

            <div>
              <label htmlFor="1" className="label1_s">
                접수번호
              </label>
              <InputText id="1" type="text" placeholder="접수번호" />
            </div>
            <Button label="Search" icon="pi pi-check"></Button>
          </div>
          <div>
            <Button label="최종제출" icon="pi pi-cloud-upload"></Button>
          </div>
        </div>
      </div>
      <div>
        <h1>sdf</h1>
      </div>
    </div>
  );
};

export default Samplepage2;
