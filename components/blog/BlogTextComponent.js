import { RichText } from 'prismic-reactjs';
import styles from './../../styles/Blog.module.scss';

const BlogTextComponent = (props) => {
  console.dir(props);
  return (
    <section className={styles.text}>
      <RichText render={props.primary.text}/>
    </section>
  )
}

export default BlogTextComponent;
