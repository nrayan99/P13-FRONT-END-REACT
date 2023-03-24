import { useEffect, useMemo, useState } from "react";
import Account from "../components/Account";
import {
  selectFirstName,
  selectLastName,
  updateFirstName,
  updateLastName,
} from "../features/user/userSlice";

import { useAppSelector, useAppDispatch } from "../app/hooks";

function User() {
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);
  const dispatch = useAppDispatch();

  const [editFirstName, setEditFirstName] = useState<string>("");
  const [editLastName, setEditLastName] = useState<string>("");
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const accounts = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    document.getElementsByTagName("main")[0].classList.add("bg-dark");

    return () => {
      document.getElementsByTagName("main")[0].classList.remove("bg-dark");
    };
  });

  function handleChange() {
    if (editFirstName.length) {
      dispatch(updateFirstName(editFirstName));
    }
    if (editLastName.length) {
      dispatch(updateLastName(editLastName));
    }
    setShowEdit(false);
  }

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <button onClick={() => setShowEdit(!showEdit)} className="edit-button">
          Edit Name
        </button>
        {showEdit ? (
          <>
            <div className="edit-inputs">
              <input
                onChange={(e) => setEditFirstName(e.target.value)}
                type="text"
                placeholder={firstName}
              />
              <input
                onChange={(e) => setEditLastName(e.target.value)}
                type="text"
                placeholder={lastName}
              />
            </div>
            <div className="edit-actions">
              <button onClick={() => handleChange()}>Save</button>
              <button onClick={() => setShowEdit(false)}>Cancel</button>
            </div>
          </>
        ) : null}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <Account {...account} key={index} />
      ))}
    </>
  );
}

export default User;
