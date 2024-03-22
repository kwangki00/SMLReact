"use client";

import React, { useState, useEffect, useMemo } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const SamplePage1 = () => {
  //Dropdown
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  //CheckBox
  const [ingredients, setIngredients] = useState([]);

  //RadioButton
  const [ingredient, setIngredient] = useState("");

  //Calendar
  const [date, setDate] = useState(null);

  //Multi select
  const [selectedCities, setSelectedCities] = useState(null);

  //Table
  const [products, setProducts] = useState([]);

  return (
    <div className="grid page-content">
      <div className="col-12 md:col-12">
        <div className="card p-fluid">
          <div className="field grid">
            <label className="col-12 mb-2 md:col-1 md:mb-0 label">
              접수일자
            </label>
            <div className="col-12 md:col-2">
              <Calendar id="buttondisplay" value={date} showIcon />
            </div>
            <label className="col-12 mb-2 md:col-2 md:mb-0 label">
              접수번호
            </label>
            <div className="col-12 md:col-2">
              <InputText id="email3" type="text" />
            </div>
            <div className="col-12 md:col-1">
              <Button label="초기화" icon="pi pi-check" />
            </div>
            <div className="col-12 md:col-1">
              <Button label="등록" icon="pi pi-check" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 md:col-6 content-body">
        <TabView>
          <TabPanel header="기본정보(F1)">
            <div className="col-12 md:col-12">
              <div className="card p-fluid">
                <h5>기본정보</h5>
                <div className="field grid">
                  <label htmlFor="email3" className="mb-2 label">
                    병원
                  </label>
                  <div className="col-12 md:col-3">
                    <InputText id="email3" type="text" />
                  </div>
                  <div className="col-12 md:col-3">
                    <InputText id="email3" type="text" />
                  </div>
                  <div className="col-12 md:col-2">
                    <InputText id="email3" type="text" />
                  </div>
                  <div className="col-12 md:col-2">
                    <Button
                      label="병원선택"
                      icon="pi pi-check"
                      iconPos="right"
                    />
                  </div>
                </div>
                <div className="field grid">
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    접수구분
                  </label>
                  <div className="col-12 md:col-2">
                    <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a City"
                      className="w-full"
                      showClear
                    />
                  </div>
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    검진여부
                  </label>
                  <div className="col-12 md:col-2">
                    <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a City"
                      className="w-full"
                      showClear
                    />
                  </div>
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    검진종류
                  </label>
                  <div className="col-12 md:col-2">
                    <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a City"
                      className="w-full"
                      showClear
                    />
                  </div>
                </div>
                <div className="field grid">
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    접수구분
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    차트번호
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                </div>
                <div className="field grid">
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    고유번호
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    생년월일
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                </div>
                <div className="field grid">
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    나이
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    병동
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                </div>
                <div className="field grid">
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    채취일자
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    채취시간
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                </div>
                <div className="field grid">
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    진료과목
                  </label>
                  <div className="col-12 md:col-5">
                    <InputText id="email3" type="text" />
                  </div>
                  <div className="col-12 md:col-5">
                    <InputText id="email3" type="text" />
                  </div>
                </div>
                <div className="field grid">
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    기타진료
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                  <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                    전문의
                  </label>
                  <div className="col-12 md:col-4">
                    <InputText id="email3" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-fluid">
              <h5>추가정보</h5>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  정신지체가족력
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  정상아/미숙아
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
              </div>

              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  진료구분
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  진료일자
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
              </div>

              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  타행코드
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  금식여부
                </label>
                <div className="col-12 md:col-4">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="Cheese"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Cheese"}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      유
                    </label>
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="Cheese"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Cheese"}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      무
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-fluid">
              <h5>국적정보</h5>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  국적
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  보험증여부
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
              </div>
              <div className="field grid">
                <label className="col-12 mb-2 md:col-2 md:mb-0 label">
                  여권번호
                </label>
                <div className="col-12 md:col-4">
                  <InputText id="email3" type="text" />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="산전태아(F3)">
            <p className="m-0">Tab item 2</p>
          </TabPanel>
          <TabPanel header="대사이상/검진(F4)">
            <p className="m-0">Tab item 2</p>
          </TabPanel>
          <TabPanel header="AMH정보(F11)">
            <p className="m-0">Tab item 2</p>
          </TabPanel>
        </TabView>
      </div>

      <div className="col-6 md:col-6 content-body">
        <div className="col-12 md:col-12">
          <div className="card p-fluid">
            <h5>선택정보</h5>
            <div className="col-12 md:col-9">
              <DataTable
                value={products}
                sortMode="multiple"
                tableStyle={{ minWidth: "50rem" }}
              >
                <Column
                  field="code"
                  header="Code"
                  sortable
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="name"
                  header="Name"
                  sortable
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="category"
                  header="Category"
                  sortable
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  field="quantity"
                  header="Quantity"
                  sortable
                  style={{ width: "25%" }}
                ></Column>
              </DataTable>
            </div>
          </div>

          <div className="col-12 md:col-12">
            <div className="card p-fluid">
              <h5>History</h5>
              <div className="col-12 md:col-9">
                <DataTable
                  value={products}
                  sortMode="multiple"
                  tableStyle={{ minWidth: "50rem" }}
                >
                  <Column
                    field="code"
                    header="Code"
                    sortable
                    style={{ width: "25%" }}
                  ></Column>
                  <Column
                    field="name"
                    header="Name"
                    sortable
                    style={{ width: "25%" }}
                  ></Column>
                  <Column
                    field="category"
                    header="Category"
                    sortable
                    style={{ width: "25%" }}
                  ></Column>
                  <Column
                    field="quantity"
                    header="Quantity"
                    sortable
                    style={{ width: "25%" }}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage1;
