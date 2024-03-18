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

const controltest = () => {
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
  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };

  //RadioButton
  const [ingredient, setIngredient] = useState("");

  //Calendar
  const [date, setDate] = useState(null);

  //Multi select
  const [selectedCities, setSelectedCities] = useState(null);

  //Table
  const [products, setProducts] = useState([]);

  // function controltest() {
  return (
    <div>
      <h1>Custom controls panel</h1>
      <div className="grid">
        <div className="col-12 md:col-6">
          <div className="card p-fluid">
            <h5>Input type</h5>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                default
              </label>
              <div className="col-12 md:col-10">
                <InputText id="name3" type="text" />
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Mouseover
              </label>
              <div className="col-12 md:col-10">
                <InputText id="email3" type="text" />
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Focus
              </label>
              <div className="col-12 md:col-10">
                <InputText id="email3" type="text" />
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                ReadOnly
              </label>
              <div className="col-12 md:col-10">
                <InputText id="email3" type="text" readOnly />
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Disabled
              </label>
              <div className="col-12 md:col-10">
                <InputText id="email3" type="text" disabled />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 md:col-6">
          <div className="card p-fluid">
            <h5>Components</h5>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                ChcekBox
              </label>
              <div className="col-12 md:col-9">
                <div className="flex flex-wrap gap-3">
                  <div className="flex align-items-center">
                    <Checkbox
                      inputId="ingredient1"
                      name="pizza"
                      value="Cheese"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("Cheese")}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      Cheese
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <Checkbox
                      inputId="ingredient2"
                      name="pizza"
                      value="Mushroom"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("Mushroom")}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      Mushroom
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <Checkbox
                      inputId="ingredient3"
                      name="pizza"
                      value="Pepper"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("Pepper")}
                    />
                    <label htmlFor="ingredient3" className="ml-2">
                      Pepper
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <Checkbox
                      inputId="ingredient4"
                      name="pizza"
                      value="Onion"
                      onChange={onIngredientsChange}
                      checked={ingredients.includes("Onion")}
                    />
                    <label htmlFor="ingredient4" className="ml-2">
                      Onion
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                RadioButton
              </label>
              <div className="col-12 md:col-9">
                <div className="flex flex-wrap gap-3">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="Cheese"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Cheese"}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      Cheese
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient2"
                      name="pizza"
                      value="Mushroom"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Mushroom"}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      Mushroom
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient3"
                      name="pizza"
                      value="Pepper"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Pepper"}
                    />
                    <label htmlFor="ingredient3" className="ml-2">
                      Pepper
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient4"
                      name="pizza"
                      value="Onion"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Onion"}
                    />
                    <label htmlFor="ingredient4" className="ml-2">
                      Onion
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                Calendar
              </label>
              <div className="col-12 md:col-9">
                <div className="flex flex-wrap gap-3">
                  <Calendar
                    id="buttondisplay"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    showIcon
                  />
                </div>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                Input group
              </label>
              <div className="col-12 md:col-9">
                <div className="p-inputgroup flex-1">
                  <InputText placeholder="Keyword" />
                  <Button icon="pi pi-search" className="p-button-warning" />
                </div>
              </div>
            </div>
            <div className="field grid">
              <label className="col-12 mb-2 md:col-3 md:mb-0">Dropdown</label>
              <div className="col-12 md:col-9">
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full md:w-14rem"
                  showClear
                />
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                Multi select
              </label>
              <div className="col-12 md:col-9">
                <div className="p-inputgroup flex-1">
                  <MultiSelect
                    value={selectedCities}
                    onChange={(e) => setSelectedCities(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select Cities"
                    maxSelectedLabels={3}
                    className="w-full md:w-20rem"
                  />
                </div>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                Filter select
              </label>
              <div className="col-12 md:col-9">
                <div className="p-inputgroup flex-1">
                  <MultiSelect
                    value={selectedCities}
                    onChange={(e) => setSelectedCities(e.value)}
                    options={cities}
                    optionLabel="name"
                    filter
                    placeholder="Select Cities"
                    maxSelectedLabels={3}
                    className="w-full md:w-20rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 md:col-6">
          <div className="card p-fluid">
            <h5>Buttons</h5>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                Type
              </label>
              <div className="col-12 md:col-10">
                <div className="flex justify-content-center gap-3">
                  <Button icon="pi pi-check" />
                  <Button label="Submit" icon="pi pi-check" />
                  <Button label="Submit" icon="pi pi-check" iconPos="right" />
                </div>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                Disabled
              </label>
              <div className="col-12 md:col-10">
                <Button label="Submit" disabled />
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Severity
              </label>
              <div className="col-12 md:col-10">
                <div className="flex justify-content-center gap-3">
                  <Button label="Primary" />
                  <Button label="Secondary" severity="secondary" />
                  <Button label="Success" severity="success" />
                  <Button label="Info" severity="info" />
                  <Button label="Warning" severity="warning" />
                  <Button label="Help" severity="help" />
                  <Button label="Danger" severity="danger" />
                </div>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Rounded
              </label>
              <div className="col-12 md:col-10">
                <div className="flex justify-content-center gap-3">
                  <Button label="Primary" rounded />
                  <Button label="Secondary" severity="secondary" rounded />
                  <Button label="Success" severity="success" rounded />
                  <Button label="Info" severity="info" rounded />
                  <Button label="Warning" severity="warning" rounded />
                  <Button label="Help" severity="help" rounded />
                  <Button label="Danger" severity="danger" rounded />
                </div>
              </div>
            </div>

            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Icon Only
              </label>
              <div className="col-12 md:col-10">
                <div className="flex gap-3">
                  <Button icon="pi pi-check" aria-label="Filter" />
                  <Button
                    icon="pi pi-bookmark"
                    severity="secondary"
                    aria-label="Bookmark"
                  />
                  <Button
                    icon="pi pi-search"
                    severity="success"
                    aria-label="Search"
                  />
                  <Button icon="pi pi-user" severity="info" aria-label="User" />
                  <Button
                    icon="pi pi-bell"
                    severity="warning"
                    aria-label="Notification"
                  />
                  <Button
                    icon="pi pi-heart"
                    severity="help"
                    aria-label="Favorite"
                  />
                  <Button
                    icon="pi pi-times"
                    severity="danger"
                    aria-label="Cancel"
                  />
                </div>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Icon Only Rounded
              </label>
              <div className="col-12 md:col-10">
                <div className="flex gap-3">
                  <Button icon="pi pi-check" rounded aria-label="Filter" />
                  <Button
                    icon="pi pi-bookmark"
                    rounded
                    severity="secondary"
                    aria-label="Bookmark"
                  />
                  <Button
                    icon="pi pi-search"
                    rounded
                    severity="success"
                    aria-label="Search"
                  />
                  <Button
                    icon="pi pi-user"
                    rounded
                    severity="info"
                    aria-label="User"
                  />
                  <Button
                    icon="pi pi-bell"
                    rounded
                    severity="warning"
                    aria-label="Notification"
                  />
                  <Button
                    icon="pi pi-heart"
                    rounded
                    severity="help"
                    aria-label="Favorite"
                  />
                  <Button
                    icon="pi pi-times"
                    rounded
                    severity="danger"
                    aria-label="Cancel"
                  />
                </div>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                Icon Only Rounded wh
              </label>
              <div className="col-12 md:col-10">
                <div className="flex gap-3">
                  <Button icon="pi pi-check" rounded text aria-label="Filter" />
                  <Button
                    icon="pi pi-bookmark"
                    rounded
                    text
                    severity="secondary"
                    aria-label="Bookmark"
                  />
                  <Button
                    icon="pi pi-search"
                    rounded
                    text
                    severity="success"
                    aria-label="Search"
                  />
                  <Button
                    icon="pi pi-user"
                    rounded
                    text
                    severity="info"
                    aria-label="User"
                  />
                  <Button
                    icon="pi pi-bell"
                    rounded
                    text
                    severity="warning"
                    aria-label="Notification"
                  />
                  <Button
                    icon="pi pi-heart"
                    rounded
                    text
                    severity="help"
                    aria-label="Favorite"
                  />
                  <Button
                    icon="pi pi-times"
                    rounded
                    text
                    severity="danger"
                    aria-label="Cancel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 md:col-6">
          <div className="card p-fluid">
            <h5>Others</h5>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                Tab
              </label>
              <div className="col-12 md:col-9">
                <TabView>
                  <TabPanel header="Header I">
                    <p className="m-0">Tab item 1</p>
                  </TabPanel>
                  <TabPanel header="Header II">
                    <p className="m-0">Tab item 2</p>
                  </TabPanel>
                  <TabPanel header="Header III">
                    <p className="m-0">Tab item 2</p>
                  </TabPanel>
                </TabView>
              </div>
            </div>
            <div className="field grid">
              <label htmlFor="name3" className="col-12 mb-2 md:col-3 md:mb-0">
                Data table
              </label>
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

export default controltest;
