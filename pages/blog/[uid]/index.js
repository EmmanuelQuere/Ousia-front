import React from 'react';
import Prismic  from '@prismicio/client';
import { RichText } from 'prismic-reactjs';
import styles from './../../../styles/Blog.module.scss';
import BlogTextComponent from './../../../components/blog/BlogTextComponent'
import BlogImageComponent from './../../../components/blog/BlogImageComponent'
import BlogQuoteComponent from './../../../components/blog/BlogQuoteComponent'

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
  console.log(res);
  const components = {
    text: BlogTextComponent,
    image_with_caption: BlogImageComponent,
    quote: BlogQuoteComponent
  };

  let component = res.data.body.map(element => {
    let BlogComponent = components[element.slice_type];
    let props = element.primary
    return {component: BlogComponent, props: props}
  })

  console.log(component);
  return (
    <div>
      <div className={styles.heading}>
        <RichText render={res.data.title} />
        <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto mb-4"></div>
      </div>
      <div className={styles.container}>
        {component.map(data =>
          React.createElement(data.component, data.props)
        )}
      </div>
    </div>
  )
}

export default Article
