import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logOut } from '../redux/actions/userActions';

const DisconnectButton = () => {
  const dispatch = useDispatch();

  const logOutUser = (event) => {
    event.preventDefault();
    dispatch(logOut());
    Cookies.remove('token');
  };

  return (
    <button onClick={logOutUser} className="border rounded bg-white hover:bg-gray-100">Se déconnecter</button>
  )
};

export default DisconnectButton;
