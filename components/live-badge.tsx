import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const LiveBadge = ({ className }: Props) => {
  return (
    <div
      className={cn(
        className,
        "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide"
      )}
    >
      Live
    </div>
  );
};

export default LiveBadge;
