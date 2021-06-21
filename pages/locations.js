import React from "react";
import styles from '../styles/Home.module.scss';

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.url}/store_locations.json`);
  const data = await res.json();
  return {
      props: {stores: data}
  }
}

const Locations = ({ stores }) => {
  return (
      <div className={styles.container}>
        <h1 className="text-center text-5xl my-10">Où nous trouver</h1>
        <ul>
        {stores.map(store => <li>{store.name}</li>)}
        </ul>
      </div>
  )
}

export default Locations