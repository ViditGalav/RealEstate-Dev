import React from 'react';
import MainDisplay from '../components/showCase/MainDisplay';
import WhatWeDo from '../components/showCase/WhatWeDo';
import PartnersTrust from '../components/showCase/PartnersTrust';
import Features from '../components/showCase/Features';
import Pricing from '../components/showCase/Pricing';
import Footer from '../components/showCase/Footer';

export default function MainPage() {
  return (
    <>
      <MainDisplay />
      <WhatWeDo />
      <PartnersTrust />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}
