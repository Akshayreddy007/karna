import React from 'react'
import Navbar from '../components/navbar4/Navbar5'
import SideNavbar from '../components/sidenavbar_ipd_doctor/SideNavbar';
import PastVisitOverview from '../components/ipd_doctor/PastVisitOverview';
const pastvisitoverview = () => {
    return (
        <div>
            <Navbar />
            <div className="left-side-menu">
                <SideNavbar />
            </div>
            <div className="content-page" id="content-page">
                <div className="main-content">
                    <PastVisitOverview />
                </div>
            </div>
        </div>
    )
}

export default pastvisitoverview