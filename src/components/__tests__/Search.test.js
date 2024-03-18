import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "./mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../utils/useBiryaniList", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue([]),
}));

describe("Body test case", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
  it("Should render Body component with Search", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const cards = screen.getAllByTestId("restraunt-card");
    expect(cards.length).toBe(10);

    const searchBtn = screen.getByRole("button", { name: "search" });
    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("restraunt-card");
    expect(cardsAfterSearch.length).toBe(2);
  });

  it("should filter top rated restaurnant", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const cards = screen.getAllByTestId("restraunt-card");
    expect(cards.length).toBe(10);

    const topRatedRestaurant = screen.getByRole("button", {
      name: "Top Rated restraunt",
    });
    fireEvent.click(topRatedRestaurant);

    const cardsAfterTopRatedFilter = screen.getAllByTestId("restraunt-card");
    expect(cardsAfterTopRatedFilter.length).toBe(9);
  });
});
