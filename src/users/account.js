import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Signup from "./signup";
import Signin from "./signin";

function Account() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };


  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }

  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({
              ...account,
              password: e.target.value
            })} />
          <input value={account.firstName}
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })} />
          <input value={account.lastName}
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })} />
          {/* <input value={account.dob}
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })} /> */}
          <input value={account.email}
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })} />
          <select value={account.role}
            onChange={(e) => setAccount({
              ...account,
              role: e.target.value
            })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary w-100">
            Save
          </button>
          <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
          <button onClick={signout} className="btn btn-danger w-100">
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;

