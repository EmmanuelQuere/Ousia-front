import Prismic from '@prismicio/client';
import Link from 'next/link';
import styles from './../../styles/Blog.module.scss';
import ArticlePreview from './../../components/blog/ArticlePreview';

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
    <div className={`${styles.container} h-full `}>
      <h1 className="text-5xl text-center my-3">BLOG</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {res.map(article =>
          <ArticlePreview article={article} key={article.id}/>
        )}
      </div>
    </div>
  )
}

export default Blog;
