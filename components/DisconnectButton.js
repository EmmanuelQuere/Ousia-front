import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logOut } from '../redux/actions/userActions';
import Router from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const DisconnectButton = () => {
  const dispatch = useDispatch();

  const logOutUser = (event) => {
    event.preventDefault();
    dispatch(logOut());
    Cookies.remove('token');
    Cookies.remove('isLoggedIn');
    Router.push('/')
  };

  return (
    <button onClick={logOutUser} className="hover:text-gray-700"><FontAwesomeIcon icon={faSignOutAlt} /></button>
  )
};

export default DisconnectButton;
