import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SmurfForm from "./SmurfForm";

describe("Tests SmurfForm", () => {
  test("App renders without errors", () => {
    render(<SmurfForm />);
  });

  test("user can fill out and submit form", async () => {
    //Arrange
    render(<SmurfForm />);

    //Act
    const nameInput = screen.getByLabelText(/Name/i);
    const ageInput = screen.getByLabelText(/Age/i);
    const heightInput = screen.getByLabelText(/Height/i);
    const button = screen.getByRole("button", { name: /Submit Smurf/i });

    fireEvent.change(nameInput, {
      target: { name: "name", value: "Betty" }
    });
    fireEvent.change(ageInput, { target: { name: "age", value: "13" } });
    fireEvent.change(heightInput, {
      target: { name: "height", value: "5cm" }
    });

    fireEvent.click(button);

  });
});
