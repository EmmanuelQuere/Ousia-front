import DisconnectButton from './DisconnectButton';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [navbarElements, setNavbarElements] = useState()

  useEffect(() => {
    if (isLoggedIn) {
      setNavbarElements (
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200 firefox:bg-opacity-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 text-gray-900">
          <Link href="/"><a className="text-2xl font-semibold hover:text-gray-700">Ousia</a></Link>
            <div className="flex space-x-6 text-sm font-semibold">
              <Link href="/shop"><a className="hover:text-gray-700">Nos produits</a></Link>              
              <a href="#" className="hover:text-gray-700">Nos points de vente</a>
              <a href="#" className="hover:text-gray-700">Qui sommes-nous ?</a>
            </div>
            <div className="flex justify-end">
                <div className="flex space-x-4 text-gray-900">
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
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200 firefox:bg-opacity-20">
        <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-gray-900">
          <Link href="/"><a className="text-2xl font-semibold hover:text-gray-700">Ousia</a></Link>
            <div className="flex space-x-6 text-sm font-semibold">
              <Link href="/shop"><a className="hover:text-gray-700">Nos produits</a></Link>              
              <a href="#" className="hover:text-gray-700">Nos points de vente</a>
              <a href="#" className="hover:text-gray-700">Qui sommes-nous ?</a>
            </div>
            <div className="flex justify-end">
                <div className="flex space-x-4 text-gray-900">
                <Link href="/cart" passHref><a className="hover:text-gray-700"><FontAwesomeIcon icon={faShoppingBasket} /></a></Link>
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
