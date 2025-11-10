import React from 'react'
import Title from '@/components/Title'
import { portfolioSectionItems } from '@/data/data'
import PortfolioCard from '@/components/PortfolioCard'

const PortfolioSec = () => {
  return (
    <section className='section'>
        <div className="container">
        {/* Title */}
        <Title
            subtitle="Portfolio"
            title="Explore My Photography Works"
            link="View Full Portfolio"
        />
        {/* card wrapper */}
        <div className="grid gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
            {portfolioSectionItems.map((item) => (
                <PortfolioCard key={item.id} img={item.imgUrl} title={item.title} date={item.date}/>
            ))}
                
        </div>
        </div>
    </section>
  )
}

export default PortfolioSec