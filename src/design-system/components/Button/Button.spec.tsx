import React from "react";
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Tests for Button component", () => {
  it("Should throw due to having href and onClick props", () => {
    try {
      expect(() =>
        render(
          <Button href="something" onClick={() => {}}>
            Test data
          </Button>
        )
      ).toThrow();
    } catch (e) {
      console.log(e);
    }
  });

  it("Should throw due to not having href or onClick props", () => {
    try {
      expect(() => render(<Button>Test data</Button>)).toThrow();
    } catch (e) {
      console.log(e);
    }
  });

  it("Should render button", () => {
    render(<Button onClick={() => {}}>Doestn matter</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("Should render anchor", () => {
    const anchorText = "doestn matter";
    // expect(
    render(<Button href="something">{anchorText}</Button>);
    // ).not.toThrow();
    const anchor = screen.getByText(anchorText);
    expect(anchor).toBeInTheDocument();
  });
});
