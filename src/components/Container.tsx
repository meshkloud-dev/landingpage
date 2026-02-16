import React, { ForwardedRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = (
  { children, className, ...props }: Props,
  forwardedRef: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      ref={forwardedRef}
      className={cn(
        "mx-auto w-full max-w-378 px-4 md:px-10 lg:px-59",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default forwardRef<HTMLDivElement, Props>(Container);
