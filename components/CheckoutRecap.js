import styles from '../styles/Shop.module.scss'
import RecapProduct from './RecapProduct';

const CheckoutRecap = ({ handleClick, cartDetails }) => {
  const totalPrice = (cart) => {
    return Object.values(cart).reduce((t, { total }) => t + total, 0)
  }
    return(
      <div className="container mx-auto text-center p-20">
        <h1 className={styles.title}>Récapitulatif de commande</h1>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                      className="px-2 sm:px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Produit
                  </th>
                  <th
                      className="px-2 sm:px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Quantité
                  </th>
                  <th
                      className="px-2 sm:px-5  py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Prix unitaire
                  </th>
                  <th
                      className="px-2 sm:px-5  py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Prix total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartDetails.map(cartItem => <RecapProduct key={cartItem.id} product={cartItem} />)}
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">Frais de livraison</td>
                  <td colSpan="3" className="px-5 py-5 border-b border-gray-200 bg-white text-sm">10 €</td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">Total de la commande</td>
                  <td colSpan="3" className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">{totalPrice(cartDetails)+10} €</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase p-10 w-1/8 sm:w-1/2" type="button" id="checkout-button" role="link" onClick={handleClick}>
          Payer ma commande
        </button>
      </div>
    )
  };
export default CheckoutRecap