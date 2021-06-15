import React from "react";
import ReactDOM from 'react-dom'
import { faFacebookF, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBullseye, faStore, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'

const Footer = () => {
    return (

        <>
            <div className=" bg-gray-200  pb-12">
                <div className="mx-auto container pt-10 lg:pt-10 flex flex-col items-center justify-center mt-4 font-mono ">
                    <div>
                        <Image src="/logo.png" width={92} height={92} viewBox="0 0 79 92" fill="none" />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                    <h2 className="font-size text-sm font-mono ">Rejoignez la communauté des Ousiologues</h2> 
                        <div className="md:flex items-center mb-6 md:mt-4 text-base text-color f-f-l">
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
                        <div className="my- text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"></li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 " href="#"> <FontAwesomeIcon icon={faBullseye} className="fa-2x mx-2" />Notre mission</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"href="#"> <FontAwesomeIcon icon={faStore} className="fa-2x mx-2" />Nos points de vente</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"href="#"> <FontAwesomeIcon icon={faEnvelope} className="fa-2x mx-2" />Contactez nous</li>
                            </ul>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"></li>
                                <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs">Politique de confidentialité</li>
                                <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs">Mentions légales</li>
                                <li className="cursor-pointer pt-4 lg:py-0 mx-4 text-xs">Conditions générales de ventes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer