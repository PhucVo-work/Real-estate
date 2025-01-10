import React from 'react'
import ServiceHero from '../components/servicePage/ServiceHero'
import HorizontalScroll from '../components/HorizontalScroll'
import WhyChooseUs from '../components/servicePage/WhyChooseUs'
import detailService from "../components/servicePage/DetailService"
import WorkProcess from "../components/servicePage/WorkProcess"

const Service = () => {
  const componentsAray = [detailService, WorkProcess]

  return (
    <div>
      <ServiceHero/>
      <HorizontalScroll components={componentsAray} />
      <WhyChooseUs/>
    </div>
  )
}

export default Service
