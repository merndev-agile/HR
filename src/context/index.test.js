import React from "react";
import { render, screen } from "@testing-library/react";
import {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
} from "./index";
import App from "../App";

describe("MaterialUIController", () => {
  test("renders without error", () => {
    render(
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    );

    // Assert that the component renders without throwing an error
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });

  test("useMaterialUIController returns context value", () => {
    const TestComponent = () => {
      const contextValue = useMaterialUIController();
      return <div data-testid="context-value">{JSON.stringify(contextValue)}</div>;
    };

    render(
      <MaterialUIControllerProvider>
        <TestComponent />
      </MaterialUIControllerProvider>
    );

    // Assert that the context value is rendered correctly
    expect(screen.getByTestId("context-value")).toHaveTextContent(
      JSON.stringify({
        miniSidenav: false,
        transparentSidenav: false,
        whiteSidenav: false,
        sidenavColor: "info",
        transparentNavbar: true,
        fixedNavbar: true,
        openConfigurator: false,
        direction: "ltr",
        layout: "dashboard",
        darkMode: false,
      })
    );
  });

  // Add more test cases for each exported function if needed
});
