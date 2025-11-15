import React from 'react'
import Image from 'next/image'

interface cardProps {
    label: string;
}

const ServicesCard = ({label}: cardProps) => {
  return (
    <div>
        <div className="flex items-center gap-2 mb-3 border rounded-[5px] border-neutral-900 py-3 px-2">
            <Image
                src="/images/star-shape.svg"
                alt="check icon"
                width={30}
                height={20}
            />
            <span>{label}</span>
        </div>
    </div>
  )
}

export default ServicesCard