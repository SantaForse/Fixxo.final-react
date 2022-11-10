import React, {useContext} from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { FeaturedProductsContext, FlashProductsContext } from '../contexts/contexts'
import ShowcaseSection from '../sections/ShowcaseSection'
import TwoBannersSection from '../sections/TwoBannersSection'
import FlashFirstSection from '../sections/FlashFirstSection'
import FlashSecondSection from '../sections/FlashSecondSection'
import SupportSection from '../sections/SupportSection';

const HomeView = () => {
  const featuredProducts = useContext(FeaturedProductsContext)
  const flashProducts = useContext(FlashProductsContext)
  window.top.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection title1="Sale Up" title2="To 50% Off" title3="Online shopping free home delivery over $100"/>
      <ProductGridSection title="Featured Products" items={featuredProducts} />
      <TwoBannersSection titleLeft1="Pamela Reif's" titleLeft2="Top Picks" titleRight1="Let's Be" titleRight2="Conscious" />
      <FlashFirstSection flashTitle="2 FOR USD $29" items={flashProducts}/>
      <FlashSecondSection flashTitle2="2 FOR USD $49" items={flashProducts} />
      <SupportSection firstH1="Customer Support" secondH1="Secured Payments" thirdH1="Free Home Delivery" fourthH1="30 Day Returns" 
                      smallTitle1="Village did removed enjoyed" smallTitle2="Village did removed enjoyed" smallTitle3="Village did removed enjoyed" smallTitle4="Village did removed enjoyed"
                      underTitle1="explain talking." underTitle2="explain talking." underTitle3="explain talking." underTitle4="explain talking."  />
      <FooterSection />
    </>
  )
}

export default HomeView