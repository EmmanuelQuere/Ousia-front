const RecapProduct = (props) => (
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
          <img className="w-full h-full rounded-full"
            src={props.product.images[0]}
            alt="icon" />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {props.product.item.name}
          </p>
        </div>
      </div>
    </td>
    <td className="text-left px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{props.product.quantity}</p>
    </td>
    <td className="text-left px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {props.product.item.price} €
      </p>
    </td>
    <td className="text-left px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {props.product.quantity * props.product.item.price} €
      </p>
    </td>
  </tr>
);

export default RecapProduct;