import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from '../../../styles/Shop.module.scss'

export const getServerSidePaths = async () => {

    const res = await fetch(`http://localhost:3000/items.json`)
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: {id: post.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:3000/items/` + id + `.json`);
    const data = await res.json();
    return {
        props: {item: data}
    }
}

const Item = ({item}) => {
    return (
        <Container className="p-5">
            <Row className="text-center pt-5">
                <h2>{item.name}</h2>
                <hr className={styles.divider}/>
            </Row>
      </Container>
    )
}

export default Item