import { InputText } from "primereact/inputtext";
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { LayoutContext } from "./context/layoutcontext";
import type { AppTopbarRef } from "@/types";

import Link from "next/link";
import { MegaMenu } from "primereact/megamenu";
import { StyleClass } from "primereact/styleclass";
import { useRouter } from "next/navigation";

import { Ripple } from "primereact/ripple";

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { onMenuToggle, showRightSidebar, onTopbarMenuToggle } =
    useContext(LayoutContext);
  const router = useRouter();
  const menubuttonRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const { layoutConfig } = useContext(LayoutContext);
  const bellRef = useRef(null);
  const avatarRef = useRef(null);
  const [title, Settitle] = useState("의뢰지접수");
  const onMenuButtonClick = () => {
    onMenuToggle();
  };

  const onRightMenuButtonClick = () => {
    showRightSidebar();
  };

  const onMobileTopbarMenuButtonClick = () => {
    onTopbarMenuToggle();
  };

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
  }));

  const model = [
    {
      label: "즐겨찾기1",
    },
    {
      label: "즐겨찾기2",
    },
    {
      label: "즐겨찾기3",
    },
    {
      label: "즐겨찾기4",
    },
    {
      label: "즐겨찾기5",
    },
    {
      label: "전체메뉴",
      icon: "pi pi-fw pi-list",
      items: [
        [
          {
            label: "기준정보",
            items: [
              {
                label: "검사기준코드 관리",
                items: [
                  {
                    label: "검사항목관리",
                  },
                ],
              },
              {
                label: "검사항목관리",
              },
            ],
          },
        ],
        [
          {
            label: "접수관리",
            items: [
              {
                label: "바코드관리",
              },
              {
                label: "접수번호할당",
              },
              {
                label: "수진자등록현황",
              },
              {
                label: "병원코드 수정",
              },
              {
                label: "병원코드 일괄수정",
              },
            ],
          },
        ],
        [
          {
            label: "결과관리",
            items: [
              {
                label: "결과조회(공통)",
              },
              {
                label: "결과등록(ID)",
              },
              {
                label: "결과등록(공통)",
              },
              {
                label: "결과등록공통(IT Test)",
              },
              {
                label: "조직병리결과",
              },
            ],
          },
        ],
      ],
    },
  ];

  return (
    <div className="layout-topbar">
      <div className="layout-topbar-start">
        <Link className="layout-topbar-logo" href="/">
          <img
            className="layout-topbar-logo-slim"
            src={`/layout/images/logo/Labtree_${
              layoutConfig.colorScheme === "light" ? "small" : "small_dark"
            }.svg`}
            alt="logo"
          />
          <img
            className="layout-topbar-logo-full"
            src={`/layout/images/logo/Labtree_${
              layoutConfig.colorScheme === "light" ? "main" : "main_dark"
            }.svg`}
            alt="logo"
          />
        </Link>

        <a
          ref={menubuttonRef}
          className="p-ripple layout-menu-button"
          onClick={onMenuButtonClick}
        >
          <i className="pi pi-chevron-right"></i>
          <Ripple />
        </a>

        <a
          ref={mobileButtonRef}
          className="p-ripple layout-topbar-mobile-button"
          onClick={onMobileTopbarMenuButtonClick}
        >
          <i className="pi pi-ellipsis-v"></i>
          <Ripple />
        </a>
      </div>

      <div className="layout-topbar-end">
        <div className="layout-topbar-actions-start flex">
          {/*헤더 현재페이지 타이틀*/}
          <div className="layout-topbar-title">
            <div>
              <i className="pi pi-clone"></i>
            </div>
            <h2>{title}</h2>
            <a className="p-ripple">
              <i className="pi pi-star-fill"></i>
            </a>
          </div>
          {/* 가로 즐겨찾기 */}
          <MegaMenu model={model} className="layout-megamenu" />
        </div>

        {/* 검색영역및사용사설정영역 */}
        <div className="layout-topbar-actions-end">
          <ul className="layout-topbar-items">
            <li className="layout-topbar-search">
              <span className="p-input-icon-right">
                <InputText type="text" placeholder="Search" />
                <i className="pi pi-search" />
              </span>
            </li>
            <li>
              <StyleClass
                nodeRef={bellRef}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="px-scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="px-fadeout"
                hideOnOutsideClick
              >
                <a className="p-ripple" ref={bellRef}>
                  <i className="pi pi-bell"></i>
                  <span className="note-num">15</span>
                  <Ripple />
                </a>
              </StyleClass>
              <div className="hidden">
                <ul className="list-none p-0 m-0 max-h-30rem overflow-y-scroll">
                  <li className="px-3 py-1">
                    <span>
                      메세지 : <b>15</b>개의 새로운 메세지
                    </span>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="p-3">
                    <div className="flex align-items-center">
                      <img src="/layout/images/avatar.png" />
                      <div className="flex flex-column ml-3 flex-1">
                        <div className="flex align-items-center justify-content-between mb-1">
                          <span className="font-bold">고촌분소</span>
                          <small>20240314-135828</small>
                        </div>
                        <span className="text-sm line-height-3">
                          안녕하세요. 3월 8일자 70242 결과 이미지 재전송
                          부탁드립니다.
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <StyleClass
                nodeRef={avatarRef}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="px-scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="px-fadeout"
                hideOnOutsideClick
              >
                <a className="p-ripple" ref={avatarRef}>
                  <img
                    src="/layout/images/avatar.png"
                    alt="avatar"
                    className="w-2rem h-2rem"
                  />
                  <Ripple />
                </a>
              </StyleClass>
              <div className="hidden">
                <ul className="list-none p-0 m-0">
                  <li>
                    <a className="p-ripple cursor-pointer flex align-items-center py-2 hover:surface-hover transition-duration-150 transition-all px-3 py-2">
                      <i className="pi pi-cog mr-2"></i>
                      <span>환경설정</span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple cursor-pointer flex align-items-center py-2 hover:surface-hover transition-duration-150 transition-all px-3 py-2">
                      <i className="pi pi-power-off mr-2"></i>
                      <span>로그아웃</span>
                      <Ripple />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a onClick={onRightMenuButtonClick} className="p-ripple">
                <i className="pi pi-star-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;
