"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
