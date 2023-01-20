import { useNavigate } from "react-router-dom";
import logoImg from "./img/logo.svg";
import restaurantChefbImg from "./img/restaurant_chefB.jpg";
import greekSaladImg from "./img/greek_salad.jpg";
import bruchettaImg from "./img/bruchetta.jpg";
import lemonDessertImg from "./img/lemon_dessert.jpg";
import customer1Img from "./img/customer1.jpg";
import customer2Img from "./img/customer2.jpg";
import customer3Img from "./img/customer3.jpg";
import customer4Img from "./img/customer4.jpg";
import restaurantChefsImg from "./img/Mario_and_Adrian A.jpg";
import restaurantFoodImg from "./img/restaurant_food.jpg";

import "./HomePage.css";

function Nav() {
  return (
    <div className="nav-content">
      <img src={logoImg} alt="Little Lemon Logo" className="logo" />
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservation</a>
          </li>
          <li>
            <a href="#orderonline">Order online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-content">
        <div className="header-content-text">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <p>
            <button
              onClick={() => {
                navigate("/booking");
              }}
              className="reserve-btn"
            >
              Reserve a Table
            </button>
          </p>
        </div>
        <img
          src={restaurantChefbImg}
          alt="A photo of one of Little Lemon restaurant's chef"
          className="restaurant-chefb"
        />
      </div>
    </header>
  );
}

function MenuItem(props) {
  return (
    <div className="menu-item">
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p className="price">${props.price}</p>
    </div>
  );
}

function TestimonialsItem(props) {
  return (
    <div className="testimonials-item">
      <p>{props.rating}</p>
      <p>{props.name}</p>
      <img src={props.img} alt={props.alt} />
      <p>{props.text}</p>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section>
        <h2>Specials</h2>
        <button className="onlinemenu-btn">Online Menu</button>
        <div className="menu-section">
          <MenuItem
            img={greekSaladImg}
            alt=""
            title="Greek Salad"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
                error sapiente nobis distinctio, accusantium numquam modi?
                Assumenda ipsam quis aliquid tempora molestiae."
            price={12.99}
          />
          <MenuItem
            img={bruchettaImg}
            alt=""
            title="Bruchetta"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
                error sapiente nobis distinctio, accusantium numquam modi?
                Assumenda ipsam quis aliquid tempora molestiae."
            price={5.99}
          />
          <MenuItem
            img={lemonDessertImg}
            alt=""
            title="Lemon Dessert"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
                error sapiente nobis distinctio, accusantium numquam modi?
                Assumenda ipsam quis aliquid tempora molestiae."
            price={4.99}
          />
        </div>
      </section>
      <section>
        <h2>Testimonials</h2>
        <div className="testimonials-section">
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={customer1Img}
            text="Reviewtext"
          />
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={customer2Img}
            text="Reviewtext"
          />
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={customer3Img}
            text="Reviewtext"
          />
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={customer4Img}
            text="Reviewtext"
          />
        </div>
      </section>
      <section>
        <h2>Little Lemon</h2>
        <p>Chicago</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit neque
          quidem omnis blanditiis molestias consequatur earum iste nulla magnam
          odio saepe, ea autem natus doloremque esse fuga ullam eveniet porro.
        </p>
        <img
          src={restaurantChefsImg}
          alt="A photo of Little Lemon restaurant's chefs"
          className="restaurantchefs-img"
        />
      </section>
    </main>
  );
}

function FooterItem(props) {
  return (
    <div>
      <p>{props.title}</p>
      <ul>
        {props.list.map((listItem) => (
          <li key={listItem.name}>
            <a href="/">{listItem.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-nav-container">
        <img
          src={restaurantFoodImg}
          alt="A photo of Little Lemon restaurant's food"
          className="restaurantfood-img"
        />
        <FooterItem
          title="Doormat Navigation"
          list={[
            { name: "Home" },
            { name: "About" },
            { name: "Menu" },
            { name: "Reservation" },
            { name: "Order online" },
            { name: "Login" },
          ]}
        />
        <FooterItem
          title="Contact"
          list={[
            { name: "Address" },
            { name: "Phone Number" },
            { name: "Email" },
          ]}
        />
        <FooterItem
          title="Social Media Links"
          list={[
            { name: "Instagram" },
            { name: "Facebook" },
            { name: "Twitter" },
          ]}
        />
      </div>
      <p>Copyright ©2023 Little Lemon</p>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
