import { RichText } from 'prismic-reactjs';
import styles from './../../styles/Blog.module.scss';

const BlogImageComponent = (props) => {
  console.log(props);
  return (
    <section className={styles.image}>
      <img src={props.primary.image.url} alt={props.primary.image.alt}/>
      {props.primary.caption ? <RichText render={props.primary.caption} /> : <p></p>}
    </section>
  )
}

export default BlogImageComponent;
