import React from 'react'
import AboutUsNav from '../AboutUsNew/Introducing/AboutUsNav/AboutUsNav'
import Footer from '../Footer/Footer'
import RealNav from '../Login Screen/RealNav/RealNav'
import RealContactUsContent from './RealContactUsContent/RealContactUsContent'
import UpperContactUs from './UpperContactUs'

function RealContactUs() {
  return (
    <div>
        <UpperContactUs />
        <RealNav />
        <RealContactUsContent />
        <Footer />
    </div>
  )
}

export default RealContactUs