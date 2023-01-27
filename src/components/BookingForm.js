import { useNavigate } from "react-router-dom";
import React from "react";

export function BookingForm() {
  const navigate = useNavigate();

  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [numberOfGuests, setNumberOfGuests] = React.useState("");
  const [occasion, setOccasion] = React.useState("");

  return (
    <form
      className="booking-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(date, time, numberOfGuests, occasion);
        navigate({
          pathname: "/confirmation",
          search: `?date=${date}&time=${time}&numberOfGuests=${numberOfGuests}&occasion=${occasion}`,
        });
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={(e) => setTime(e.target.value)}>
        <option></option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setNumberOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
        <option></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        disabled={!(date && time && numberOfGuests && occasion)}
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
}
