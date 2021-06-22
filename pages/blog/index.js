import Prismic from '@prismicio/client';
import Link from 'next/link';
import ArticlePreview from './../../components/blog/ArticlePreview'

const apiEndpoint = 'https://testprismicwithnext407.cdn.prismic.io/api/v2';
const options = {};
const Client = () => (Prismic.client(apiEndpoint, options));

export async function getStaticProps() {
  const document = await Client().query(Prismic.Predicates.at('document.type', 'post'));
  const res = document.results
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
      <div className="grid grid-cols-2">
        {res.map(article =>
          <ArticlePreview article={article} key={article.id}/>
        )}
      </div>
    </div>
  )
}

export default Blog;
