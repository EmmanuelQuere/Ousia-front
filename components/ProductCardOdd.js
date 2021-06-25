import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Shop.module.scss'

const ProductCardOdd = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const image = useRef();
  const onLoad = () => {
    setIsLoading(false)
    image.current.className+= " loaded"
  }

  useEffect(() => {
    if (image.current.complete) {
      setIsLoading(false)
      image.current.className+= " loaded"
    }
  }, [])

  return (
    <Link href={`/shop/` + props.item.id} passHref>
      <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-ousiaBlue-light py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
        <div className="min-h-62">
        <div style={{visibility: isLoading? "hidden" : "visible"}}>
          <img className="mx-auto beforeload" src={props.item.images[0]} ref={image} alt="" onLoad={onLoad}>
          </img>
          <div className="lds-ellipsis mx-auto opacity-100" style={{display: isLoading? "block" : "none", visibility: "visible"}}><div></div><div></div><div></div><div></div></div>
        </div>
        </div>
        <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">{props.index < 10 ? `0${props.index}` : props.index}.</h1>
        <h2 className="font-bold mb-5 text-xl text-gray-800">{props.item.name}</h2>
        <p className="text-sm leading-relaxed mb-5 text-gray-700">
          {props.item.description}
        </p>
        <p className="text-xl font-bold text-gray-900 mb-10">{props.item.price} €
        <span className="text-xs leading-relaxed mb-5 text-gray-700 font-normal align-middle pl-2">les 6 bouteilles.</span>
        </p>
        <button className={styles.confirmButtonWarm}>En voir plus</button>
      </article>
    </Link>
  )
};

export default ProductCardOdd
