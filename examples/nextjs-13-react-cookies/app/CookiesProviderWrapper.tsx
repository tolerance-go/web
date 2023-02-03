"use client";

import { PropsWithChildren } from "react";
import { Cookies, CookiesProvider } from "react-cookie";

export const CookiesProviderWrapper = (
  props: PropsWithChildren<{ cookie: string | null }>
) => {
  const cookies = new Cookies(props.cookie);
  return <CookiesProvider cookies={cookies}>{props.children}</CookiesProvider>;
};
