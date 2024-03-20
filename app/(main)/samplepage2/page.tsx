"use client";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { TabPanel, TabView } from "primereact/tabview";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

const Samplepage2 = () => {
  const [switchValue, setSwitchValue] = useState(false); //switch
  const [activeIndex, setActiveIndex] = useState([0, 1, 2]); //accodian state
  const [radioValue, setRadioValue] = useState(null); //radiobutton
  return (
    <div className="page-content">
      <div className="card">
        <div className="flex justify-content-between align-items-center">
          {/*조건영역 */}
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
            <Button label="검색" icon="pi pi-search"></Button>
          </div>

          {/*버튼영역 */}
          <div>
            <Button
              label="최종제출"
              icon="pi pi-cloud-upload"
              severity="secondary"
            ></Button>
          </div>
        </div>
      </div>

      {/*조회 결과 부분 */}
      <div className="grid">
        <div className="col-12 md:col-6">
          <div className="card p-fluid">
            <div className=" h-full">
              <TabView>
                <TabPanel header="기본정보(F1)">
                  <div className="col-12 md:col-12">
                    <div className="field grid">
                      <label htmlFor="email3" className="label">
                        병원명
                      </label>
                      <div className="col-12 md:col-3">
                        <InputText
                          id="email3"
                          type="text"
                          placeholder="병원코드입력"
                        />
                      </div>
                      <div className="col-12 md:col-3">
                        <Dropdown placeholder="병원선택" />
                      </div>
                      <div className="col-12 md:col-2">
                        <Button outlined label="병원선택" />
                      </div>
                    </div>
                    <div className="field grid">
                      <label className="label">접수구분</label>
                      <div className="col-12 md:col-3">
                        <Dropdown placeholder="접수구분" />
                      </div>
                      <label className="label">검진구분</label>
                      <div className=" pt-2 col-12 md:col-1">
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
                            <div className="col-12 md:col-3">
                              <InputText
                                id="email3"
                                type="text"
                                placeholder="수진자명"
                              />
                            </div>
                            <label htmlFor="email3" className="label">
                              차트번호
                            </label>
                            <div className="col-12 md:col-3">
                              <InputText
                                id="email3"
                                type="text"
                                placeholder="차트번호"
                              />
                            </div>
                            <label htmlFor="email3" className="label">
                              성별
                            </label>
                            <div className="col-12 md:col-2">
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
                                </div>
                                <label htmlFor="option2">여</label>
                              </div>
                            </div>
                          </div>
                          <div className="field grid">
                            <label className="label">접수구분</label>
                            <div className="col-12 md:col-3">
                              <Dropdown placeholder="접수구분" />
                            </div>
                            <label className="label">검진구분</label>
                            <div className=" pt-2 col-12 md:col-1">
                              <InputSwitch
                                checked={switchValue}
                                onChange={(e) =>
                                  setSwitchValue(e.value ?? false)
                                }
                              />
                            </div>

                            <label htmlFor="email3" className="label">
                              검진종류
                            </label>
                            <div className="col-12 md:col-3">
                              <Dropdown placeholder="검진종류" />
                            </div>
                          </div>
                        </div>
                      </AccordionTab>
                      <AccordionTab header="Header II">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Consectetur, adipisci velit, sed quia
                          non numquam eius modi.
                        </p>
                      </AccordionTab>
                      <AccordionTab header="Header III">
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio. Nam libero
                          tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus.
                        </p>
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

        <div className="col-12 md:col-6">
          <div className="card p-fluid">
            <h5>Vertical</h5>
            <div className="field">
              <label htmlFor="name1">Name</label>
              <InputText id="name1" type="text" />
            </div>
            <div className="field">
              <label htmlFor="email1">Email</label>
              <InputText id="email1" type="text" />
            </div>
            <div className="field">
              <label htmlFor="age1">Age</label>
              <InputText id="age1" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samplepage2;
