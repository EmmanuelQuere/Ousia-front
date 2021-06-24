import styles from './../styles/Modal.module.scss'
const EmailModal = (props) => {

  const handleEmail = (event) => {
    event.preventDefault();
    const myBody = new FormData(event.target);

    fetch(`${process.env.url}/newsletter_subscribers.json`, {
      method: "POST",
      body: myBody
    })
    props.closeModalHandler()
  }

  return (
    <div className={`${styles.wrapper}`} style={{
      display: props.isModaleOpen ? 'flex' : 'none',
      }}>
      <div className={`${styles.imageWrapper} w-1/3`}>

      </div>

      <div className={`${styles.content} md:w-2/3`}>
        <div className={styles.header}>
          <h2>Inscrivez-vous à notre newsletter&nbsp;!</h2>
          <span onClick={props.closeModalHandler} className={styles.closeBtn}>x</span>
        </div>
        <div className={`${styles.body}`}>
          <div className={styles.divider}></div>
          <div className="flex flex-col justify-between h-full">
            <h4>Notre projet vous intéresse ?</h4>
            <p>Inscrivez vous à notre newsletter afin que l'on vous tienne au courant de son évolution !</p>
            <form className={styles.form} onSubmit={handleEmail}>
              <input type="email" name="email" placeholder="Email" className={styles.input}/>
              <input type="submit" value=">" className={styles.submitBtn}></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EmailModal;
