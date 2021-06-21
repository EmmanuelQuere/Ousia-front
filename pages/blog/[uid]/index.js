import React from 'react';
import Prismic  from '@prismicio/client';
import { RichText } from 'prismic-reactjs';
import BlogTextComponent from './../../../components/blog/BlogTextComponent'
import BlogImageComponent from './../../../components/blog/BlogImageComponent'

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
    image_with_caption: BlogImageComponent
  };

  let component = res.data.body.map(element => {
    let BlogComponent = components[element.slice_type];
    let props = element.primary
    return {component: BlogComponent, props: props}
  })

  console.log(component);
  return (
    <div>
      <RichText render={res.data.title} />
      <section className="px-3 my-3">
        {component.map(data =>
          React.createElement(data.component, data.props)
        )}
      </section>
    </div>
  )
}

export default Article
