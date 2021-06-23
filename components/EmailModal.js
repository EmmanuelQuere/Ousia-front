import styles from './../styles/Modal.module.scss'
const EmailModal = (props) => {

  return (
    <div className={styles.wrapper} style={{
      display: props.isModaleOpen ? 'block' : 'none',
      transform: props.isModaleOpen ? 'translateY(0vh)' : 'translateY(-100vh)'}}>
      <div className={styles.header}>
        <h2>COUCOU</h2>
        <span onClick={props.closeModalHandler} className={styles.closeBtn}>x</span>
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <p>Lorem blabla</p>
        </div>
        <div className={styles.footer}>
          <button onClick={props.closeModalHandler} className={styles.submitBtn}>Valider</button>
        </div>
      </div>
    </div>
  )
};

export default EmailModal;
