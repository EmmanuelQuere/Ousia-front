import Link from 'next/link';

const CheckoutMessage = ({ message, title }) => (
    <section className="pt-24 bg-white">
    <div className="px-12 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>{title}</span>
        </h1>
        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
        {message}
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <Link href="/shop" passHref>
            <a className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
              Retour à la boutique
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CheckoutMessage