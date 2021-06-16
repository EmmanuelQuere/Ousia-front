import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { logIn } from '../redux/actions/userActions';
import { useAlert, types } from 'react-alert';


const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const submitInfo = (event) => {
    event.preventDefault();

    const myBody = new FormData(event.target);
    const myHeaders = new Headers();

    fetch(`${process.env.url}/users/sign_in.json`, {
      method: "POST",
      headers: myHeaders,
      body: myBody
    })
    .then(response => {
      if (response.headers.get('Authorization'))
      {
        Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
        Cookies.set('isLoggedIn', true, { sameSite: 'lax' });
        dispatch(logIn(Cookies.get('token')));
        alert.show("Vous êtes connecté(e).", { type: types.SUCCESS })
        Router.push('/');
      }
      return response.json()})
    .then(response => {
      if (response.error) {
        throw Error(JSON.stringify(response.error))
      }
    })
    .catch(exception => {
      alert.show(`${exception.message}`, { type: types.ERROR })
      }
    );
  };

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center">Se connecter</h1>
        <form onSubmit={submitInfo}>
        <label htmlFor="email" className="hidden">
        E-mail
        </label>
        <input name="user[email]" id="email" type="text" placeholder="Email" className="block border border-grey-light w-full p-3 rounded mb-4"></input>
        <label htmlFor="password" className="hidden">
        Mot de passe (6 caractères minimum)
        </label>
        <input name="user[password]" id="password" type="password" placeholder="Mot de passe (6 caractères min.)" className="block border border-grey-light w-full p-3 rounded mb-4"></input>
        <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">
        Se connecter
        </button>
        </form>
      </div>
    </div>
  )
};

export default Login;
