import Link from "next/link"

const BlogBreadcrumbs = (props) => {
  return (
    <nav className="bg-grey-light rounded w-full mx-4 my-6 text-sm">
      <ol className="list-reset flex text-grey-dark">
        <li><Link href='/'><a href="#" className="text-blue font-bold">Accueil</a></Link></li>
        <li><span className="mx-2">/</span></li>
        <li><Link href='/blog'><a href="#" className="text-blue font-bold">Blog</a></Link></li>
        <li><span className="mx-2">/</span></li>
        <li>{props.article[0].text}</li>
      </ol>
    </nav>
  )
}

export default BlogBreadcrumbs
