import React from "react";
import styles from '../styles/Home.module.scss';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.url}/store_locations.json`);
  const data = await res.json();
  return {
      props: {stores: data}
  }
}

const Locations = ({ stores }) => {
  const [viewport, setViewport] = React.useState({
    latitude: 47,
    longitude: 2.337,
    zoom: 5,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(null)
  const [selectedAddress, setSelectedAddress] = React.useState(null)

  const closePopup = () => {
    setSelectedIndex(null)
    setSelectedAddress(null)
  };

  const openPopup = (index) => {
    setSelectedIndex(index)
  }

  const CustomPopup = ({ marker }) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Number(marker.lng)},${Number(marker.lat)}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`)
      .then(response => response.json())
      .then(response => setSelectedAddress(response.features[0].place_name));
    return (
      <Popup
        latitude={Number(marker.lat)}
        longitude={Number(marker.lng)}
        onClose={closePopup}
        closeButton={true}
        closeOnClick={false}
        offsetTop={0}
        offsetLeft={20}
       >
        <p className="p-1 text-sm font-bold">{marker.name}</p>
        <p className="p-1 text-sm">{selectedAddress}</p>
      </Popup>
    )
  };
  
  const markers = stores.map((marker, index) => {
    const image = marker.category === "retail" ? <img src="icons/shop.png" style={{ width:"40px"}}></img> : <img src="icons/cocktail.png" style={{ width:"40px"}}></img>
    return (
      <Marker
        key={`marker_${index}`}
        longitude={Number(marker.lng)}
        latitude={Number(marker.lat)}>
        <div className="marker" onClick={() => {openPopup(index), setViewport({latitude: Number(marker.lat), longitude: Number(marker.lng),  zoom: 12})}}>
          {image}
        </div>
      </Marker>
      )
   })

  return (
      <div className={styles.container}>
      <h1 className={styles.title}>Où nous trouver</h1>
      <div className={styles.divider}></div>
      <p className="my-5">Retrouvez les produits Ousia dans une boutique proche de chez vous ! 🍹</p>
      <div className="flex mb-10 items-center">
        <img src="icons/shop.png" style={{ width: "40px" }} className="mx-3"></img>
        <span className="text-sm mr-12">Où acheter nos produits</span>
        <img src="icons/cocktail.png" style={{ width: "40px" }} className="mx-3"></img>
        <span className="text-sm">Où déguster nos produits</span>
      </div>

        <ReactMapGL
          {...viewport}
          width="80%"
          height="80vh"
          mapboxApiAccessToken= {`${process.env.NEXT_PUBLIC_MAPBOX_KEY}`}
          onViewportChange={(viewport) => setViewport(viewport)}>
          {markers}
          {
          selectedIndex !== null &&
          <CustomPopup
            marker={stores[selectedIndex]}
            />
          }
      </ReactMapGL>
      <div className="mb-20"></div>
      </div>
  )
}

export default Locations