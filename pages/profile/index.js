import React from 'react';
import styles from '../../styles/Shop.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [userOrders, setUserOrders] = React.useState([]);
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

  console.log(currentUser)
  console.log(userOrders[0])


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
        {userOrders !== null ?
          <div className="grid grid-cols-1 gap-4">
            {userOrders.map((order, index) => (
              <p>Numéro de commande n°{order.id} : {order.status}</p>
            ))}
          </div>
          : 'Aucune commande'}

      </section>
    </div>
  )
};

export default Profile
