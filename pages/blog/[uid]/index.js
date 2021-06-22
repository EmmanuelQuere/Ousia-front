import React from 'react';
import Link from 'next/link';
import Prismic  from '@prismicio/client';
import { RichText } from 'prismic-reactjs';
import styles from './../../../styles/Blog.module.scss';
import BlogBreadcrumbs from './../../../components/blog/BlogBreadcrumbs';
import BlogTextComponent from './../../../components/blog/BlogTextComponent'
import BlogImageComponent from './../../../components/blog/BlogImageComponent'
import BlogQuoteComponent from './../../../components/blog/BlogQuoteComponent'
import BlogEmbedComponent from './../../../components/blog/BlogEmbedComponent'

const apiEndpoint = 'https://testprismicwithnext407.cdn.prismic.io/api/v2';
const options = {};
const Client = () => (Prismic.client(apiEndpoint, options));

export async function getStaticPaths() {
  const document = await Client().query(Prismic.Predicates.at('document.type', 'post'));
  const res = document.results

  const paths = res.map(article => {
      return {
          params: {uid: article.uid}
      }
  });
  return {
        paths,
        fallback: false
    };
};

export async function getStaticProps(context) {
  const uid = context.params.uid
  const document = await Client().getByUID('post', `${uid}`);
  const res = document
  return {
    props: {
      res
    }
  }
};

const Article = ({ res }) => {
  const determineElement = (type) => {
    if (!components[type]) {
      console.warn(`${type} : la gestion de ce type d'élément n'est pas prévue.`);
    } else {
      return components[type]
    }
  };

  console.log(res);
  const components = {
    text: BlogTextComponent,
    image_with_caption: BlogImageComponent,
    quote: BlogQuoteComponent,
    embed: BlogEmbedComponent
  };

  let component = res.data.body.map(element => {
    let BlogComponent = determineElement(element.slice_type)
    return {component: BlogComponent, props: element}
  })

  console.log(component);
  return (
    <div>
      <BlogBreadcrumbs article={res.data.title}/>
      <div className={styles.heading}>
        <RichText render={res.data.title} />
      </div>
      <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto mb-4"></div>
      <div className={styles.container}>
        {component.map((data, index) => data.component ? React.createElement(data.component, data.props) : <p></p>)}
      </div>
      <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto mb-4"></div>
      <Link href="/blog"><a className="m-4 hover:underline">Revenir à la liste des articles</a></Link>
    </div>
  )
}

export default Article
