import React from 'react'

interface ButtonProps {
  atributtesBeauty: string;
  text: string;
}

export default function Button({atributtesBeauty, text}: ButtonProps) {
  return (
    <button 
      className={`${atributtesBeauty} h-10`}
    >
      {text}
    </button>
  )
}
