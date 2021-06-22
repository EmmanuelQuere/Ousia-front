import { RichText } from 'prismic-reactjs';
import styles from './../../styles/Blog.module.scss';

const BlogQuoteComponent = (props) => {
  console.dir(props);
  return (
    <section className={styles.quote}>
      <RichText render={props.primary.quote}/>
    </section>
  )
}

export default BlogQuoteComponent;
