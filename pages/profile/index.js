import React from 'react';
import styles from '../../styles/Shop.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [userOrders, setUserOrders] = React.useState([]);
  const [totalOrder, setTotalOrder] = React.useState(0);

  const userToken = useSelector(state => state.token);

  

  React.useEffect(
    () => {
      if (!userToken) { window.location = "/login" }
      else {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `${userToken}`);

        let requestOptions = {
          method: 'GET',
          headers: myHeaders
        };

        fetch(`${process.env.url}/profile`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setCurrentUser(result.user);
            setUserOrders(result.order);
          })
          .catch(error => console.log('error', error))
          ;
      }

    }

    , []
  )

  console.log(userOrders)

  return (
    <div className="container mx-auto p-20">
      <div>
        <h2 className={styles.title}>Mon profil</h2>
        <hr className={styles.divider} />
      </div>
      <section className="pb-10 text-center">
        <h3 className={styles.subtitle}>Mes informations</h3>
        <div className="mb-2 text-gray-700 mt-10">
          Mon e-mail : {currentUser.email}
        </div>
        <div className="mb-2 text-gray-700">
          Mon nom : {currentUser.last_name}
        </div>
        <div className="mb-6 text-gray-700">
          Mon prénom : {currentUser.first_name}
        </div>
        <Link href="/profile/edit"><a className={styles.confirmButton}>Modifier mes informations</a></Link>
      </section>
      <section className="text-center">
        <h3 className={styles.subtitle}>Mes commandes</h3>
      
        <div >
          {userOrders.length > 0 ?


            <div className=" mt-10 mb-5 table-auto">
              <ul>
                {userOrders.map((order, index) => (
                  <>
                    <div className="flex mt-10 mb-5">
                      <li className="font-semibold text-black-600 text-s uppercase w-1/5" key={`order_${order.id}`}>Commande n°{order.id}</li>
                      <li className="font-semibold text-black-600 text-xs uppercase w-1/5">Statut: {order.status}</li>
                    </div>
                    <li>
                      <div className="flex mt-10 mb-5">
                      <li className="font-semibold text-black-600 text-xs uppercase w-1/5">Nom des articles</li>
                      <li className="font-semibold text-black-600 text-xs uppercase w-1/5">Quantité:</li>
                      <li className="font-semibold text-black-600 text-xs uppercase w-1/5">Prix:</li>
                      </div>
                      {order.order_items.map((orderItem, index) => (
                        <>
                          <div className=" mt-2 mb-2 flex ">
                            <li className="font-semibold text-gray-600 text-xs uppercase w-1/5" >{orderItem.item.name}</li>
                            <li className="font-semibold text-gray-600 text-xs uppercase w-1/5" >{orderItem.quantity}</li>
                            <li className="font-semibold text-gray-600 text-xs uppercase w-1/5"  value={totalOrder}  >{orderItem.item.price} €</li>
                          </div>
                        </>
                      ))}
                    </li>
                  </>
                ))}
              </ul>
            </div>
            : 'Aucune commande'}

        </div>




      </section>
    </div>
  )
};

export default Profile
