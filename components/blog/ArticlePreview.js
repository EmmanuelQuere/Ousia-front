import Link from 'next/link';
import Image from 'next/image'

const ArticlePreview = (props) => {

  return (

    <div className="flex flex-col items-center justify-center m-3 p-3 shadow-md rounded-lg">
      <div className="block">
        <Image src={props.article.data.featured_image.url || "/ousiabottles.png"} alt="truc" width={300} height={400} />
      </div>
      <div className="">
        <Link href={`/blog/${props.article.uid}`}><a className="text-lg font-bold text-center">{props.article.data.title[0].text}</a></Link>
      </div>
    </div>
  )
}

export default ArticlePreview;
