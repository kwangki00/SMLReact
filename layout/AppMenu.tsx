import AppSubMenu from "./AppSubMenu";
import type { MenuModel } from "@/types";

const AppMenu = () => {
  const model: MenuModel[] = [
    {
      label: "기준정보",
      icon: "pi pi-home",
      items: [
        {
          label: "검사기준코드 관리",
          icon: "pi pi-fw pi-home",
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
      icon: "pi pi-home",
    },
    {
      label: "결과관리",
      icon: "pi pi-home",
    },
    {
      label: "종합검진",
      icon: "pi pi-home",
    },
    {
      label: "외주관리",
      icon: "pi pi-home",
    },
    {
      label: "소모품관리",
      icon: "pi pi-home",
    },
    {
      label: "매수관리",
      icon: "pi pi-home",
    },
    {
      label: "조회관리",
      icon: "pi pi-home",
    },
    {
      label: "통계관리",
      icon: "pi pi-home",
    },
    {
      label: "재외주병리",
      icon: "pi pi-home",
    },
  ];

  return <AppSubMenu model={model} />;
};

export default AppMenu;
