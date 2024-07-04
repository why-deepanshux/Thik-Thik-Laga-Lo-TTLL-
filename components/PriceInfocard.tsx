import Image from 'next/image';
import React from 'react'
interface Props{
    title: string;
    iconSrc: string;
    value: string;

}
const PriceInfocard = ({title, iconSrc ,value} : Props) => {
  return (
    <div className={`price-info_card border-1-[#b6dbff]`}>
        <p className='text-base text-black-100'>{title}</p>
        <div className='flex gap-1'>
            <Image src={iconSrc} alt={title} height={24} width={24}/>
            <p className="text-2xl font-bold text-secondary">{value}</p>
        </div>
      
    </div>
  )
}

export default PriceInfocard
