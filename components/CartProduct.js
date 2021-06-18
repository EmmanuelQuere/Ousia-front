import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartProduct = (props) => {

  const userToken = useSelector(state => state.token);
  const [currentItemQuantity, setCurrentItemQuantity] = useState(props.quantity)

  useEffect(() => {
    let newCartState = props.currentUserCart.map(element => element)
    newCartState.forEach(element => {
      if(element.item === props.product){
        element.quantity = currentItemQuantity
        element.total = currentItemQuantity * element.item.price
      }
    });
    
    if(!userToken){
      localStorage.setItem('visitor_cart', JSON.stringify(newCartState))
    }
    
    props.setCurrentUserCart(newCartState);
  }, [currentItemQuantity]);

  const handleDelete = (id) => {
    if(userToken){
      let myHeaders = new Headers();
      myHeaders.append('Authorization', `${userToken}`);
      
      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders
      };
      
      fetch(`${process.env.url}/cart_items/${id}.json`,
      requestOptions)
      .then(response => {
        if (!response.errors){
          props.setCurrentUserCart(props.currentUserCart.filter(element => element.id !== id))
        }
      })
      .catch(error => console.log('error', error));
    }else{
      let newVisitorCart = JSON.parse(localStorage.getItem('visitor_cart'))
      newVisitorCart = newVisitorCart.filter(element => element.item.id !== id)
      localStorage.setItem('visitor_cart', JSON.stringify(newVisitorCart))
      props.setCurrentUserCart(newVisitorCart)
    }
  }
  
  const handleDecrease = (id) => {
    if(userToken){
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `${userToken}`);
    myHeaders.append('Content-Type', 'application/json');
    
    
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify({cart_item: {quantity: (currentItemQuantity - 1)}})
    };
    
    fetch(`${process.env.url}/cart_items/${id}.json`, requestOptions)
      .then(response => {
        if(!response.errors) {
          setCurrentItemQuantity(currentItemQuantity - 1)
        }
      })
      .catch(error => console.log('error', error));
    }else{
      setCurrentItemQuantity(currentItemQuantity - 1)
    }
  }
  
  
  const handleIncrease = (id) => {
    
    if(userToken){
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `${userToken}`);
    myHeaders.append('Content-Type', 'application/json');

    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify({cart_item: {quantity: (currentItemQuantity + 1)}})
    };

    fetch(`${process.env.url}/cart_items/${id}.json`, requestOptions)
      .then(response => {
        if(!response.errors) {
          setCurrentItemQuantity(currentItemQuantity + 1)
        }
      })
      .catch(error => console.log('error', error));
    }else{
      setCurrentItemQuantity(currentItemQuantity + 1)      
    }
  }

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={props.images[0]} alt="image"></img>
        </div>
        <div className="flex flex-col justify-around ml-4 flex-grow">
          <span className="font-bold text-sm">{props.product.name}</span>
          <span onClick={() => handleDelete(props.item_id)} className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs">Supprimer</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        { !(currentItemQuantity < 2)?
        <svg onClick={() => handleDecrease(props.item_id)} className="cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg> : ""
        }
        <input readOnly className="mx-2 border text-center w-8" type="text" value={`${currentItemQuantity}`}></input>

        <svg onClick={() => handleIncrease(props.item_id)} className="cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{props.product.price} €</span>
      <span className="text-center w-1/5 font-semibold text-sm">{props.product.price*currentItemQuantity} €</span>
    </div>
  )
}

export default CartProduct