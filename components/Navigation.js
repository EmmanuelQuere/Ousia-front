const Navigation = () => {

  return (
    <nav className='navbar'>
      <div className='brand'><a href="/">Ousia</a></div>
      <ul>
        <li className="leftnav"><a href="#">Magasin</a></li>
        <li className="leftnav"><a href="#">La marque</a></li>
        <li className="leftnav"><a href="#">La Team</a></li>
        <li><a href="#">Se connecter</a></li>
        <li><a href="#">S'inscrire</a></li>
        <li><a href="#">Se déconnecter</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;