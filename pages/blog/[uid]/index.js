import Prismic  from '@prismicio/client';
import { RichText } from 'prismic-reactjs';

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
  return (
    <div>
      <RichText render={res.data.title} />
      <section className="px-3 my-3">
        {res.data.body.map(element =>
          (element.slice_type == "text") ? <RichText render={element.primary.text} /> : <p>On s'en fout</p>
        )}
      </section>
    </div>
  )
}

export default Article
