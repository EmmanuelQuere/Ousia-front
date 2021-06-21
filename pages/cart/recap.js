import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import Router from 'next/router';
import CheckoutRecap from "../../components/CheckoutRecap";
import CheckoutMessage from "../../components/CheckoutMessage";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`);

const Recap = () => {
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const [cartID, setCartID] = useState("");
  const [cartDetails, setCartDetails] = useState([]);
  const userToken = useSelector(state => state.token);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (!userToken) { Router.push("/login") }
    else if (query.get("success")) {
      setTitle("Merci d'avoir commandé chez Ousia ! 🚀")
      setMessage("Votre commande a été passée avec succès ! Vous allez recevoir un e-mail de confirmation.");

      let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);
      myHeaders.append("Content-Type", "application/json");
  
      let requestOptions = {
        method: 'POST',
        headers: myHeaders
      };

      fetch(`${process.env.url}/orders.json?session_id=${query.get("session_id")}&cart_id=${query.get("cart_id")}`, requestOptions);
    }
    else if (query.get("canceled")) {
      setTitle("Oups... 🤔")
      setMessage(
        "Votre commande n'a pas pu aboutir. En cas de problème, contactez notre équipe à ventes@ousia.com"
      );
    }
    if (!query.get("success") && !query.get("cancel")) {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch(`${process.env.url}/mycart`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setCartDetails(result);
          setCartID(result[0].cart_id)
        })
        .catch(error => console.log('error', error));
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `${userToken}`);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders
    };

    const response = await fetch(`${process.env.url}/create-checkout-session/${cartID}`, requestOptions);

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      setMessage(result.error.message)
    }
  };

  return (
    <>
      {message ? <CheckoutMessage message={message} title={title} /> : <CheckoutRecap handleClick={handleClick} cartDetails={cartDetails} />}
    </>
  )
};

export default Recap