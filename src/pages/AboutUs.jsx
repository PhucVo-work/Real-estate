import React from 'react'
import AboutHero from '../components/AboutHero'
import HorizontalScroll from '../components/HorizontalScroll'
import CoreValues from '../components/CoreValues'
import TeamSection from '../components/TeamSection'
import ClientCommitment from '../components/ClientCommitment'

const AboutUs = () => {

  const components = [ AboutHero, CoreValues]

  return (
    <div>
      <HorizontalScroll components={components} />
      <TeamSection/>
      <ClientCommitment/>
    </div>
  )
}

export default AboutUs
