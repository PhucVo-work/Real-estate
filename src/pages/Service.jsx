import React from 'react'
import ServiceHero from '../components/ServiceHero'
import HorizontalScroll from '../components/HorizontalScroll'
import WhyChooseUs from '../components/WhyChooseUs'
import detailService from "../components/DetailService"
import WorkProcess from "../components/WorkProcess"
import TrustSection from "../components/TrustSection"

const Service = () => {
  const componentsAray = [detailService, WorkProcess, TrustSection, detailService, WhyChooseUs]

  return (
    <div>
      <ServiceHero/>
      <HorizontalScroll components={componentsAray} />
      <WhyChooseUs/>
    </div>
  )
}

export default Service
