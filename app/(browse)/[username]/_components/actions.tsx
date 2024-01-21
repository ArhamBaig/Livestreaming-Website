"use client";

import { onFollow } from "@/Actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

type Props = {
  isFollowing: boolean;
};

export const Actions = ({ isFollowing }: Props) => {
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      onFollow("123");
    });
  };

  return (
    <Button
      disabled={isFollowing || isPending}
      onClick={onClick}
      variant={"primary"}
    >
      Follow
    </Button>
  );
};
