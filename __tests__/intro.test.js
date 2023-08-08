import { render, screen} from "@testing-library/react";
import Intro from "@/components/Intro";
import "@testing-library/jest-dom";
import "intersection-observer";
import { act } from "react-dom/test-utils";

describe("Intro component", () => {

  it("displays the text", async () => {
    render(<Intro />);

    const displayText = await screen.findByText("Web Developer.");

    expect(displayText).toBeInTheDocument();
  });
});
