import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GrAddCircle } from "react-icons/gr";
import { FaRecycle } from "react-icons/fa6";

const Layout = ({ toggle, setToggle }) => {
  const nav = useNavigate()
  const location = useLocation()
  const isActive = (path) => location.pathname === path;



  return (
    <div>
      <footer className="footer">
        <div className="footerInner">
          {/* Add Item Section */}
          <div
            className="footAddDiv"
            onClick={() => nav("/add-item")}
            style={{ cursor: 'pointer' }}
          >
            <GrAddCircle
              style={{ color: isActive("/add-item") ? "green" : "black" }}
            />
            <p className="footAddItem"
              style={{ color: isActive("/add-item") ? "green" : "black" }} >
              Add Item
            </p>
          </div>

          {/* Delete Item Section */}
          <div
            className="footDelDiv"
            style={{ cursor: 'pointer' }}
            onClick={(() => nav("/delete-product"))}
          >
            <FaRecycle
              style={{ color: isActive("/delete-product") ? "red" : "black" }}
            />
            <p className="footDelItem"
              style={{ color: isActive("/delete-product") ? "red" : "black" }}>
              Delete Item
            </p>
          </div>
        </div>
      </footer>

      {/* Render Outlet */}
      <Outlet />
    </div>
  );
};

export default Layout;
