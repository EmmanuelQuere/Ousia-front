import styles from '../../styles/Shop.module.scss'
import ProductCardEven from "../../components/ProductCardEven"
import ProductCardOdd from "../../components/ProductCardOdd"

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.url}/items.json`);
  const data = await res.json();
  return {
      props: {items: data}
  }
}

const Shop = ({ items }) => {
  return (
    <div className="container mx-auto w-2/3">
      <div className="mb-20">
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
