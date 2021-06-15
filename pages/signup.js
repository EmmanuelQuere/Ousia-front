import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { logIn } from '../redux/actions/userActions';

const Signup = () => {
  const dispatch = useDispatch();

  const submitInfo = (event) => {
    event.preventDefault();

    const myBody = new FormData(event.target);
    const myHeaders = new Headers();

    fetch(`${process.env.url}/users.json`, {
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
        Router.push('/');
      }
      return response.json()})
    .then(response => {
      if (response.errors) {
        throw Error(JSON.stringify(response.errors))
      }
    })
    .catch(exception => {
      let errors = JSON.parse(exception.message);
      for(let key in errors){
        for(let message in errors[key]){
          console.warn(`${key} ${errors[key][message]}`)
        }
      }
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={submitInfo}>
      <label htmlFor="email">
      E-mail
      </label>
      <input name="user[email]" id="email" type="text" placeholder="E-mail"></input>
      <label htmlFor="password">
      Mot de passe (6 caractères minimum)
      </label>
      <input name="user[password]" id="password" type="password" placeholder="******************"></input>
      <button type="submit">
      S'inscrire
      </button>
      </form>
    </div>
  )
};

export default Signup;
