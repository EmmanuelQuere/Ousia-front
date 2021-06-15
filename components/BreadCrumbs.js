import Link from "next/link"

const Breadcrumbs = (props) => {
  return (
    <nav className="bg-grey-light rounded w-full mb-4">
    <ol className="list-reset flex text-grey-dark">
      <li><Link href='/'><a href="#" className="text-blue font-bold">Accueil</a></Link></li>
      <li><span className="mx-2">/</span></li>
      <li><Link href='/shop'><a href="#" className="text-blue font-bold">Boutique</a></Link></li>
      <li><span className="mx-2">/</span></li>
      <li>{props.item.name}</li>
    </ol>
  </nav>
  )
}

export default Breadcrumbs