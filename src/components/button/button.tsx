'use client'

import React from 'react'

interface ButtonProps {
  atributtesBeauty: string;
  text: string;
  handleClick?: () => void;
}

export default function Button({atributtesBeauty, text, handleClick}: ButtonProps) {
  return (
    <button 
      className={`${atributtesBeauty} h-10`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
