"use client";
import { useSidebar } from "@/store/use-sidebar";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";
type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  const { collapsed } = useSidebar((state) => state);
  const isClient = useIsClient();

  if (!isClient)
    return (
      <aside
        className={cn(
          "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35]"
        )}
      >
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
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
