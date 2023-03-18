import { useEffect, useMemo } from "react";
import Account from "../components/Account";

function User() {
    
  useEffect(() => {
    document.getElementsByTagName("main")[0].classList.add("bg-dark");

    return () => {
      document.getElementsByTagName("main")[0].classList.remove("bg-dark");
    };
  });

  const accounts = useMemo( () => [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "2,082.79",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "10,928.42",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "184.30",
      amountDescription: "Current Balance",
    },
  ], []);

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => ( 
        <Account {...account} key={index} />))}
    </>
  );
}

export default User;
