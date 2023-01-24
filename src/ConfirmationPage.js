import { Link, useLocation } from "react-router-dom";
import "./ConfirmationPage.css";
import { Nav } from "./HomePage.js";

export default function ConfirmationPage() {
  const search = useLocation().search;
  const params = new URLSearchParams(search);

  return (
    <div>
      <Nav />
      <div className="confimation-form">
        <h1>Reservation Confirmed</h1>
        <p>
          Thank you for your reservation at Little Lemon. We look forward to
          serving you.
        </p>
        <p>Date: {params.get("date")}</p>
        <p>Time: {params.get("time")}</p>
        <p>Number of guests: {params.get("numberOfGuests")}</p>
        <p>Occasion: {params.get("occasion")}</p>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
}
