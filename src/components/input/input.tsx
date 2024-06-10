import React from 'react'

interface InputProps {
  typeInput: string;
  atributtesBeauty: string;
  placeholderText?: string;
}

export default function Input({typeInput, atributtesBeauty, placeholderText}: InputProps): React.JSX.Element {
  return (
    <input 
      className={`${atributtesBeauty} focus:outline-tamarind-900 text-black-400 focus:ring-0 focus:text-black-950 h-10 rounded border-2 border-black-400 p-4`} 
      placeholder={placeholderText} 
      type={typeInput} 
    />
  )
} 
