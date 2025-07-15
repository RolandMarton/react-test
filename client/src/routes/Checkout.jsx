import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <section className="checkout-page">
      <h1 className="checkout-thank-you">Thank you for choosing us!</h1>
      <p className="checkout-subtext">
        We appreciate your business. Have a great day!
      </p>
      <button className="browse-items-button" onClick={() => navigate("/")}>
        Browse More Items
      </button>
    </section>
  );
};

export default Checkout;
