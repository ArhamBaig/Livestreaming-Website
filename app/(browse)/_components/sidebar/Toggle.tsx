"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

type Props = {};

const Toggle = (props: Props) => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  
  return (<>
    {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
            <p className="font-semibold text-primary">
                For you
            </p>
            <Button className="h-auto p-2 ml-auto" variant="ghost" onClick={onCollapse}>
                <ArrowLeftFromLine />
            </Button>
        </div>
    )}
    {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
            <Button className="p-2 h-auto" variant={"ghost"} onClick={onExpand}>
                <ArrowRightFromLine />
            </Button>
        </div>
    )}
  </>);
};

export default Toggle;
