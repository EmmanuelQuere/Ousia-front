import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutMessage from "./CheckoutMessage";
import { useSelector } from "react-redux";

const stripePromise = loadStripe("pk_test_51ILoi9D5i13aYcbUguAzFyWWFijcBAUTSwKs82B6piA6SUdImu8A94Ys7TKbYICjB98l0Ev228dHHSvpPciTtR0F00oqJphB5S");

const ProductDisplay = ({ handleClick }) => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
  </section>
);

export default function StripeLink(props) {
  const [message, setMessage] = useState("");
  const userToken = useSelector(state => state.token);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Votre commande a été passée avec succès ! Vous allez recevoir un e-mail de confirmation.");

      let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);
      myHeaders.append("Content-Type", "application/json");
  
      let requestOptions = {
        method: 'POST',
        headers: myHeaders
      };

      fetch(`${process.env.url}/orders.json?session_id=${query.get("session_id")}&cart_id=${query.get("cart_id")}`, requestOptions)
        .then(response => response.json())
        .then(response => console.log(response));
    }

    if (query.get("canceled")) {
      setMessage(
        "Votre commande a été annulée. En cas de problème, contactez notre équipe à ventes@ousia.com"
      );
    }
  }, []);

  const handleClick = async (event) => {
    if (!userToken) { window.location = "/login" }

    const stripe = await stripePromise;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `${userToken}`);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders
    };

    const response = await fetch(`${process.env.url}/create-checkout-session/${props.cart_id}`, requestOptions);

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      setMessage(result.error.message)
    }
  };

  return message ? (
    <CheckoutMessage message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}