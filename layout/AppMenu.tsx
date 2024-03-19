import AppSubMenu from "./AppSubMenu";
import type { MenuModel } from "@/types";

const AppMenu = () => {
  const model: MenuModel[] = [
    {
      label: "기준정보",
      icon: "pi pi-info-circle",
      items: [
        {
          label: "검사기준코드 관리",
          items: [
            {
              label: "검사기준코드",
              to: "",
            },
            {
              label: "검시기준코드(Detail)",
              to: "",
            },
            {
              label: "기타코드관리",
              to: "",
            },
          ],
        },
        {
          label: "검사항목관리",
          to: "",
        },
        {
          label: "암상시험 RT,CV,CRR관리",
          to: "",
        },
        {
          label: "바코드범위관리",
          to: "",
        },
      ],
    },
    {
      label: "접수관리",
      icon: "pi pi-clone",
      items: [
        {
          label: "의뢰지접수",
          to: "/samplepage1",
        },
        {
          label: "OCS접수 및 결과확인",
          to: "",
        },
        {
          label: "바코드관리",
          to: "",
        },
        {
          label: "접수번호 할당",
          to: "",
        },
      ],
    },
    {
      label: "결과관리",
      icon: "pi pi-book",
    },
    {
      label: "종합검진",
      icon: "pi pi-calendar-plus",
    },
    {
      label: "외주관리",
      icon: "pi pi-check-square",
    },
    {
      label: "소모품관리",
      icon: "pi pi-qrcode",
    },
    {
      label: "매수관리",
      icon: "pi pi-money-bill",
    },
    {
      label: "조회관리",
      icon: "pi pi-search",
    },
    {
      label: "통계관리",
      icon: "pi pi-chart-line",
    },
    {
      label: "재외주병리",
      icon: "pi pi-credit-card",
    },
  ];

  return <AppSubMenu model={model} />;
};

export default AppMenu;
