import ProductCard from "../../components/ProductCard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../styles/Shop.module.scss'


export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/items.json`);
  const data = await res.json();
  return {
      props: {items: data}
  }
}

const Shop = ({items}) => {
  return (
    <Container className="p-5">
      <Row className="text-center pt-5">
        <h2>Nos produits</h2>
        <hr className={styles.divider}/>
      </Row>
      <Row xs={1} md={1} lg={2}>
        {items.map(item => <Col key={`col_${item.id}`}><ProductCard key={`card_${item.id}`} item={item}/></Col>)}
      </Row>
    </Container>
  )
}

export default Shop