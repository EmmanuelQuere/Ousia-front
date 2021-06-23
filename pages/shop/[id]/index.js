import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../../components/BreadCrumbs';
import { useAlert, types } from 'react-alert';

export const getServerSidePaths = async () => {

    const res = await fetch(`${process.env.url}/items.json`)
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
    const res = await fetch(`${process.env.url}/items/` + id + `.json`);
    const data = await res.json();
    return {
        props: {item: data}
    }
}

const Item = ({ item }) => {

    const userToken = useSelector(state => state.token);
    const quantity = useRef(0);
    const alert = useAlert();

    const addToCart = () => {

        if(userToken){
            fetch(`${process.env.url}/cart_items.json`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${userToken}`
                },
                body: JSON.stringify({cart_item: {item_id: `${item.id}`, quantity: quantity.current.value}})
            })
                .then(response => response.json())
                .then(response => {
                    if (response) { alert.show("Article ajouté au panier !", { type: types.SUCCESS }) }
                    else { alert.show(`Une erreur est survenue, veuillez réessayer.`, { type: types.ERROR }) }
                })
            .catch(error => alert.show(`${error.message}`, { type: types.ERROR }))
        }
        else
        {
            let visitor_cart = (JSON.parse(localStorage.getItem('visitor_cart')) || [])
            if(visitor_cart.find(element => element.id === item.id)){
                visitor_cart.find(element => element.id === item.id).quantity = visitor_cart.find(element => element.id === item.id).quantity + parseInt(quantity.current.value, 10)
            }else{
                visitor_cart.push({id: item.id, item: item, quantity: parseInt(quantity.current.value, 10)});
            }
            localStorage.setItem('visitor_cart', JSON.stringify(visitor_cart));
            alert.show("Article ajouté au panier !", { type: types.SUCCESS });
        };
    }

    return (
        <div className="container mx-auto p-20">
            <Breadcrumbs item={item}/>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-20 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={item.images[0]}></img>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex py-2">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">{item.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3">Quantité</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10" ref={quantity}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                        </span>
                                    </div>
                                    <span className="pl-3">Lot de 6 bouteilles</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">{item.price} €</span>
                                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={addToCart}>Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}

export default Item
