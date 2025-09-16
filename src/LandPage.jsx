import React from "react";
// import coffeeImg from "./coffe.png"; // Adjust path if needed
import coffeeImg from "./coffe.png";

const LandPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [orderDetails, setOrderDetails] = React.useState({
    type: "espresso",
    qty: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const type = form["coffee-type"].value;
    const qty = parseInt(form["coffee-qty"].value || "1", 10);
    setOrderDetails({ type, qty });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    // For now, just prevent default. Hook up to backend or email service later.
  };

  const handleNavClick = (targetId) => {
    const section = document.querySelector(`section#${targetId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="coffee-bg">
      <nav className="navbar">
        <ul className="nav-list">
          <li
            id="order"
            onClick={() => handleNavClick("order")}
            role="link"
            tabIndex={0}
          >
            Order
          </li>
          <li
            id="about"
            onClick={() => handleNavClick("about")}
            role="link"
            tabIndex={0}
          >
            About
          </li>
          <li
            id="contact"
            onClick={() => handleNavClick("contact")}
            role="link"
            tabIndex={0}
          >
            Contact
          </li>
        </ul>
      </nav>
      <section className="hero" id="order">
        <img className="hero-image" src={coffeeImg} alt="Coffee" />
        <form className="order-form" onSubmit={handleSubmit}>
          <label htmlFor="coffee-type">Coffee Type:</label>
          <select
            id="coffee-type"
            name="coffee-type"
            defaultValue={orderDetails.type}
          >
            <option value="espresso">Espresso</option>
            <option value="latte">Latte</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="americano">Americano</option>
          </select>

          <label htmlFor="coffee-qty">Quantity:</label>
          <input
            type="number"
            id="coffee-qty"
            name="coffee-qty"
            min="1"
            defaultValue={orderDetails.qty}
          />

          <button type="submit">Order</button>
        </form>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Your Order</h3>
              <button
                className="modal-close"
                aria-label="Close"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                <strong>Type:</strong> {orderDetails.type}
              </p>
              <p>
                <strong>Quantity:</strong> {orderDetails.qty}
              </p>
            </div>
            <div className="modal-footer">
              <button className="modal-primary" onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="about" id="about">
        <div className="about-inner">
          <h2 className="about-title">About</h2>
          <p className="about-text">
            The cleanest coffee beans you will ever have. We are here to make
            you happy with freshly roasted blends and a passion for craft.
          </p>
          <button className="about-cta">Learn More</button>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-text">
              We would love to hear from you. Drop us a message!
            </p>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us what's on your mind"
                required
              />
            </div>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandPage;
