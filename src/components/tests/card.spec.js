import { render, screen } from "@testing-library/react";
import App from "../../App";
import ImageCard from "../ImageCard";
import "@testing-library/jest-dom";

describe("ImageCard", () => {
  it("should render correctly", () => {
    const image = new App();
    render(<ImageCard image={image} />);

    expect(screen.getByText("Downloads")).toBeInTheDocument();
  });
});
