import { RichText } from 'prismic-reactjs';
import styles from './../../styles/Blog.module.scss';

const BlogQuoteComponent = (props) => {
  console.dir(props);
  return (
      <RichText render={props.quote}/>
  )
}

export default BlogQuoteComponent;
