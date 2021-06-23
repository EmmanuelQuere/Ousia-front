import styles from './../../styles/Blog.module.scss';

const BlogEmbedComponent = (props) => {
  return (
    <section className={styles.embed}>
      <div style={{width: `${props.items[0].url.thumbnail_width}px`, height: `${props.items[0].url.thumbnail_height}px`}} dangerouslySetInnerHTML={ {__html: props.items[0].url.html} } />
    </section>
  )
}

export default BlogEmbedComponent;
