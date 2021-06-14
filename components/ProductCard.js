import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Link from 'next/link';
import styles from '../styles/Shop.module.scss'

const ProductCard = (props) => {
  return (
    <Card className="m-4 text-center border-0">
      <Card.Img variant="top" src="https://via.placeholder.com/500?text=Pas+d%27image+disponible" />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          {props.item.stock < 5 && <Badge className={styles.lowStockBadge}>Derniers en stock !</Badge>}
        </Card.Text> 
        <Card.Text>
          {props.item.description}
        </Card.Text>       
        <Link href={`/shop/` + props.item.id} passHref>
          <Button variant="dark">En savoir plus</Button>
        </Link>
      </Card.Body>
    </Card>
  )
};

export default ProductCard