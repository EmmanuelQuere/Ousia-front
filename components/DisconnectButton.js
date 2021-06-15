import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logOut } from '../redux/actions/userActions';

const DisconnectButton = () => {
  const dispatch = useDispatch();

  const logOutUser = (event) => {
    event.preventDefault();
    dispatch(logOut());
    Cookies.remove('token');
    Cookies.remove('isLoggedIn');
  };

  return (
    <button onClick={logOutUser}>Se déconnecter</button>
  )
};

export default DisconnectButton;
