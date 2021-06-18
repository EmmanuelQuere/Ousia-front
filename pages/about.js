import styles from '../styles/Home.module.scss';
import Image from 'next/image';

const About = () => {

  return (
    <div className={styles.container}>
      <h1 className="text-center text-5xl mt-4">A propos de nous</h1>
      <div className="my-3">
        <h2 className="w-full my-2 text-4xl font-mono-black leading-tight text-center text-gray-800 mb-2">
          Les fondateurs
        </h2>
        <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto mb-4"></div>
        <div className="flex flex-row flex-wrap items-center">
          <div className="flex-auto sm:flex-1 px-2">
            <Image
              src="/ousiafounders.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-auto sm:flex-1 px-2">
            <blockquote className={styles.blockquote}>
              Tous les trois, on aime bien prendre l'apéro. Mais ce qu'on aime avant tout c'est de le partager
              avec nos amis et familles autour de boissons sympas et de petites choses à manger.
              Aux différents stades de la vie où nous nous trouvons chacun, nous nous sommes vite rendus
              compte qu'il y avait de nombreuses situations dans lesquelles certaines personnes ne voulaient ou
              ne pouvaient pas boire d'alcool. Ce qui, parfois, peut entamer la convivialité partagée autour de ce
              moment.
            </blockquote>
          </div>
      </div>
      </div>
      <div className="my-3">
      <h2 className="w-full my-2 text-4xl font-mono-black leading-tight text-center text-gray-800 mb-2">
        La marque
      </h2>
      <div className="w-48 lg:w-1/3 border-b-4 border-red-700 h-1 mx-auto mb-4"></div>
      <div className="flex flex-row flex-wrap items-center">
        <div className="flex-auto sm:flex-1 px-2">
          <ul>
            <div className="flex flex-row">
              <li className="w-5/6 sm:w-1/2 p-6">Icone</li>
              <li className="w-1/6 sm:w-1/2 p-6">Sans alcool</li>
            </div>
            <div className="flex flex-row">
              <li className="w-5/6 sm:w-1/2 p-6">Nouvelle expérience</li>
              <li className="w-1/6 sm:w-1/2 p-6">Icone</li>
            </div>
            <div>
              <li className="inline w-5/6 sm:w-1/2 p-6">Icone</li>
              <li className="inline w-1/6 sm:w-1/2 p-6">Prêt à boire</li>
            </div>
            <div className="flex flex-row">
              <li className="w-5/6 sm:w-1/2 p-6">100% naturel</li>
              <li className="w-1/6 sm:w-1/2 p-6">Icone</li>
            </div>
            <div>
              <li className="inline w-5/6 sm:w-1/2 p-6">Icone</li>
              <li className="inline w-1/6 sm:w-1/2 p-6">Peu calorique</li>
            </div>
            <div className="flex flex-row">
              <li className="w-5/6 sm:w-1/2 p-6">Fait en France</li>
              <li className="w-1/6 sm:w-1/2 p-6">Icone</li>
            </div>
          </ul>
        </div>
        <div className="flex-auto sm:flex-1 px-2">
          <Image
            src="/jumbotron.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;
