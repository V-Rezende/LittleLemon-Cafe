
import { render, screen, fireEvent } from "@testing-library/react";
import Reservations from "./Reservation";

// 1. Test rendering of the component
test('renders Reservations component', () => {
  render(<Reservations />);
  const headingElement = screen.getByText(/Reserve a Table:/i);
  expect(headingElement).toBeInTheDocument();
});

// 2. Test form inputs and their state
test('inputs update their state correctly', () => {
  render(<Reservations />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone:/i), { target: { value: '1234567890' } });

  // Check if the input values are set correctly
  expect(screen.getByLabelText(/Name:/i).value).toBe('John');
  expect(screen.getByLabelText(/Email:/i).value).toBe('john@example.com');
  expect(screen.getByLabelText(/Phone:/i).value).toBe('1234567890');
});

// 3. Test form submission
test('submits the form with valid data', () => {
  render(<Reservations />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone:/i), { target: { value: '1234567890' } });

  // Submit the form
  fireEvent.click(screen.getByText(/Book Table/i));

  // Check if the form is submitted and input values are cleared
  const confirmationAlert = screen.getByText(/Reservation Confirmed!/i);
  expect(confirmationAlert).toBeInTheDocument();
  expect(screen.getByLabelText(/Name:/i).value).toBe('');
  expect(screen.getByLabelText(/Email:/i).value).toBe('');
  expect(screen.getByLabelText(/Phone:/i).value).toBe('');
});

// 4. Test form validation
test('shows an alert for invalid name input', () => {
  render(<Reservations />);

  // Simulate user input with an invalid name
  fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Jo' } });

  // Submit the form
  fireEvent.click(screen.getByText(/Book Table/i));

  // Check if the alert is shown
  const alertElement = screen.getByText(/Name must be at least 3 characters/i);
  expect(alertElement).toBeInTheDocument();
});
