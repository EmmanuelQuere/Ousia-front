import { RichText } from 'prismic-reactjs';

const BlogTextComponent = (props) => {
  console.log(props);
  return (
      <RichText render={props.text}/>
  )
}

export default BlogTextComponent;
