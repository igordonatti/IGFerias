import Image from 'next/image'
import React from 'react'
import { LuCalendarPlus } from 'react-icons/lu'
import { LuPlane } from "react-icons/lu";
import icon from '@/assets/icon.svg'
import './menu.css'
import Link from 'next/link';

export const Menu = () => {
  return (
    <div className="w-20 min-h-screen items-center bg-tamarind-900 rounded-r-sm flex flex-col gap-6">
        <Image src={icon} alt="IGFerias Logo"/>
        <div className='tooltip-container'>
          <Link href={'/NewVacation'} >
            <LuCalendarPlus color='white' size={'24px'} cursor='pointer'/>
            <span className='tooltip-text bg-tamarind-600'>Agendar Viagem</span>
          </Link>
        </div>
        <div className="tooltip-container">
          <Link href={'/MyVacations'}>
            <LuPlane color='white' size={'24px'} cursor='pointer'/>
            <span className='tooltip-text bg-tamarind-600'>Minhas Viagens</span>
          </Link>
        </div>
    </div>
  )
}
