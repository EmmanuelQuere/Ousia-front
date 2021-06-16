import styles from './../styles/Alerts.module.scss'

const alertStyle = {
  backgroundColor: 'rgba(243, 244, 246)',
  color: 'black',
  padding: '10px',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
  width: '80vw',
  boxSizing: 'border-box'
}

const AlertTemplate = ({ style, options, message, close }) => {
  return (
    <div style={{...style }} className={styles.alert}>
      {options.type === 'info' && '!'}
      {options.type === 'success'}
      {options.type === 'error' && '! '}
      {message}
      <button onClick={close}>X</button>
    </div>
  )
}

export default AlertTemplate;
