import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import Icon1 from "../../assets/admin__icon1.png";
import Icon2 from "../../assets/admin__icon2.png";

const AdminPanel = () => {
  return (
    <div>
      <aside className="admin">
        <div className="container">
          <div className="admin__style">
            <div className="admin__panel">
              <h1 className="admin__panel__title">
                <GoArrowLeft />
                Admin Dashboard
              </h1>
              <ul>
                <li>
                  <img src={Icon1} alt="Icon1" />
                  Create product
                </li>
                <li>
                  <img src={Icon2} alt="Icon2" />
                  Manage product
                </li>
                <li>
                  <img src={Icon1} alt="Icon1" />
                  Create category
                </li>
                <li>
                  <img src={Icon2} alt="Icon2" />
                  Manage category
                </li>
              </ul>
            </div>
            <button className="admin__btn">
              <IoIosLogOut />
              Log out
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminPanel;
