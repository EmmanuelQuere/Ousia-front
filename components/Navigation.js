const Navigation = () => {

  return (
    <nav className='flex items-center justify-between bg-pink-500 p-4'>
      <div className='flex items-center flex-shrink-0 text-white'><a className='text-lg tracking-wide font-medium uppercase pl-2' href="/">Ousia</a></div>
      <ul className='inline-flex w-full lg:flex lg:items-center lg:w-auto'>
        <li className=""><a href="#">Magasin</a></li>
        <li className=""><a href="#">La marque</a></li>
        <li className=""><a href="#">La Team</a></li>
      </ul>
      <ul className='inline-flex lg:flex lg:items-center lg:w-auto'>
        <li><a href="#">Se connecter</a></li>
        <li><a href="#">S'inscrire</a></li>
        <li><a href="#">Se déconnecter</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;