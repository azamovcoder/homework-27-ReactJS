import "./editUser.scss";

import React, { useEffect, useState } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { editUser } from "../../context/action";
import { useDispatch } from "react-redux";

const initialState = {
  id: 0,
  name: "",
  profession: "",
  age: "",
  gender: "",
};

const EditUser = ({ data, setClose }) => {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id, name, profession, age, gender } = data;
    setUserData({ id, name, profession, age, gender });
  }, [data]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    dispatch(editUser(userData));
    setClose(null);
  };
  return (
    <>
      <div className="edit__user">
        <form className="edit__user__form" onSubmit={handleEditUser} action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="name"
          />
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            name="profession"
            value={userData.profession}
            onChange={handleChange}
            placeholder="profession"
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
            placeholder="age"
          />
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            id=""
          >
            <option value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <div className="edit__user__form__buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setClose(null)}>
              Cancel
            </button>
          </div>
        </form>
        <button
          className="edit__user__close-btn"
          onClick={() => setClose(null)}
        >
          <IoIosCloseCircleOutline />
        </button>
      </div>
    </>
  );
};

export default EditUser;
