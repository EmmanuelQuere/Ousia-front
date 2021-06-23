import React from 'react';
import styles from '../../styles/Shop.module.scss';
import { useSelector } from 'react-redux';

const Edit = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const userToken = useSelector(state => state.token);
  React.useEffect(
    () => {
      if (!userToken) { window.location = "/login" }
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch(`${process.env.url}/profile`, requestOptions)
      .then(response => response.json())
        .then(result => { setCurrentUser(result.user)})
      .catch(error => console.log('error', error));
    }
    , []
  )

  const submitInfo = (event) => {
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "user": {
        "email": `${event.target.elements.email.value}`,
        "last_name": `${event.target.elements.last_name.value}`,
        "first_name": `${event.target.elements.first_name.value}`
      }
    });

    let requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw
    };

    fetch(`${process.env.url}/users/${currentUser.id}`, requestOptions)
      .then(() => {window.location = "/profile"})
    .catch(error => console.log('error', error));
  }

  return (
    <div className="container mx-auto p-20">
      <div>
        <h2 className={styles.title}>Modifier mes informations</h2>
        <hr className={styles.divider}/>
      </div>
      <div className="mx-auto max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitInfo}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" defaultValue={currentUser.email}></input>
            </div>
            <div className="mb-">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
                Nom
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" defaultValue={currentUser.last_name}></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
              Prénom
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" defaultValue={currentUser.first_name}></input>
          </div>
            <button className={styles.confirmButtonCold} type="submit">
              Valider
            </button>
          </form>
        </div>
    </div>

  )
}

export default Edit
