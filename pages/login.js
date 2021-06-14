const Login = () => {
  const submitInfo = (event) => {
    event.preventDefault();

    const myBody = new FormData(event.target);
    const myHeaders = new Headers();

    fetch(`${process.env.url}/users/sign_in.json`, {
      method: "POST",
      headers: myHeaders,
      body: myBody
    })
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
