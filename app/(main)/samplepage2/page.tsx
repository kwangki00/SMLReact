"use client";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { TabPanel, TabView } from "primereact/tabview";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../../service/ProductService";
import { Toolbar } from "primereact/toolbar";
import { CustomerService } from "@/app/service/CustomerService";
import AppFooter from "@/layout/AppFooter";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import "./style.scss";
const Samplepage2 = () => {
  const [switchValue, setSwitchValue] = useState(false); //switch
  const [activeIndex, setActiveIndex] = useState([0, 1] as any); //accodian state
  const [radioValue, setRadioValue] = useState("man"); //성별 라디오
  const [radioValue2, setRadioValue2] = useState("양력"); //음력,양력라디오
  const [datetime24h, setDateTime24h] = useState(null as any);
  const [time, setTime] = useState(null);

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[1].value as any);
  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data as any));
  }, []);

  //툴바 템플릿
  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap column-gap-2 align-items-center">
        {/* 툴바왼쪽영역 */}
        <div className="flex gap-2">
          <div className="label-rec"></div>
          <h5>검사항목</h5>
          <p>총20건/4건 선택</p>
        </div>
      </div>
    );
  };
  const rightToolbarTemplate = () => {
    return (
      <>
        {/* 툴바오른쪽영역 */}
        <div className="field grid mb-0 column-gap-2 px-2 align-items-center md:justify-content-end">
          <label className="label">검사조회</label>
          <div className="col-12 md:col-5 p-0">
            <InputText type="text" placeholder="명칭코드(F8)" />
          </div>
          <div className="col-12 md:col-4 p-0">
            <Button outlined label="검사항목등록(F9)" />
          </div>
        </div>
      </>
    );
  };
  const leftToolbarTemplate2 = () => {
    return (
      <div className="flex flex-wrap column-gap-2 align-items-center">
        {/* 툴바왼쪽영역 */}
        <div className="flex gap-2">
          <div className="label-rec"></div>
          <h5>History</h5>
          <p>총20건/4건 선택</p>
        </div>
      </div>
    );
  };
  const rightToolbarTemplate2 = () => {
    return (
      <>
        {/* 툴바오른쪽영역 */}
        <div className="field grid mb-0 column-gap-2 px-2 align-items-center md:justify-content-end">
          <label className="label">검사조회</label>
          <div className="col-12 md:col-8 p-0">
            <InputText type="text" placeholder="명칭코드(F8)" />
          </div>
        </div>
      </>
    );
  };

  //checkbox
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    let selectedValue = [...checkboxValue];
    if (e.checked) selectedValue.push(e.value);
    else selectedValue.splice(selectedValue.indexOf(e.value), 1);

    setCheckboxValue(selectedValue);
  };

  //customers sampledata
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    CustomerService.getCustomersMedium().then((data) =>
      setCustomers(data as any)
    );
  }, []);

  return (
    <div className="page-content_notfooter">
      {/* 조회조건 */}
      <div className="card p-fluid">
        <div className="field grid mb-0">
          <label className="label">접수일자</label>
          <div className="col-12 md:col-2 mobile_field">
            <Calendar
              showIcon
              placeholder="접수일자"
              dateFormat="yy/dd/mm"
              showButtonBar
            />
          </div>
          <label className="label">접수번호</label>
          <div className="col-12 md:col-2 mobile_field">
            <InputText id="1" type="text" placeholder="접수번호" />
          </div>
          <div className="col-12 md:col-1 mobile_field flex gap-2">
            <Button label="검색" icon="pi pi-search"></Button>
            <Button icon="pi pi-refresh" outlined />
          </div>
        </div>
      </div>

      {/*조회 결과 부분 */}
      <div className="grid">
        {/* 좌측영역 */}
        <div className="col-12 md:col-6">
          <div className="card p-fluid  left-card">
            <div className=" h-full">
              <TabView>
                <TabPanel header="기본정보(F1)">
                  <div className="col-12 md:col-12 tab-content-height">
                    <div className="field grid">
                      <label htmlFor="email3" className="label">
                        병원명
                      </label>
                      <div className="col-12 md:col-3 mobile_field">
                        <InputText
                          id="email3"
                          type="text"
                          placeholder="병원코드입력"
                        />
                      </div>
                      <div className="col-12 md:col-3 mobile_field">
                        <Dropdown placeholder="병원선택" />
                      </div>
                      <div className="col-12 md:col-2 mobile_field">
                        <Button outlined label="병원선택" />
                      </div>
                    </div>
                    <div className="field grid">
                      <label className="label">접수구분</label>
                      <div className="col-12 md:col-3 mobile_field">
                        <Dropdown placeholder="접수구분" />
                      </div>
                      <label className="label">검진여부</label>
                      <div className=" pt-2 col-12 md:col-1 mobile_field">
                        <InputSwitch
                          checked={switchValue}
                          onChange={(e) => setSwitchValue(e.value ?? false)}
                        />
                      </div>
                      <label htmlFor="email3" className="label">
                        검진종류
                      </label>
                      <div className="col-12 md:col-3">
                        <Dropdown placeholder="검진종류" />
                      </div>
                    </div>
                    {/* 수진자정보 */}
                    <Accordion
                      multiple
                      activeIndex={activeIndex}
                      onTabChange={(e) => setActiveIndex(e.index)}
                    >
                      <AccordionTab
                        header={
                          <span className="flex align-items-center gap-2 w-full">
                            <Avatar icon="pi pi-user" shape="circle" />
                            <span className="font-bold white-space-nowrap">
                              수진자 정보
                            </span>
                          </span>
                        }
                      >
                        <div>
                          <div className="field grid">
                            <label htmlFor="email3" className="label">
                              수진자명
                            </label>
                            <div className="col-12 md:col-3 mobile_field">
                              <InputText
                                id="email3"
                                type="text"
                                placeholder="수진자명"
                              />
                            </div>
                            <label htmlFor="email3" className="label">
                              차트번호
                            </label>
                            <div className="col-12 md:col-3 mobile_field">
                              <InputText
                                id="email3"
                                type="text"
                                placeholder="차트번호"
                              />
                            </div>

                            <div className="radiobutton-group">
                              <div className="field-radiobutton">
                                <RadioButton
                                  inputId="option1"
                                  name="option"
                                  value="man"
                                  checked={radioValue === "man"}
                                  onChange={(e) => setRadioValue(e.value)}
                                />
                                <label htmlFor="option1">남</label>
                              </div>
                              <div className="field-radiobutton">
                                <RadioButton
                                  inputId="option2"
                                  name="option"
                                  value="woman"
                                  checked={radioValue === "woman"}
                                  onChange={(e) => setRadioValue(e.value)}
                                />
                                <label htmlFor="option2">여</label>
                              </div>
                            </div>
                          </div>
                          <div className="field grid">
                            <label className="label">고유번호</label>
                            <div className="col-12 md:col-3 mobile_field">
                              <InputText
                                id="email3"
                                type="text"
                                placeholder="고유번호"
                              />
                            </div>
                            <label className="label">생년월일</label>
                            <div className="col-12 md:col-3 mobile_field">
                              <Calendar
                                showIcon
                                placeholder="생년월일"
                                dateFormat="yy/dd/mm"
                                showButtonBar
                              />
                            </div>

                            <div className="radiobutton-group">
                              <div className="field-radiobutton">
                                <RadioButton
                                  inputId="option1"
                                  name="option"
                                  value="양력"
                                  checked={radioValue2 === "양력"}
                                  onChange={(e) => setRadioValue2(e.value)}
                                />
                                <label htmlFor="option1">양력</label>
                              </div>
                              <div className="field-radiobutton">
                                <RadioButton
                                  inputId="option2"
                                  name="option"
                                  value="음력"
                                  checked={radioValue2 === "음력"}
                                  onChange={(e) => setRadioValue2(e.value)}
                                />
                                <label htmlFor="option2">음력</label>
                              </div>
                            </div>
                            <label className="label2">50세</label>
                          </div>
                        </div>
                      </AccordionTab>

                      {/* 진료정보 */}
                      <AccordionTab
                        header={
                          <span className="flex align-items-center gap-2 w-full">
                            <Avatar icon="pi pi-user" shape="circle" />
                            <span className="font-bold white-space-nowrap">
                              진료정보
                            </span>
                          </span>
                        }
                      >
                        <div>
                          <div className="field grid">
                            <label htmlFor="email3" className="label">
                              병 동
                            </label>
                            <div className="col-12 md:col-3 mobile_field">
                              <InputText
                                id="email3"
                                type="text"
                                placeholder="병동"
                              />
                            </div>
                            <label htmlFor="email3" className="label">
                              채취일시
                            </label>
                            <div className="col-12 md:col-3 mobile_field">
                              <Calendar
                                showIcon
                                placeholder="채취일시"
                                dateFormat="yy/dd/mm"
                                showButtonBar
                                value={datetime24h}
                                onChange={(e) => setDateTime24h(e.value)}
                                showTime
                                hourFormat="24"
                              />
                            </div>
                          </div>
                          <div className="field grid">
                            <label className="label">진료과목</label>
                            <div className="col-12 md:col-3 mobile_field">
                              <Dropdown placeholder="진료과목" />
                            </div>
                            <label htmlFor="email3" className="label">
                              진료의
                            </label>
                            <div className="col-12 md:col-3 mobile_field">
                              <InputText type="text" placeholder="진료의" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="email3" className="label">
                              기타기록
                            </label>
                            <div className="col-12 md:col-10 mobile_field">
                              <InputText type="text" placeholder="기타기록" />
                            </div>
                          </div>
                        </div>
                      </AccordionTab>

                      {/* 추가정보 */}
                      <AccordionTab
                        header={
                          <span className="flex align-items-center gap-2 w-full">
                            <Avatar icon="pi pi-user" shape="circle" />
                            <span className="font-bold white-space-nowrap">
                              추가정보
                            </span>
                          </span>
                        }
                      >
                        <div>
                          <div className="field grid">
                            <div className="pt-1 col-12 md:col-12 mobile_field">
                              <label className="label mr-2 pl-0">
                                정신지체가족력
                              </label>
                              <InputSwitch
                                className="mr-3"
                                checked={switchValue}
                                onChange={(e) =>
                                  setSwitchValue(e.value ?? false)
                                }
                              />
                              <label className="label mr-2">정상아</label>
                              <InputSwitch
                                className="mr-3"
                                checked={switchValue}
                                onChange={(e) =>
                                  setSwitchValue(e.value ?? false)
                                }
                              />
                              <label className="label mr-2">미숙아</label>
                              <InputSwitch
                                className="mr-3"
                                checked={switchValue}
                                onChange={(e) =>
                                  setSwitchValue(e.value ?? false)
                                }
                              />
                              <label className="label mr-2">금식(유)</label>
                              <InputSwitch
                                className="mr-3"
                                checked={switchValue}
                                onChange={(e) =>
                                  setSwitchValue(e.value ?? false)
                                }
                              />
                            </div>
                          </div>
                          <div className="field grid">
                            <label className="label">진료일자</label>
                            <div className="pt-1 col-12 md:col-3 mobile_field">
                              <Calendar
                                showIcon
                                placeholder="접수일자"
                                dateFormat="yy/dd/mm"
                                showButtonBar
                              />
                            </div>
                            <label className="label">진료구분</label>
                            <div className="col-12 md:col-3 mobile_field">
                              <Dropdown placeholder="진료구분" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="text13" className="label">
                              타탱코드
                            </label>
                            <div className="col-12 md:col-10 mobile_field">
                              <InputText
                                id="text13"
                                type="text"
                                placeholder="타행코드"
                              />
                            </div>
                          </div>
                        </div>
                      </AccordionTab>

                      {/* 국정정보 */}
                      <AccordionTab
                        header={
                          <span className="flex align-items-center gap-2 w-full">
                            <Avatar icon="pi pi-user" shape="circle" />
                            <span className="font-bold white-space-nowrap">
                              국적정보
                            </span>
                          </span>
                        }
                      >
                        <div>
                          <div className="field grid">
                            <label className="label">국 적</label>
                            <div className="pt-1 col-12 md:col-3 mobile_field">
                              <Dropdown placeholder="국적" />
                            </div>
                            <label className="label">보험증번호</label>
                            <div className="col-12 md:col-3 mobile_field">
                              <InputText type="text" placeholder="보험증번호" />
                            </div>
                          </div>
                          <div className="field grid">
                            <label htmlFor="text13" className="label">
                              여권번호
                            </label>
                            <div className="col-12 md:col-5 mobile_field">
                              <InputText type="text" placeholder="여권번호" />
                            </div>
                          </div>
                        </div>
                      </AccordionTab>
                    </Accordion>
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
          </div>
        </div>

        {/* 탭1 우측영역 */}
        <div className="col-12 md:col-6">
          {/* 첫번째그리드영역 */}
          <div className="card p-fluid cardHeight">
            <div className="field">
              <Toolbar
                left={leftToolbarTemplate}
                right={rightToolbarTemplate}
              ></Toolbar>
              <DataTable
                value={products}
                scrollable
                scrollHeight="100%"
                className="datatableHeight mobiledatatableHeight table-border"
                selectionMode={"single"}
                tableStyle={{ minWidth: "50rem" }}
                selection={selectedProducts}
                onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                dataKey="id"
              >
                <Column
                  selectionMode="multiple"
                  headerStyle={{ width: "3rem" }}
                ></Column>
                <Column field="code" header="검사코드"></Column>
                <Column field="name" header="검사항목"></Column>
                <Column field="category" header="검체"></Column>
                <Column field="quantity" header="총뇨량"></Column>
                <Column field="inventoryStatus" header="검사부서"></Column>
              </DataTable>
            </div>
            {/* 그리드 아래쪽 컨트롤들 */}
            <div className="field grid mb-0 column-gap-2 px-2 align-items-center">
              <div className="col-12 md:col-2 p-0 mobile_field mt-3 md:mt-0">
                <Button outlined label="CMT일괄적용" />
              </div>
              <div className="col-12 md:col-2 p-0">
                <Dropdown placeholder="병원선택" />
              </div>
              <div className="flex gap-3">
                <div className="field-checkbox">
                  <Checkbox
                    inputId="checkOption1"
                    name="option"
                    value="v1"
                    checked={checkboxValue.indexOf("v1") !== -1}
                    onChange={onCheckboxChange}
                  />
                  <label htmlFor="checkOption1">코드유지</label>
                </div>
                <div className="field-checkbox">
                  <Checkbox
                    inputId="checkOption2"
                    name="option"
                    value="v2"
                    checked={checkboxValue.indexOf("v2") !== -1}
                    onChange={onCheckboxChange}
                  />
                  <label htmlFor="checkOption2">접수정보유지</label>
                </div>
                <div className="field-checkbox">
                  <Checkbox
                    inputId="checkOption3"
                    name="option"
                    value="v3"
                    checked={checkboxValue.indexOf("v3") !== -1}
                    onChange={onCheckboxChange}
                  />
                  <label htmlFor="checkOption3">검진정보유지</label>
                </div>
              </div>
            </div>
          </div>
          {/* 두번째그리드영역 */}
          <div className="card p-fluid">
            <Toolbar
              left={leftToolbarTemplate2}
              right={rightToolbarTemplate2}
            ></Toolbar>
            <DataTable
              value={customers}
              scrollable
              className="table-border"
              scrollHeight="15rem"
              style={{ minWidth: "50rem" }}
            >
              <Column field="name" header="검사코드"></Column>
              <Column field="country.name" header="검사항목"></Column>
              <Column field="company" header="검사부서"></Column>
            </DataTable>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Samplepage2;
