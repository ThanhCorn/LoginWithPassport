import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Thanhcorn App</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://avatars.githubusercontent.com/u/99862284?s=40&v=4"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">Ngoc Thanh</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
