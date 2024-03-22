import { Metadata } from "next";
import Layout from "../../layout/layout";
import "../../styles/custom/_component.scss";
import "../../styles/custom/_style.scss";
import "../style.css";
interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "삼광의료재단 영업마케팅 시스템(SMIS)",
  description: "삼광의료재단 영업마케팅 시스템(SMIS)",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "삼광의료재단 영업마케팅 시스템(SMIS)",
    url: "",
    description: "삼광의료재단 영업마케팅 시스템(SMIS)",
    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <Layout>{children}</Layout>;
}
