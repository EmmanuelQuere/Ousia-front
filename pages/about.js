import styles from '../styles/Home.module.scss';
import Image from 'next/image';

const About = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A propos de nous</h1>
      <div className="my-3">
        <h2 className={styles.subtitle}>
          La marque
        </h2>
        <div className={styles.divider}></div>
        <div className="flex flex-row flex-wrap items-center">
          <div className="flex-auto sm:flex-1 px-2 filter drop-shadow-lg">
            <Image
              src="/about-ousia.JPG"
              alt="Picture of the founders"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
          <div className="flex-auto sm:flex-1 px-2">
            <blockquote className={styles.blockquote}>
            Ousia du grec « ουσία » signifie l’essence même des choses en philosophie. Avec ses cocktails, Ousia propose de revenir à l’essence même de l’apéritif qui n’est pas la consommation d’alcool mais bien le fait de se retrouver tous ensemble. Ousia s’adresse aux nombreuses personnes qui ne peuvent ou ne veulent pas consommer d’alcool et qui, par manque d’offre qualitative et festive, peuvent se sentir exclues de ce moment de convivialité partagée.
            </blockquote>
          </div>
      </div>
      </div>
      <div className="my-3">
      <h2 className={styles.subtitle}>
        Les fondateurs
      </h2>
      <div className={styles.divider}></div>
      <div className="flex flex-row flex-wrap items-center">
        <div className="flex-auto sm:flex-1 px-2">
          <blockquote className={styles.blockquote}>
          Ousia c’est la rencontre de trois personnes, Stella, Guillaume et Gonzague, qui partagent le même amour de l’apéritif. Ce qu’ils aiment par-dessus tout c’est se retrouver entourés de leurs amis et de leurs familles dans des moments de convivialité partagée. 
          Ils se sont vite rendu compte que quand on est tous ensemble à l’apéritif, tout le monde n’a pas toujours envie ou ne peut tout simplement pas consommer d’alcool, et ce, pour de multiples raisons. Les alternatives étant trop peu limitées, entre les sodas trop sucrés ou les jus de fruits pas très festifs, ils ont eu envie de créer les boissons parfaites qui permettent à tous de profiter de ces instants festifs avec autant de plaisir !
          L’idée de Ousia est d’avoir une gamme de cocktails sans alcool procurant les mêmes sensations et émotions que les équivalents alcoolisés. 
          
          Alors, prêts à vous laisser bluffer ?
          </blockquote>
        </div>
        <div className="flex-auto sm:flex-1 px-2 filter">
          <Image
            src="/about-us.jpg"
            alt="Ousia products"
            width={690}
            height={490}
            className="rounded"
          />
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;
