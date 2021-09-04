import DisconnectButton from './DisconnectButton';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.scss'

const Navigation = () => {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [navbarElements, setNavbarElements] = useState()

  useEffect(() => {
    if (isLoggedIn) {
      setNavbarElements(
        <nav className="sticky top-0 p-2 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200 firefox:bg-opacity-20">
        <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-around text-gray-900">
          <Link href="/">
            <img src="/ousia-logo.png" alt="Ousia Logo" width="80" height="30" className="cursor-pointer"/>
          </Link>
            <div className="flex flex-wrap items-center justify-center p-2 space-x-6 text-sm font-semibold">
              <Link href="/shop"><a className="hover:text-gray-700">Boutique</a></Link>
              <Link href="/locations"><a className="hover:text-gray-700">Points de vente</a></Link>
              <Link href="/blog"><a className="hover:text-gray-700">Blog</a></Link>
            </div>
            <div className="flex flex-wrap justify-end">
                <div className="flex flex-wrap items-center justify-center  p-2 space-x-4 text-gray-900">
                <Link href="/cart" passHref><a className="hover:text-gray-700"><FontAwesomeIcon icon={faShoppingBasket} /></a></Link>
                <Link href="/profile"><a className="hover:text-gray-700"><FontAwesomeIcon icon={faUser} /></a></Link>
                <DisconnectButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
      )
    } else {
      setNavbarElements (
      <nav className="sticky top-0 p-2 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200 firefox:bg-opacity-20">
        <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-around text-gray-900">
          <Link href="/">
            <img src="/ousia-logo.png" alt="Ousia Logo" width="80" height="30" className="cursor-pointer"/>
          </Link>
            <div className="flex flex-wrap items-center justify-center p-2 space-x-6 text-sm font-semibold">
              <Link href="/shop"><a className="hover:text-gray-700">E-shop</a></Link>
              <Link href="/about"><a className="hover:text-gray-700">A propos</a></Link>
              <Link href="/locations"><a className="hover:text-gray-700">Points de vente</a></Link>
              <Link href="/blog"><a className="hover:text-gray-700">Blog</a></Link>
            </div>
            <div className="flex flex-wrap justify-end">
                <div className="flex flex-wrap items-center justify-center  p-2 space-x-4 text-gray-900">
                <Link href="/cart" passHref>
                  <a className="hover:text-gray-700"><FontAwesomeIcon icon={faShoppingBasket} />
                  </a></Link>
                <Link href="/login"><a className="hover:text-gray-700 text-sm">Se connecter</a></Link>
                <Link href="/signup"><a className="hover:text-gray-700 text-sm">S'inscrire</a></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      )
    }
  }, [isLoggedIn])

  return (<>{navbarElements}</>)
}

export default Navigation;
