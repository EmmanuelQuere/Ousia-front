const Signup = () => {
  const submitInfo = (event) => {
    event.preventDefault();

    const myBody = new FormData(event.target);
    const myHeaders = new Headers();

    fetch(`${process.env.url}/users.json`, {
      method: "POST",
      headers: myHeaders,
      body: myBody
    })
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
