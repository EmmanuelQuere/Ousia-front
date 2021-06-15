import Link from 'next/link';

const ProductCardEven = (props) => {
  return (
    <Link href={`/shop/` + props.item.id} passHref>
      <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-orange py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
        <div className="min-h-62">
            <img className="mx-auto" src="https://demo.happyaddons.com/wp-content/uploads/2019/05/card-image13a.png" alt=""></img>
        </div>
        <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">{props.index < 10 ? `0${props.index}` : props.index}.</h1>
        <h2 className="font-bold mb-5 text-xl text-gray-800">{props.item.name}</h2>
        <p className="text-sm leading-relaxed mb-5 text-gray-700">
          {props.item.description}
        </p>
        <p className="font-bold text-gray-800">{props.item.price} €</p>
      </article>
    </Link>
  )
};

export default ProductCardEven