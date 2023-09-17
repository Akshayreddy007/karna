import React from 'react'
import Users_View from '../components/admin/users/Users_View'
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
const users_view = () => {
    return (
        <div>
            <Navbar2 />
            <div className="left-side-menu">
                <SideNavbar />
            </div>
            <div className="content-page">
                <div className="main-content">
                    <Users_View />
                </div>
            </div>
        </div>
    )
}

export default users_view