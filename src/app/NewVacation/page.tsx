import Button from '@/components/button/button';
import Input from '@/components/input/input';
import React from 'react';

export default function NewVacation() {
  return (
    <main className="flex justify-center items-center w-[95%]">
      <div className='p-8 bg-white h-[90%] w-[90%] rounded-md'>
        <h1>Programar nova viagem</h1>
        <form className='justify-center mt-10 grid grid-cols-3 gap-8'>
          <Input atributtesBeauty='w-full' typeInput="date" />
          <Input placeholderText="Selecione o Destino" atributtesBeauty='w-full' typeInput="text"/>
          <Input atributtesBeauty='w-full' typeInput="date"/>
        </form>
        <Button 
          text='Adicionar Viagem'
          atributtesBeauty='bg-tamarind-600 hover:bg-tamarind-900 w-full mt-4 text-white font-bold text-lg rounded'
        />
      </div>
    </main>
  )
}