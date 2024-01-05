"use client";
import { useSidebar } from "@/store/use-sidebar";
import React from "react";
import { cn } from "@/lib/utils";
type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35]",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
