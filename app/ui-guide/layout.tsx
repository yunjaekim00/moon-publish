import React, { ReactNode } from "react";
import Sidebar from "@/components/ui-guide/sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-10">{children}</main>
    </div>
  );
};

export default Layout;
