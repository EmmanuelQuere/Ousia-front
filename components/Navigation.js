import DisconnectButton from './DisconnectButton';
import Link from 'next/link'

const Navigation = () => {

  return (
    <nav className='flex items-center justify-between bg-gray-50 p-4'>
      <div className='flex items-center flex-shrink-0 text-white'><a className='text-black font-bold text-lg tracking-wide font-medium uppercase pl-2' href="/">Ousia</a></div>
      <ul className='inline-flex w-full lg:flex lg:items-center lg:w-auto'>
        <Link href="/shop"><li className="mx-1"><a>Magasin</a></li></Link>
        <li className="mx-1"><a href="#">La marque</a></li>
        <li className="mx-1"><a href="#">La Team</a></li>
      </ul>
      <ul className='inline-flex lg:flex lg:items-center lg:w-auto'>
        <Link href="/login"><li className="mx-1"><a>Se connecter</a></li></Link>
        <Link href="/signup"><li className="mx-1"><a>S'inscrire</a></li></Link>
        <DisconnectButton />
      </ul>
    </nav>
  )
}

export default Navigation;
