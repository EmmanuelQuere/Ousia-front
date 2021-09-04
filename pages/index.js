import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EmailModal from './../components/EmailModal'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [isModaleOpen, setModaleStatus] = useState(false);
  const [shouldShowModal, _setShouldShowModal] = useState(true);
  const shouldShowModalRef = useRef(shouldShowModal);
  const setShouldShowModal = data => {
    shouldShowModalRef.current = data;
    _setShouldShowModal(data);
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    const pageHeight = window.outerHeight
    if (currentPosition/pageHeight > 1 && shouldShowModalRef.current ) {
      setScrollPosition(currentPosition);
      setModaleStatus(true);
      setShouldShowModal(false)
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const closeModalHandler = () => {
    setModaleStatus(false);
  };


  const historyRef = useRef(null)
  const executeScroll = () => historyRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  const menuRef = useRef(null)
  const executeMenuScroll = () => menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <>
      <div id={styles.jumbotron_banner} ref={menuRef} className="relative hero-image bg-right-bottom bg-cover flex" >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="relative container mx-auto mb-6 flex items-end justify-center z-10">
          <div className="content text-center p-10">
            <div className={styles.leadTitle}>Ousia, des cocktails naturels avec 0% d’alcool pour 100% de convivialité !</div>
            <div className="flex flex-wrap justify-center">
              <Link href="/shop"><a className={styles.confirmButtonWarm}>Je commande !</a></Link>
            </div>
          </div>
        </div>
      </div>

      <div ref={historyRef}>
        <section className="bg-ousiaBack py-12">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className={styles.title} >
              Ousia
            </h2>
            <div className={styles.divider}></div>
            <div className="flex flex-row flex-wrap items-center pt-20 pb-12">
              <div className="flex-auto sm:flex-1 px-2 tracking-wider">
                <p className="text-gray-600 mb-8 text-center">
                  Ousia se traduit du grec par "l'essence même des choses" en philosophie. Avec sa première gamme de cocktails naturels sans alcool et directement prêts à boire, Ousia vous propose de revenir à l'essence même de l'apéritif : la convivialité d'un moment partagé !
                </p>
              </div>
              <div className="flex-auto sm:flex-1 px-3 filter drop-shadow-lg">
                <Image
                src="/ousia-pic.jpg"
                alt="Ousia bottles"
                layout="intrinsic"
                width={1000}
                height={750}
                className="rounded"
                />
              </div>
              </div>
            </div>
          </section>
        </div>
        <section className="bg-ousiaBack py-12">
          <div className={styles.container}>
          <div className="max-w-5xl mx-auto">
            <h2 className={styles.title}>
              Nos produits sont
            </h2>
            <div className={styles.divider}></div>
            <div className="flex flex-row flex-wrap items-center py-20">
              <div className="flex-auto sm:flex-1 px-2 filter">
                <Image
                  src="/visual.png"
                  alt="Ousia products"
                  width={2000}
                  height={800}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ousiaBack py-12">
          <div className={styles.container}>
          <div className="max-w-5xl mx-auto">
            <h2 className={styles.title}>
              Une petite musique avec votre cocktail ?
            </h2>
            <div className={styles.divider}></div>
            <div className="flex flex-row flex-wrap items-center py-20">
            <div className="flex-auto sm:flex-1 px-2 tracking-wider">
              <p className="text-gray-600 mb-8 pb-10">
              Où que vous soyez, profitez d’un moment de convivialité avec vos proches et les cocktails Ousia. Pour parfaire le moment, profitez de notre playlist mise à jour tous les mois en cliquant là ou en scannant le QR code au dos de votre bouteille !
              </p>
              <Link href="https://open.spotify.com/playlist/7ueYl3RFyLjgk9oClQJxK1?si=JHWD2lKGTUq4xxTjaL8dfA&dl_branch=1"><a className={styles.confirmButtonWarm}>La playlist !</a></Link>
            </div>
          </div>
        </div>
        </div>

        {isModaleOpen ? <div onClick={closeModalHandler} className={styles.modalDrop}></div> : null}
        <EmailModal isModaleOpen={isModaleOpen} closeModalHandler={closeModalHandler} />

      </section>
    </>
  )
}
