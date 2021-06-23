import styles from '../styles/Home.module.scss';
import Image from 'next/image';

const About = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A propos de nous</h1>
      <div className="my-3">
        <h2 className={styles.subtitle}>
          Les fondateurs
        </h2>
        <div className={styles.divider}></div>
        <div className="flex flex-row flex-wrap items-center">
          <div className="flex-auto sm:flex-1 px-2 filter drop-shadow-lg">
            <Image
              src="/ousiafounders.png"
              alt="Picture of the founders"
              width={500}
              height={500}
              className="rounded"
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
      <h2 className={styles.subtitle}>
        La marque
      </h2>
      <div className={styles.divider}></div>
      <div className="flex flex-row flex-wrap items-center">
        <div className="flex-auto sm:flex-1 px-2">
          <div className="mx-auto">
            <p>Une boisson <span className="font-bold text-red-700">Ousia</span> c'est...</p>
            <ul>
              <li className="text-left list-disc px-3 m-2">Sans alcool 🍸</li>
              <li className="text-left list-disc px-3 m-2">Prêt à boire 🚀</li>
              <li className="text-left list-disc px-3 m-2">100% naturel 🌿</li>
              <li className="text-left list-disc px-3 m-2">Peu calorique ☀️</li>
              <li className="text-left list-disc px-3 m-2">Fait en France 🇫🇷</li>
            </ul>
          </div>
        </div>
        <div className="flex-auto sm:flex-1 px-2 filter drop-shadow-lg">
          <Image
            src="/jumbotron.jpg"
            alt="Ousia products"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;
