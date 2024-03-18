import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestrauntCardComponent, { withPromoteLabel } from "../RestrauntCard";
import MOCK_DATA from "./mocks/resCardMock.json";

describe("Restaurant card page test case", () => {
  it("Should load restuarant component with props", () => {
    render(<RestrauntCardComponent resData={MOCK_DATA} />);

    const resName = screen.getByText("Chinese Wok");

    expect(resName).toBeInTheDocument();
  });

  it("Should load restuarant component with promoted label", () => {
    const RestrauntCardPromoted = withPromoteLabel(RestrauntCardComponent);
    render(<RestrauntCardPromoted resData={MOCK_DATA} />);

    const resName = screen.getByText("Promoted");

    expect(resName).toBeInTheDocument();
  });
});
