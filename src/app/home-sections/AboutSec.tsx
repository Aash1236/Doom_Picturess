import React from 'react'
import Title from '@/components/Title'
import Divider from '@/components/Divider'
import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'
import Link from 'next/link'

const AboutSec = () => {
    return (
        <section className='section'>
            <div className="container">
                {/* title */}
                <Title subtitle='About' title="I'm Shubham Doom" link='Know More' />
                {/* divider */}
                <Divider />
                {/* wrapper */}
                <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
                    {/* banner */}
                    <figure>
                        <Image src="/images/about-section-banner.png" alt='banner' width={783} height={710} />
                    </figure>
                    {/* content */}
                    <div className="border border-neutral-900 p-6 rounded-2xl mt-5">
                        {/* wrapper */}
                        <div>
                            <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                                <Image src="/images/shape-2.svg" alt='shape' width={30} height={30} />
                                Introduction
                            </h3>
                            <p>
                                My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary,
                                to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA,
                                I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey,
                                where each photograph tells a story, and every frame is a piece of my heart.
                            </p>
                        </div>
                        {/* wrapper */}
                        <div className='grid gap-5 mt-6'>
                            <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                                <Image src="/images/shape-2.svg" alt='shape' width={30} height={30} />
                                Contact Information
                            </h3>
                            {/* links wrapper */}
                            <div className="flex gap-3 flex-col lg:flex-row lg:gap-10">
                                {/* email */}
                                <div>
                                    <p>Email</p>
                                    <a href="mailto:shubhamdoom@gmail.com" className="">shubhamdoom@gmail.com</a>
                                </div>
                                {/* phone */}
                                <div>
                                    <p>Contact Number</p>
                                    <a href="tel:+910000000000" className="">+91 0000000000</a>
                                </div>
                            </div>
                            {/* buttons wrapper */}
                            <div className="flex gap-3 justify-between lg:items-center lg:flex-row flex-col flex-wrap">
                                {/* social icons */}
                                <SocialIcons />
                                <div className="flex gap-4 flex-wrap">
                                    <Link href='#' className="primary-btn w-full text-center">Lets's Work</Link>
                                    <Link href='#' className="primary-btn w-full text-center">Sample Work</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AboutSec