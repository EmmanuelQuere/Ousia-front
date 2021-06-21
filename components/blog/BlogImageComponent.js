import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

const BlogImageComponent = (props) => {
  console.log(props);
  return (
    <img src={props.image.url}/>
  )
}

export default BlogImageComponent;
