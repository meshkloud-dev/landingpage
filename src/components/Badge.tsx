import { cn } from "@/lib/utils";
import Zap from "./icons/Zap";
import Square from "./icons/Square";

type Props = {
  children: React.ReactNode;
  variant:
    | "zap-light"
    | "zap-blue"
    | "zap-dark"
    | "square-dark"
    | "square-light"
    | "square-red";
};

const Badge = ({ variant, children }: Props) => {
  const variants = {
    "zap-light": "bg-white-24 text-white",
    "zap-blue": "bg-blue-24 text-blue",
    "zap-dark": "bg-black-24 text-black",
    "square-dark": "bg-black-24 text-black",
    "square-light": "bg-white-24 text-white",
    "square-red": "bg-red-24 text-red",
  };

  return (
    <div className="flex w-fit items-center gap-3 rounded-xs">
      <div className={cn("flex-center size-4 rounded-xs", variants[variant])}>
        {variant.startsWith("zap") ? <Zap /> : <Square />}
      </div>
      <p className="font-geist-mono text-[0.813rem] leading-[1.23em] tracking-[-0.01em] lg:text-[0.938rem] lg:leading-[1.33em]">
        {children}
      </p>
    </div>
  );
};

export default Badge;
