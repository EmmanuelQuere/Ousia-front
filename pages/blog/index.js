import Prismic from '@prismicio/client';
import Link from 'next/link';
import { Client, options, apiEndpoint } from './../../prismic.config';
import styles from './../../styles/Blog.module.scss';
import ArticlePreview from './../../components/blog/ArticlePreview';

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
  return (
    <div className={`${styles.container} h-full `}>
      <h1 className="text-5xl text-center my-3">BLOG</h1>
      <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto mb-4"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {res.map((article, index) =>
          <ArticlePreview article={article} key={article.id}/>
        )}
      </div>
    </div>
  )
}

export default Blog;
