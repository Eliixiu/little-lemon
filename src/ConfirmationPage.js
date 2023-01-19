import "./ConfirmationPage.css";

export default function ConfirmationPage() {
  return (
    <div className="confimation-form">
      <h1>Reservation Confirmed</h1>
      <p>
        Thank you for your reservation at Little Lemon. We look forward to
        serving you.
      </p>
      <p>Date: {/* insert date here */}</p>
      <p>Time: {/* insert time here */}</p>
      <p>Number of guests: {/* insert number of guests here */}</p>
      <p>Occasion: {/* insert occasion here */}</p>
      <button>Home</button>
    </div>
  );
}
