import "./Users.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditUser from "../editUser";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import { removeUser } from "../../context/action";

function Users() {
  const [editUser, setEditUser] = useState(null);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div className="users__wrapper">
        {userData
          ?.map((user) => (
            <div key={user.id} className="users__card">
              <img src={user.gender === "male" ? male : female} alt="img" />
              <h2> {user.name}</h2>
              <p>Profession: {user.profession}</p>
              <p>Age: {user.age} years old</p>
              <div className="users__card__buttons">
                <button onClick={() => dispatch(removeUser(user))}>
                  <MdDeleteOutline />
                </button>
                <button
                  className="users__card__edit-btn"
                  onClick={() => setEditUser(user)}
                >
                  <FaUserEdit />
                </button>
              </div>
            </div>
          ))
          .reverse()}
      </div>
      {editUser ? <EditUser data={editUser} setClose={setEditUser} /> : <></>}
    </>
  );
}

export default Users;
