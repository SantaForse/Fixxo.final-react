import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import ShowcaseSection from '../sections/ShowcaseSection'
import TwoBannersSection from '../sections/TwoBannersSection'
import FlashFirstSection from '../sections/FlashFirstSection'
import FlashSecondSection from '../sections/FlashSecondSection';

const HomeView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection title1="Sale Up" title2="To 50% Off" title3="Online shopping free home delivery over $100"/>
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <TwoBannersSection titleLeft1="Pamela Reif's" titleLeft2="Top Picks" titleRight1="Let's Be" titleRight2="Conscious" />
      <FlashFirstSection flashTitle="2 FOR USD $29" />
      <FlashSecondSection flashTitle2="2 FOR USD $49" />
      <FooterSection />
    </>
  )
}

export default HomeView