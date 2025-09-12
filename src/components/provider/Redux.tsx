"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { FC, PropsWithChildren } from "react";

export const Redux: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
