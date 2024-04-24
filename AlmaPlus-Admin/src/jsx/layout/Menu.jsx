import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { ALMA_PLUS_API_URL } from '../pages/baseURL';

function Menu() {
   const navigate = useNavigate();
   if (localStorage.getItem("AlmaPlus_admin_Id") == null) {
      toast.error("Please login first...!");
      navigate(`/`);
   }

   const Logout = () => {
      localStorage.removeItem('AlmaPlus_admin_Id');
      localStorage.removeItem('AlmaPlus_admin_Email');
      localStorage.removeItem('AlmaPlus_admin_Password');
      navigate(`/`);
   }

   const [admin, setAdmin] = useState({
     
      name: '',
      profilepic: ''
   })
   var dashboardClass = window.location.pathname.match(/^\/dashboard/) ? "active" : "";
   var usersClass = window.location.pathname.match(/^\/users/) ? "active" : "";
   var instituteClass = window.location.pathname.match(/^\/institute/) ? "active" : "";
   var feedbackClass = window.location.pathname.match(/^\/feedback/) ? "active" : "";
   var companyClass = window.location.pathname.match(/^\/company/) ? "active" : "";


   const admin_Id = localStorage.getItem("AlmaPlus_admin_Id");
   const admin_email =localStorage.getItem("AlmaPlus_admin_Email");
   const getData = () => {
      const myurl = `${ALMA_PLUS_API_URL}/api/getAdminById/${admin_Id}`;
      axios({
         method: "get",
         url: myurl,
      }).then((response) => {
         console.log(response.data.data);
         if (response.data.success === true) {
            setAdmin({
               name: response.data.data[0].name,
               profilepic: response.data.data[0].profilepic
            })
         }
      });
   };

   useEffect(() => getData(), [])

   
useEffect(() => {
   document.getElementById('page-loader').style.display = 'none';
   var element = document.getElementById("page-container");
   element.classList.add("show");
}, []);

   return (
      <>
         <div id="header" className="header navbar-default">
            <div className="navbar-header">
               <Link to="/dashboard" className="navbar-brand">
                  {/* <span className="navbar-logo"/> */}
                  <img src='Logo.jpg' style={{ marginRight: '5px' }} alt="logo" />
                  <b>AlmaPlus</b> Admin</Link>
            </div>
            <ul className="navbar-nav navbar-right">
               <li className="dropdown navbar-user">
                  <a className="dropdown-toggle" data-toggle="dropdown">
                     <img src={`${ALMA_PLUS_API_URL}${admin.profilepic}`}   alt=""  style={{ width: '41px' , height:'41px' }}  />
                     <span className="d-none d-md-inline">{admin.name}</span> <b className="caret"></b>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                     <Link to="/profile" className="dropdown-item">Edit Profile</Link>
                     <a onClick={Logout} className="dropdown-item">Log Out</a>
                  </div>
               </li>
            </ul>
         </div>
         <div id="sidebar" className="sidebar">
            <div data-scrollbar="true" data-height="100%">

               <ul className="nav">

                  <li className={dashboardClass}>
                     <Link to="/dashboard" >
                        <i className="fa fa-th-large"></i>
                        <span>Dashboard</span>
                     </Link>
                  </li>
                  

  <li className={usersClass}>
                     <Link to="/users" >
                        <i className="fa fa-users"></i>
                        <span>Users</span>
                     </Link>
                  </li>
                  <li className={instituteClass}>
                     <Link to="/institute" >
                        <i className="fa fa-university"></i>
                       
                        <span>Institutes</span>
                     </Link>
                  </li>
                  <li className={companyClass}>
                     <Link to="/company" >
                        <i className="fa fa-building"></i>
                       
                        <span>Companies</span>
                     </Link>
                  </li>
                  <li className={feedbackClass}>
                     <Link to="/feedback" >
                     <i class="fa fa-comments"></i>
                        <span>Feedback</span>
                     </Link>
                  </li>

               </ul>
            </div>
         </div>

         <div className="sidebar-bg"></div>

      </>
   )
}

export default Menu
