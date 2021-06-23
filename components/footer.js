import React from "react";
import Link from "next/link";
import { faFacebookF, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBullseye, faStore, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'

const Footer = () => {
    return (

        <>
            <div className="bg-ousiaBlue text-white pb-4 mt-20">
                <div className="mx-auto container pt-4 lg:pt-10 flex flex-col items-center justify-center">
                    <div>
                        <Image src="/logo.png" width={92} height={92} viewBox="0 0 79 92" fill="none" />
                    </div>
                    <div className="flex flex-col md:items-center f-f-l pt-3">
                    <h2 className="text-center text-2xl tracking-wider" style={{fontFamily:"Bison, sans-serif"}}>Rejoignez la communauté des Ousiologues</h2> 
                    <div className="flex content-center justify-center flex-wrap m-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/ousiadrinks" role="button"
                        ><FontAwesomeIcon icon={faFacebookF} className="fa-2x mx-4"  />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/company/ousiadrinks/" role="button"
                        ><FontAwesomeIcon icon={faLinkedin} className="fa-2x mx-4" />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ousiadrinks/" role="button"
                        ><FontAwesomeIcon icon={faInstagram} className="fa-2x mx-4" />
                        </a>
                    </div>
                    <div>
                        <ul className="flex content-center justify-center flex-wrap">
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-ousiaBlue-light"><Link href="/about"><a><FontAwesomeIcon icon={faBullseye} className="fa-lg mx-2 " />Notre mission</a></Link></li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-ousiaBlue-light"href="#"> <FontAwesomeIcon icon={faStore} className="fa-lg mx-2" />Nos points de vente</li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-ousiaBlue-light"href="#"> <FontAwesomeIcon icon={faEnvelope} className="fa-lg mx-2" />Contactez nous</li>
                        </ul>
                    </div>
                    <div className="my-6">
                        <ul className="flex content-center justify-center flex-wrap">
                            <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs hover:text-ousiaBlue-light">Politique de confidentialité</li>
                            <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs hover:text-ousiaBlue-light">Mentions légales</li>
                            <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs hover:text-ousiaBlue-light">Conditions générales de vente</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer