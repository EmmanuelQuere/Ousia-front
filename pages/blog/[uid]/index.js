import React from 'react';
import Link from 'next/link';
import Prismic  from '@prismicio/client';
import { Client, options, apiEndpoint } from './../../../prismic.config';
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from './../../../styles/Blog.module.scss';
import BlogBreadcrumbs from './../../../components/blog/BlogBreadcrumbs';
import BlogTextComponent from './../../../components/blog/BlogTextComponent';
import BlogImageComponent from './../../../components/blog/BlogImageComponent';
import BlogQuoteComponent from './../../../components/blog/BlogQuoteComponent';
import BlogEmbedComponent from './../../../components/blog/BlogEmbedComponent';

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
  const res = await Client().getByUID('post', `${uid}`);
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

  const components = {
    text: BlogTextComponent,
    image_with_caption: BlogImageComponent,
    quote: BlogQuoteComponent,
    embed: BlogEmbedComponent
  };

  let component = res.data.body.map( (element, index)=> {
    let BlogComponent = determineElement(element.slice_type)
    return {component: BlogComponent, props: {...element, key: `blog-component-${index}`} }
  })

  return (
    <div>
      <BlogBreadcrumbs article={res.data.title}/>
      <div className={styles.container}>
        <div className={styles.heading}>
          <RichText render={res.data.title} />
        </div>
        <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto my-8"></div>
        {component.map((data, index) => data.component ? React.createElement(data.component, data.props) : <p></p>)}
      </div>
      <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto my-4"></div>
      <Link href="/blog">
        <a className="m-4 hover:underline px-12">
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm mr-2"/>Revenir à la liste des articles
        </a>
      </Link>
    </div>
  )
}

export default Article
