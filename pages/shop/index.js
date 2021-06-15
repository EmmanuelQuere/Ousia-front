import ProductCardEven from "../../components/ProductCardEven"
import ProductCardOdd from "../../components/ProductCardOdd"
import styles from '../../styles/Shop.module.scss'


export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/items.json`);
  const data = await res.json();
  return {
      props: {items: data}
  }
}

const Shop = ({ items }) => {
  return (
    <div className="container mx-auto p-20">
      <div>
        <h2 className={styles.title}>Nos produits</h2>
        <hr className={styles.divider}/>
      </div>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 antialiased">
        {items.map((item, index) => (index + 1) % 2 === 0 ? <div key={`col_${item.id}`}><ProductCardEven key={`card_${item.id}`} item={item} index={index+1}/></div> : <div key={`col_${item.id}`}><ProductCardOdd key={`card_${item.id}`} item={item} index={index+1}/></div>)}
      </section>
    </div>
  )
}

export default Shop