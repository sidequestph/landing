import React from 'react';
import { Helmet } from 'react-helmet';
// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import Services from '@/components/Services';
// import Portfolio from '@/components/Portfolio';
// import Testimonials from '@/components/Testimonials';
// import Pricing from '@/components/Pricing';
// import LeadForm from '@/components/LeadForm';
// import Footer from '@/components/Footer';
// import ScrollToTop from '@/components/ScrollToTop';
// import { Toaster } from '@/components/ui/toaster';
import ComingSoon from '@/components/ComingSoon';

function App() {
  return (
    <>
      <Helmet>
        <title>SideQuest Philippines - Elevate your digital game to the next level</title>
        <meta name="description" content="SideQuest Philippines is a web & mobile development company that specializes in creating premium arcade-style digital solutions to help gaming & tech companies level up their business." />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>
      
      <ComingSoon />
      
      {/* <div className="min-h-screen bg-arcade-dark overflow-x-hidden">
        <Header />
        
        <main>
          <div id="hero">
            <Hero />
          </div>
          
          <div id="services" className="scroll-mt-20">
            <Services />
          </div>
          
          <div id="portfolio" className="scroll-mt-20">
            <Portfolio />
          </div>
          
          <div id="pricing" className="scroll-mt-20">
            <Pricing />
          </div>

          <div id="testimonials" className="scroll-mt-20">
            <Testimonials />
          </div>
          
          <div id="contact" className="scroll-mt-20">
            <LeadForm />
          </div>
        </main>

        <Footer />
        <ScrollToTop />
        <Toaster />
      </div> */}
    </>
  );
}

export default App;