import logoImg from "./img/logo.svg";
import restaurantFoodImg from "./img/restaurant_food.jpg";
import "./App.css";

function Nav() {
  return (
    <nav>
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
  );
}

function Header() {
  return (
    <header>
      <img src={logoImg} alt="Little Lemon Logo" className="logo" />
      <Nav />
      <div className="header-content">
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-btn">Reserve a Table</button>
        <img
          src={logoImg}
          alt="A photo of Little Lemon restaurant's food"
          className="restaurant-img"
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
            img={logoImg}
            alt=""
            title="Greek Salad"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
              error sapiente nobis distinctio, accusantium numquam modi?
              Assumenda ipsam quis aliquid tempora molestiae."
            price={12.99}
          />
          <MenuItem
            img={logoImg}
            alt=""
            title="Bruchetta"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
              error sapiente nobis distinctio, accusantium numquam modi?
              Assumenda ipsam quis aliquid tempora molestiae."
            price={5.99}
          />
          <MenuItem
            img={logoImg}
            alt=""
            title="Lemon Dessert"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              excepturi cupiditate? A itaque incidunt, quaerat omnis, nihil
              error sapiente nobis distinctio, accusantium numquam modi?
              Assumenda ipsam quis aliquid tempora molestiae."
            price={5.0}
          />
        </div>
      </section>
      <section>
        <h2>Testimonials</h2>
        <div className="testimonials-section">
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={logoImg}
            text="Reviewtext"
          />
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={logoImg}
            text="Reviewtext"
          />
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={logoImg}
            text="Reviewtext"
          />
          <TestimonialsItem
            rating="Rating"
            name="Name"
            img={logoImg}
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
          src={logoImg}
          alt="A photo of Little Lemon restaurant's food"
          className="restaurant-img"
        />
        <img
          src={logoImg}
          alt="A photo of Little Lemon restaurant's food"
          className="restaurant-img"
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

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
