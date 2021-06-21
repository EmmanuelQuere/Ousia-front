import React from "react";

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.url}/store_locations.json`);
  const data = await res.json();
  return {
      props: {stores: data}
  }
}

const Locations = ({ stores }) => {

  return (
    <>
    <h1>{`${process.env.TEST}`}</h1>
    {/* <iframe
      width="600"
      height="450"
      loading="lazy"
      allowFullScreen
      src={`https://maps.googleapis.com/maps/embed/v1/place?key=AIzaSyBa7KtmJK43owyvSfu3I5_dO4ZMz1kQ3Q0&q=${stores[0].lat},${stores[0].lng}&zoom=9`}>
    </iframe> */}
    </>
  )
}

export default Locations