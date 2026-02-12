"use client";

import { ReactNode } from "react";
import { HeaderProvider } from "./HeaderProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};

export default Providers;
