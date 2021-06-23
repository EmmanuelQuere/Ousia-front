import Link from 'next/link';
import Image from 'next/image'

const ArticlePreview = (props) => {
  return (

    <div className="mx-2 my-3 shadow-md rounded-b-lg h-full">
      <Link href={`/blog/${props.article.uid}`}>
        <div className="cursor-pointer">
          <div className="w-full">
            <Image src={props.article.data.featured_image.url || "/jumbotron.jpg"} alt="truc" className="rounded-t" width={500} height={500} />
          </div>
          <div className="p-3">
            <a className="text-lg text-center">{props.article.data.title[0].text}</a>
              <div className="w-1/4 my-1 flex flex-row">
                {props.article.tags.map(tag =>
                    <Link href={`/blog/tag/${tag}`} key={`${tag}-${props.article.id}`}><a className="bg-white text-red-800 border border-red-800 rounded-md p-0.5 text-sm hover:bg-red-800 hover:text-white m-1">{`#${tag}`}</a></Link>
                )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArticlePreview;
