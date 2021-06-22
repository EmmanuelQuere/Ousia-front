import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div id={styles.jumbotron_banner} className="relative hero-image bg-right-bottom bg-cover flex" >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="relative container mx-auto mb-6 flex items-end justify-center z-10">
          <div className="content text-center p-4">
            <div className={styles.leadTitle}>Ousia, l'essence même de l'apéritif</div>
            <div className="text-3xl leading-normal mt-0 mb-5 text-gray-200 tracking-wider" style={{fontFamily:"'Bison', sans-serif"}}>Cocktails sophistiqués, sans alcool et prêts à boire</div>
            <div className="flex flex-wrap justify-center">
              <Link href="/shop"><a className={styles.homeButton}>Nos produits</a></Link>
              <Link href="/about"><a className={styles.homeButton}>Notre histoire</a></Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.container} px-6`}>
        <section className="bg-white-100 border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className={styles.title} >
              Pourquoi Ousia ?
            </h2>
            <div className={styles.divider}></div>
            <div className="flex flex-row flex-wrap items-center">
              <div className="flex-auto sm:flex-1 px-2">
                <p className="text-gray-600 mb-8">
                  L'apéritif, moment convivial et rassembleur par essence est trop souvent lié à la consommation d'alcool. Pourtant, de nombreuses personnes ne peuvent pas ou ne veulent pas boire d'alcool et n'ont pas le choix d'une vraie expérience alternative
                </p>
                <p className="text-gray-600 mb-8">
                  Ousia, du grec "οὐσία", désigne l'essence des choses en philosophie. Parce que, pour nous, l'essence même de l'apéritif n'est pas la consommation d'alcool mais bien de permettre à tous de se retrouver dans un moment de convivialité partagée.
                </p>
              </div>
              <div className="flex-auto sm:flex-1 px-2 filter drop-shadow-lg">
                <Image
                src="/ousia-pic.jpeg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded"
                />
              </div>
              </div>
            </div>
          </section>
        </div>
        <section className="bg-gray-100 border-b py-8">
          <div className={styles.container}>
          <div className="max-w-5xl mx-auto">
            <h2 className={styles.title}>
              Le mot des fondateurs
            </h2>
            <div className={styles.divider}></div>
            <div className="flex flex-row flex-wrap items-center">
              <div className="flex-auto sm:flex-1 px-2 filter drop-shadow-lg">
                <Image
                  src="/ousiafounders.png"
                  alt="Picture of the author"
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
        </div>
      </section>
    </>
  )
}
