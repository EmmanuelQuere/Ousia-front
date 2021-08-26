import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Shop.module.scss'

const ProductCardEven = (props) => {

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
      <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-ousiaYellow-light py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md tracking-wider">
        <div className="min-h-62">
        <div style={{visibility: isLoading? "hidden" : "visible"}}>
          <img className="mx-auto beforeload" src={props.item.images[0]} ref={image} alt="" onLoad={onLoad}>
          </img>
          <div className="lds-ellipsis mx-auto opacity-100" style={{display: isLoading? "block" : "none", visibility: "visible"}}><div></div><div></div><div></div><div></div></div>
        </div>
        </div>
        <h2 className="font-bold mb-5 text-4xl text-gray-800">{props.item.name}</h2>
        <p className="text-xl font-bold text-black mb-10">{props.item.price} €
        <span className="text-xs leading-relaxed mb-5 text-gray-700 font-normal align-middle pl-2 tracking-wider">les 12 bouteilles de 27,5cL (+ frais de livraison).</span>
        </p>
        <button className={styles.confirmButtonCold}>Commander</button>
      </article>
    </Link>
  )
};

export default ProductCardEven
