import argentBlankLogo from "../assets/argentBankLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={argentBlankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {isSignedIn ? (
          <>
            <a className="main-nav-item" href="/user">
              <i className="fa fa-user-circle"></i>
            Tony
            </a>
            <a className="main-nav-item" href="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          <a className="main-nav-item" href="/">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}

export default Header;
