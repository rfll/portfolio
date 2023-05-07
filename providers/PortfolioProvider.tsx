// "use client";

import { createContext, useState } from "react";

export type CustomProps = {
  clickProject : (projectKeys: any) => void,
};

const initialState: CustomProps = {
  clickProject : () => {},
}; 

export const portfolioContext = createContext(initialState);

type Props = {
  children: React.ReactNode;
};

export default function PortfolioProvider({ children }: Props) {

  const clickProject = function (projectKeys: any) {
    !projectKeys.open ? (projectKeys.open = true) : (projectKeys.open = false);
  };

  const portfolioProps = {
    clickProject
  };

  return (
    <portfolioContext.Provider value={portfolioProps}>
      {children}
    </portfolioContext.Provider>
  );
}