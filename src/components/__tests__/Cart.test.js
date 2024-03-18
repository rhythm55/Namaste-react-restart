import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import RestrauntDetail from "../RestrauntDetail.js";
import appStore from "../../utils/appStore";
import MOCK_DATA from "./mocks/resDetailMock.json";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

describe("Cart flow test", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

  it("should render list of restaurant", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <RestrauntDetail />
        </Provider>
      );
    });

    const accordions = screen.getAllByTestId("res-accordion");
    expect(accordions.length).toBe(5);
  });

  it("should add items from list of restaurant", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestrauntDetail />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordions = screen.getAllByTestId("res-accordion");
    fireEvent.click(accordions[1]);

    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(3);

    const cartInitial = screen.getByText("Cart (0)");
    expect(cartInitial).toBeInTheDocument();

    const addItemButtons = screen.getAllByRole("button", { name: "Add" });
    expect(addItemButtons.length).toBe(3);
    fireEvent.click(addItemButtons[0]);
    fireEvent.click(addItemButtons[2]);

    const cartAfter = screen.getByText("Cart (2)");
    expect(cartAfter).toBeInTheDocument();

    const clearCartButton = screen.getByRole("button", { name: "Clear cart" });
    fireEvent.click(clearCartButton);

    const cartAfterClear = screen.getByText("Cart (0)");
    expect(cartAfterClear).toBeInTheDocument();
  });

  it("should add items in cart component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Cart />
            <RestrauntDetail />
          </Provider>
        </BrowserRouter>
      );
    });

    const cartHeading = screen.getByText("cart");
    expect(cartHeading).toBeInTheDocument();

    const accordions = screen.getAllByTestId("res-accordion");
    fireEvent.click(accordions[1]);
    const addItemButtons = screen.getAllByRole("button", { name: "Add" });

    const menuItemsBefore = screen.getAllByTestId("menu-item");
    expect(menuItemsBefore.length).toBe(3);

    fireEvent.click(addItemButtons[0]);
    fireEvent.click(addItemButtons[2]);

    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(5);
  });
});
