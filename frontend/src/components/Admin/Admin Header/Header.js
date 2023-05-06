import React from "react";
import { NavLink } from 'react-router-dom'
import './Header.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuth} from '../../../context/auth'
const Header = () => {
 

  const [auth, setauth] = useAuth();
  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
      userID:"",
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
    localStorage.removeItem("cart old id");
    localStorage.removeItem("cart new Items");
    toast.success("Logout");
  };
  return (
    <>
    <ToastContainer/>
      <header className="admin-header">
        {/* <div>
          <h5>Dashboard</h5>
        </div> */}
          <nav>  
              <ul>
                {/* <NavLink to='/dashboard/admin//products' ><li>Porduct Manage</li></NavLink> */}
                <NavLink to='/admin/dashboard/' ><li>Dashboard</li></NavLink>
                <NavLink to='/admin/dashboard/product' ><li>Product  Manage</li></NavLink>
                <NavLink to='/admin/dashboard/blog' ><li>Blog Manage</li></NavLink>
                <NavLink to='/admin/dashboard/media' ><li>Media Manage</li></NavLink>
                {/* <NavLink to='/admin/dashboard/user' ><li>Users Manage</li></NavLink> */}
                <NavLink onClick={handleLogout} to='/' ><li>Logout</li></NavLink>
              </ul>
          </nav>
      </header>

      
    </>
  );
};

export default Header;
