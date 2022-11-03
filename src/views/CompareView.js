import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'



const CompareView = () => {
  window.top.document.title = 'Compare | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Compare" />
      <FooterSection />
    </>
  )
}

export default CompareView