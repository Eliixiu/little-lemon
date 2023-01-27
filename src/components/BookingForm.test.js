import { render, screen } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

test("Renders the BookingForm date picker", () => {
  render(<BookingForm />);
  const datePicker = screen.getByText("Choose date");
  expect(datePicker).toBeInTheDocument();
});
