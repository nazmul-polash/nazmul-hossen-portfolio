import React from 'react'
import HeroContent from '../../components/HeroContent'
import HeroImage from '../../components/HeroImage'

export default function Hero() {
   return (
      <section className="container relative mx-auto px-4 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* hero content  */}
            <HeroContent />

            {/* hero image  */}
            <HeroImage />
         </div>
      </section>
   )
}
