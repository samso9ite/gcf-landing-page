import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import About from '../components/About/Main'
import Service from '../components/Services/Service/Main'
import ServiceDetails from '../components/Services/ServiceDetails/Main'
import Team from '../components/Teams/Team/Main'
import TeamDetails from '../components/Teams/TeamDetails/Main'
import Careers from '../components/Careers/Main'
import Faqs from '../components/Faqs/Main'
import CompareEMI from '../components/Features/CompareEMI/Main'
import HomeLoan from '../components/Features/HomeLoan/Main'
import HomeLoanEligibility from '../components/Features/HomeLoanEligibility/Main'
import LoanEligibility from '../components/Features/LoanEligibility/Main'
import MonthlyLoan from '../components/Features/MonthlyLoan/Main'
import PersonalLoan from '../components/Features/PersonalLoan/Main'
import NewsMain from '../components/News/NewsMain/Main'
import NewsDetails from '../components/News/NewsDetails/Main'
import Contact from '../components/Contact/Main'


const Routing = () => {
    const [homepage, sethomepage] = useState(false)
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/home-02" || location.pathname === "/home-03"){
        sethomepage(false)
      }else{
        sethomepage(true)
      }
    }, [location])
    
    return (
        <>
            {homepage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/servicedetails" element={<ServiceDetails />} />
                <Route path="/team" element={<Team />} />
                <Route path="/teamdetails" element={<TeamDetails />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/compareEMI" element={< CompareEMI/>} />
                <Route path="/homeloan" element={< HomeLoan />} />
                <Route path="/homeloaneligibility" element={<HomeLoanEligibility />} />
                <Route path="/loaneligibility" element={<LoanEligibility />} />
                <Route path="/monthlyloan" element={<MonthlyLoan />} />
                <Route path="/personalloan" element={<PersonalLoan />} />
                <Route path="/newsmain" element={<NewsMain />} />
                <Route path="/newsdetails" element={<NewsDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Routing