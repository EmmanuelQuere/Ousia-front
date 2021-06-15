import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { logIn } from '../redux/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();

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
          Router.push('/');
        }
        else (alert('Something went wrong'))
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitInfo}>
        <label htmlFor="email">
        E-mail
        </label>
        <input name="user[email]" id="email" type="text" placeholder="E-mail"></input>
        <label htmlFor="password">
        Mot de passe
        </label>
        <input name="user[password]" id="password" type="password" placeholder="******************"></input>
        <button type="submit">
        Se connecter
        </button>
      </form>
    </div>
  )
};

export default Login;
