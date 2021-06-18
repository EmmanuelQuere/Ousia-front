import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../../components/CartProduct';
import Link from 'next/link';

const Cart = () => {
  const [currentUserCart, setCurrentUserCart] = React.useState(null);
  const [deliveryPrice, setDeliveryPrice] = React.useState(10);
  const userToken = useSelector(state => state.token);

  React.useEffect(
    () => {
      if (userToken)
      {let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch(`${process.env.url}/mycart`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setCurrentUserCart(result)
        })
        .catch(error => console.log('error', error));}
    }
    , []
  )

  const totalPrice = (cart) => {
    return Object.values(cart).reduce((t, { total }) => t + total, 0)
  }

  const totalQuantity = (cart) => {
    return Object.values(cart).reduce((t, { quantity }) => t + quantity, 0)
  }

  const getSelectValue = (event) => {
    setDeliveryPrice(Number(event.target.value))
  }
  
  return (
  <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Mon panier</h1>
          {(!currentUserCart || currentUserCart.length === 0) || <h2 className="font-semibold text-2xl">{totalQuantity(currentUserCart)} {totalQuantity(currentUserCart) > 1 ? `articles` : `article`}</h2>}
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Produit</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantité</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Prix</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          {(!currentUserCart || currentUserCart.length === 0) ? <span className="text-gray-600 text-lg">Vous n'avez pas encore d'articles dans votre panier !</span> : currentUserCart.map(cartItem => <CartProduct key={cartItem.id} images={cartItem.images} product={cartItem.item} quantity={cartItem.quantity} item_id={cartItem.id} setCurrentUserCart={setCurrentUserCart} currentUserCart={currentUserCart}/>)}
          <Link href="/shop">
            <a className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Retour à la boutique
            </a>
          </Link>
      </div>

        {(!currentUserCart || currentUserCart.length === 0) || <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Récapitulatif de la commande</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">{totalQuantity(currentUserCart)} {totalQuantity(currentUserCart) > 1 ? `articles` : `article`}</span>
            <span className="font-semibold text-sm">{totalPrice(currentUserCart)} €</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Livraison</label>
            <select className="block p-2 text-gray-600 w-full text-sm" onChange={getSelectValue}>
              <option value="10">Livraison standard - 10.00€</option>
            </select>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total</span>
              <span>{totalPrice(currentUserCart) + deliveryPrice} €</span>
            </div>
            <Link href={'/cart/recap'}>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Payer ma commande</button>
            </Link>            
          </div>
        </div>}

    </div>
  </div>

  )
}

export default Cart