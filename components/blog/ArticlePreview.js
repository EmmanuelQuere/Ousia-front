import Link from 'next/link';

const ArticlePreview = (props) => {

  return (
    <Link href={`/blog/${props.article.uid}`}><li><a>{props.article.data.title[0].text}</a></li></Link>
  )
}

export default ArticlePreview;
