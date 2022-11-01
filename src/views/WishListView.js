import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'


const WishListView = () => {
  window.top.document.title = 'Wish List | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default WishListView