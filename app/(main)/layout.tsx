import { Metadata } from "next";
import Layout from "../../layout/layout";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "삼광의료재단 영업관리시스템",
  description: "삼광의료재단 영업관리 시스템",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "삼광의료재단 영업관리시스템",
    url: "",
    description: "삼광의료재단 영업관리 시스템",
    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <Layout>{children}</Layout>;
}
