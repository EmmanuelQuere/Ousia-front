import React from "react";
import ReactDOM from 'react-dom'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <>
            <footer class="bg-dark text-center text-white">
                <div class="container p-4">
                    <section class="mb-4">
                        <div class="text-center p-3" >
                           Rejoins la communauté des Ousiologues !
                        </div>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </section>

                    <section class="">
                        <form action="">

                            <div class="row d-flex justify-content-center">

                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div class="col-md-5 col-12">

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" class="form-control" />
                                        <label class="form-label" for="form5Example2">Email address</label>
                                    </div>
                                </div>

                                <div class="col-auto">

                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section class="mb-4">
                        <p>
                            Ousia, l'essence même de l'apéritif
          </p>
                    </section>

                    <section class="">

                        <div class="row">

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>



            </footer>

        </>
    )
}

export default Footer