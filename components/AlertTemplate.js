import styles from './../styles/Alerts.module.scss'

const AlertTemplate = ({ style, options, message, close }) => {
  return (
    <div style={{...style }} className={`${styles.alert} ${styles[options.type]}`}>
      {options.type === 'info' && '!'}
      {options.type === 'success'}
      {options.type === 'error' && `! `}
      {message}
      <button onClick={close}>X</button>
    </div>
  )
}

export default AlertTemplate;
