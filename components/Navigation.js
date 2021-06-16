import DisconnectButton from './DisconnectButton';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [navbarElements, setNavbarElements] = useState()

  useEffect(() => {
    if (isLoggedIn) {
      setNavbarElements (
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-gray-200 firefox:bg-opacity-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Ousia</span>
            <div className="flex space-x-4 text-gray-900">
              <Link href="/shop"><a>Magasin</a></Link>
              <Link href="/cart" passHref><a><FontAwesomeIcon icon={faShoppingBasket} /></a></Link>
              <a href="#">La marque</a>
              <a href="#">La Team</a>
            </div>
            <div className="flex justify-end">
              <div className="flex space-x-4 text-gray-900">
                <Link href="/profile"><a>Mon profil</a></Link>
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
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Ousia</span>
            <div className="flex space-x-4 text-gray-900">
              <Link href="/shop"><a>Magasin</a></Link>
              <Link href="/cart" passHref><a><FontAwesomeIcon icon={faShoppingBasket} /></a></Link>
              <a href="#">La marque</a>
              <a href="#">La Team</a>
            </div>
            <div className="flex justify-end">
              <div className="flex space-x-4 text-gray-900">
                <Link href="/login"><a>Se connecter</a></Link>
                <Link href="/signup"><a>S'inscrire</a></Link>
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
