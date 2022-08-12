import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "urql";
import { BrowserRouter } from "react-router-dom";
import { client } from "../client";
import { theme } from "../theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
