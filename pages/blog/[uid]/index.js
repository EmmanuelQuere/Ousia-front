import Prismic  from '@prismicio/client';

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
      <h1 className="text-5xl text-center my-2">{res.data.title[0].text}</h1>
      <section className="px-3 my-3">
        <p>{res.data.body[0].primary.text[0].text}</p>
      </section>
      <section className="px-3 my-3">
        <img src={res.data.body[1].primary.image.url} />
      </section>
      <section className="px-3 my-3">
        <p>{res.data.body[2].primary.text[0].text}</p>
      </section>
    </div>
  )
}

export default Article
