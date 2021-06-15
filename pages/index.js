import Image from 'next/image'

export default function Home() {
  
  return (
    <>
      <div className="container mx-auto h-screen font-mono" >
        <div className="text-center px-3 lg:px-0 bottles-img">
          <h1
            className="my-4 text-2xl md:text-3xl lg:text-5xl font-mono leading-tight"
          >
            Ousia, l'essence même de l'apéritif
        </h1>
          <p
            className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
          >
            Cocktails sophistiqués, sans alcool et prêts à boire
        </p>

          <button
            className="mx-auto lg:mx-0 hover:underline text-gray-800 font-mono rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
          >
            Nos produits
        </button>
          <a
            href="#"
            className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-mono my-2 md:my-6 py-2 lg:py-4 px-8"
          >Notre histoire</a
          >
        </div>

        <div className="flex items-center w-full mx-auto content-end">
          <div
            className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
          ></div>
        </div>
      </div>

      <section className="bg-white-100 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2
            className="w-full my-2 text-5xl font-mono-black leading-tight text-center text-gray-800"
          >
            Pourquoi Ousia ?
        </h2>
          <div className="w-full mb-4">
            <div
              className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div className="flex flex-wrap">
              <div >
                <p className="text-gray-600 mb-8">
                  L'apéritif, moment convivial et rassembleur par essence est trop souvent lié à la consommation d'alcool

                  Pourtant, de nombreuses personnes ne peuvent pas ou ne veulent pas boire d'alcool et n'ont pas le choix d'une vraie expérience alternative
            </p>
                <p className="text-gray-600 mb-8">
                  Ousia, du grec "οὐσία", désigne l'essence des choses en philosophie. Parce que, pour nous, l'essence même de l'apéritif n'est pas la consommation d'alcool mais bien de permettre à tous de se retrouver dans un moment de convivialité partagée. <br /><br />
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
      <section className="bg-gray-100 border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2
            className="w-full my-2 text-5xl -black leading-tight text-center text-gray-800"
          >
            Le mot des fondateurs
        </h2>
          <div className="w-full mb-4">
            <div
              className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
            ></div>
          </div>

          <div class="grid grid-cols-2 gap-4">

            <Image
              src="/ousiafounders.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div>
              <p className="text-gray-600 mb-8">
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
              <p className="text-gray-600 mb-8 break-normal">
                Gonzague, Entrepreneur, professeur de santé et jeune papa, le goûteur en chef de cocktails.
            </p>
              <p className="text-gray-600 mb-8 break-normal">
                Guillaume, Entrepreneur, runner et le concepteur de cocktails de l'équipe.
            </p>
              <p className="text-gray-600 mb-8 break-normal">
                Stella Ingénieure en alimentation et santé, sportive etfêtarde de l'équipe.
            </p>

            </div>

          </div>

        </div>


      </section>
    </>
  )
}
