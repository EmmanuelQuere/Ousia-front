import { RichText } from 'prismic-reactjs';
import styles from './../../styles/Blog.module.scss';

const BlogImageComponent = (props) => {
  console.log(props);
  return (
    <section>
      <img src={props.image.url} alt={props.image.alt}/>
      {props.caption ? <RichText render={props.caption} /> : <p></p>}
    </section>
  )
}

export default BlogImageComponent;
