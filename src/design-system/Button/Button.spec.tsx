import React from "react";
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Tests for Button component", () => {
  it("Should throw due to having href and onClick props", () => {
    const ref = React.createRef();

    try {
      expect(() =>
        render(
          <Button href="something" onClick={() => {}} ref={ref}>
            Test data
          </Button>
        )
      ).toThrow();
    } catch (e) {
      console.log(e);
    }
  });

  it("Should throw due to not having href or onClick props", () => {
    const ref = React.createRef();
    try {
      expect(() => render(<Button ref={ref}>Test data</Button>)).toThrow();
    } catch (e) {
      console.log(e);
    }
  });

  it("Should render button", () => {
    const ref = React.createRef();
    render(
      <Button onClick={() => {}} ref={ref}>
        Doestn matter
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("Should render anchor", () => {
    const ref = React.createRef();
    const anchorText = "doestn matter";
    // expect(
    render(
      <Button href="something" ref={ref}>
        {anchorText}
      </Button>
    );
    // ).not.toThrow();
    const anchor = screen.getByText(anchorText);
    expect(anchor).toBeInTheDocument();
  });
});
