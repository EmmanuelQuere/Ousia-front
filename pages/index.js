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
            <div className="text-5xl leading-normal text-gray-200">Ousia, l'essence même de l'apéritif</div>
            <div className="text-lg leading-normal mt-0 mb-2 text-gray-200 font-bold uppercase">Cocktails sophistiqués, sans alcool et prêts à boire</div>
            <Link href="/shop"><a className="inline-block mx-auto lg:mx-0 text-gray-600 bg-white rounded shadow-lg p-2 lg:px-4 lg:py-3 mr-1 lg:mr-3">Nos produits</a></Link>
            <Link href="/"><a className="inline-block mx-auto lg:mx-0 text-gray-600 bg-white rounded shadow-lg p-2 lg:px-4 lg:py-3 ml-1 lg:ml-3">Notre histoire</a></Link>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className="bg-white-100 border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-mono-black leading-tight text-center text-gray-800">
              Pourquoi Ousia ?
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-wrap">
                <div>
                  <p className="text-gray-600 mb-8">
                    L'apéritif, moment convivial et rassembleur par essence est trop souvent lié à la consommation d'alcool. Pourtant, de nombreuses personnes ne peuvent pas ou ne veulent pas boire d'alcool et n'ont pas le choix d'une vraie expérience alternative
                  </p>
                  <p className="text-gray-600 mb-8">
                    Ousia, du grec "οὐσία", désigne l'essence des choses en philosophie. Parce que, pour nous, l'essence même de l'apéritif n'est pas la consommation d'alcool mais bien de permettre à tous de se retrouver dans un moment de convivialité partagée.
                  </p>
                </div>
              </div>
              <Image
                src="/ousia-pic.jpeg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
              </div>
            </div>
          </section>
        </div>
        <div className={styles.container}>
        <section className="bg-gray-100 border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl -black leading-tight text-center text-gray-800">
              Le mot des fondateurs
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/ousiafounders.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            <div>
              <p className="text-gray-600 mb-8 text-justify">
                « Tous les trois, on aime bien prendre l'apéro. Mais ce qu'on aime avant tout c'est de le partager
                avec nos amis et familles autour de boissons sympas et de petites choses à manger.
                Aux différents stades de la vie où nous nous trouvons chacun, nous nous sommes vite rendus
                compte qu'il y avait de nombreuses situations dans lesquelles certaines personnes ne voulaient ou
                ne pouvaient pas boire d'alcool. Ce qui, parfois, peut entamer la convivialité partagée autour de ce
                moment.
                Parce que les consciences s'éveillent et que les comportements commencent à changer, avec Ousia,
                nous souhaitons accompagner ce mouvement en développant une gamme de boissons permettant
                à tous de se retrouver sans avoir de compromis à faire.
                Aussi, nous avons créé cette gamme de cocktails en gardant toujours à l'esprit que le français reste
                épicurien et qu'il aime avant tout se faire plaisir. C'est pour ça qu'avec Ousia, nous vous proposons
                des boissons: 100% plaisir, 100% naturelles et 100% sans alcool ! »
                Alors, prêts à vous laisser tenter par le sans alcool ?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
