import DisconnectButton from './DisconnectButton';
import Link from 'next/link';
import { useState } from 'redux';

const Navigation = () => {

  return (
  <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 border-b border-gray-200">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <span className="text-2xl text-gray-900 font-semibold">Ousia</span>
        <div className="flex space-x-4 text-gray-900">
          <Link href="/shop"><a>Magasin</a></Link>
          <a href="#">La marque</a>
          <a href="#">La Team</a>
        </div>
        <div className="flex justify-end">
          <div className="flex space-x-4 text-gray-900">
            <Link href="/login"><a>Se connecter</a></Link>
            <Link href="/signup"><a>S'inscrire</a></Link>
            <DisconnectButton />
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navigation;
