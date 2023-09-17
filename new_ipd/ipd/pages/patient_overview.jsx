import React from 'react'
import Navbar from '../components/navbar4/Navbar5'
import SideNavbar from '../components/sidenavbar_ipd_doctor/SideNavbar';
import Patient_Overview from '../components/ipd_doctor/Patient_Overview';

const patient_overview = () => {
    return (
        <div>
            <Navbar />
            <div className="left-side-menu">
                <SideNavbar />
            </div>
            <div className="content-page" id="content-page">
                <div className="main-content">
                    <Patient_Overview />
                </div>
            </div>
        </div>
    )
}

export default patient_overview