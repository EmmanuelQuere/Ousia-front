import Prismic from '@prismicio/client';
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
      <h1>COUCOU ANOU</h1>
      {res.map(article =>
        <p key={article.id}>{article.uid}</p>
      )}
    </div>
  )
}

export default Blog;
