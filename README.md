# Ousia -- Client application

## About

Ousia reinvents the way cocktails are enjoyed, offering sophisticated non-alcoholic alternatives. Inspired by classics or pure creations, each of the cocktails in the range is designed to be a complex and nuanced alternative to an alcoholic equivalent. Find out more about the brand [here](https://www.facebook.com/ousiadrinks/)

### The app

This web application includes the following features:
* A comprehensive landing page provides all users with information on the Ousia brand and founders.
* A store for Ousia products: guests can add items to their cart, delete and edit their quantities, but orders can only be placed by authenticated users. Users can sign in and sign up on the website. Orders are paid for via Stripe. A connected user has access to a dashboard where they can visualize and edit their profile information, as well as visualize a summary of their past orders.
* A map of store locations: all users can visualize a map of Ousia sales points, with a distinction between retailers and restaurants/bars offering the products.
* A blog: all users can access articles published by the Ousia teams detailing their entrepreneurial adventure, updates on the launch of their products, new launches and features...
* A modal offering users to subscribe to a newsletter when scrolling on the landing page.

Find the app in production on Heroku [here](https://ousia-front.herokuapp.com/) and the admin interface [here](https://ousia-back.herokuapp.com/)!

### Technical specs

This Next.js app relies on a Ruby on Rails back-end API server available [here](https://github.com/EmmanuelQuere/Ousia-back). It was built with Next 10.2 and React 17.0.

We chose Next.js instead of basic React for Search Engine Optimization purposes, which was a strong concern for the Ousia teams. Server-side rendering enabled by Next.js makes the app more efficient in this regard than a single-page application.

It uses Redux and the js-cookie module for global state management. Styles use the Tailwind CSS library, and FontAwesome for icons.

Payments are managed via Stripe. The interactive map is based upon Mapbox. Blog articles are displayed through Prismic and an attached headless CMS.

## How to run locally

After cloning this repository (or downloading and unzipping it), run `npm install` in the CLI to install necessary modules. Environment variables required are a Stripe and Mapbox API keys, which you can add to the `.env.local` file.
Run the `npm run dev` command to start the server on local port 3005.

## Team

* [Ariane](https://github.com/arejl)
* [Caroline](https://github.com/Caro407)
* [Emmanuel](https://github.com/EmmanuelQuere)
* [Erwann](https://github.com/erwannlenoach)
