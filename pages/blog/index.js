import Prismic from '@prismicio/client';
import Link from 'next/link';

const apiEndpoint = 'https://testprismicwithnext407.cdn.prismic.io/api/v2';
const options = {};
const Client = () => (Prismic.client(apiEndpoint, options));

export async function getStaticProps() {
  const document = await Client().query(Prismic.Predicates.at('document.type', 'post'));
  const res = document.results
  console.log(res);
  return {
    props: {
      res
    }
  }
};

const Blog = ({ res }) => {
  console.log(res);
  return (
    <div>
      <h1 className="text-5xl text-center my-3">BLOG</h1>
      {res.map(article =>
        <Link href={`/blog/${article.uid}`} key={article.id}><li><a>{article.data.title[0].text}</a></li></Link>
      )}
    </div>
  )
}

export default Blog;
