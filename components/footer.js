import React from "react";
import { faFacebookF, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBullseye, faStore, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'

const Footer = () => {
    return (

        <>
            <div className="bg-gray-100 text-gray-600 pb-4">
                <div className="mx-auto container pt-4 lg:pt-10 flex flex-col items-center justify-center font-mono ">
                    <div>
                        <Image src="/logo.png" width={92} height={92} viewBox="0 0 79 92" fill="none" />
                    </div>
                    <div className="flex flex-col md:items-center f-f-l pt-3">
                    <h2 className="text-center font-mono text-gray-700">Rejoignez la communauté des Ousiologues</h2> 
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
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-gray-400" href="#"> <FontAwesomeIcon icon={faBullseye} className="fa-2x mx-2 " />Notre mission</li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-gray-400"href="#"> <FontAwesomeIcon icon={faStore} className="fa-2x mx-2" />Nos points de vente</li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-gray-400"href="#"> <FontAwesomeIcon icon={faEnvelope} className="fa-2x mx-2" />Contactez nous</li>
                        </ul>
                    </div>
                    <div className="my-6">
                        <ul className="flex content-center justify-center flex-wrap">
                            <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs hover:text-gray-400">Politique de confidentialité</li>
                            <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs hover:text-gray-400">Mentions légales</li>
                            <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs hover:text-gray-400">Conditions générales de ventes</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer