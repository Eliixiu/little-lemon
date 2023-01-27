import { useNavigate } from "react-router-dom";
import React from "react";

export function BookingForm() {
  const navigate = useNavigate();

  const [availableTimes, setAvailableTimes] = React.useState(
    initializeTimes(12, 22)
  );
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [numberOfGuests, setNumberOfGuests] = React.useState("");
  const [occasion, setOccasion] = React.useState("");

  React.useEffect(() => {
    if (!date) return;
    const selected = new Date(date);
    if (isWeekend(selected)) {
      setAvailableTimes(initializeTimes(10, 24));
    } else {
      setAvailableTimes(initializeTimes(12, 22));
    }
  }, [date]);

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
        {availableTimes.map((time) => (
          <option key={time}>{time}:00</option>
        ))}
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

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function initializeTimes(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
