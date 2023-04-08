import argentBlankLogo from "../assets/argentBankLogo.png";
import { selectFirstName, selectJwt, updateJwt } from "../features/user/userSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Link } from "react-router-dom";

function Header() {
  const firstName = useAppSelector(selectFirstName);
  const jwt = useAppSelector(selectJwt);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(updateJwt(""));
    localStorage.removeItem("token");
    sessionStorage.removeItem("token")
    window.location.reload();
  };

  return (
    <nav className="main-nav">
      <Link to="/" >
        <img
          className="main-nav-logo-image"
          src={argentBlankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {jwt ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <div className="main-nav-item" onClick={ () => handleSignOut()}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
