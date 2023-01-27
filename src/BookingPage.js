import React from "react";
import "./BookingPage.css";
import restaurantImg from "./img/restaurant.jpg";
import restaurantChefs2Img from "./img/Mario_and_Adrian B.jpg";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

export default function BookingPage() {
  return (
    <div>
      <Nav />
      <div className="bookingpage-imgs">
        <img
          src={restaurantImg}
          alt="A photo of Little Lemon restaurant"
          className="restaurant-img"
        />

        <img
          src={restaurantChefs2Img}
          alt="A photo of Little Lemon restaurant's chefs"
          className="restaurantchefs2-img"
        />
      </div>
      <BookingForm />
      <Footer />
    </div>
  );
}
