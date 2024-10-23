'use client'

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function NewVacation() { 
  const router = useRouter();
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [destination, setDestination] = useState<string>('')
  const [departure, setDeparture] = useState<string>('')


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedTrips = localStorage.getItem('trips');
    const trips = storedTrips ? JSON.parse(storedTrips) : [];

    const newTrip = {
      startDate, 
      endDate,
      destination,
      departure
    };

    const updatedTrips = [...trips, newTrip];

    localStorage.setItem('trips', JSON.stringify(updatedTrips));

    router.push('MyVacations')
  }

  return (
    <div className="flex justify-center items-center w-[95%]">
      <form className='p-8 bg-white h-[90%] w-[90%] rounded-md' onSubmit={handleSubmit}>
        <h1>Programar nova viagem</h1>
        <div className='justify-center mt-10 sm:grid sm:grid-cols-4 gap-8 flex flex-col'>
          <Input atributtesBeauty='w-full' typeInput="date" onChangeFunction={(e) => setStartDate(e.target.value)}/>
          <Input placeholderText="Selecione a Saída" atributtesBeauty='w-full' typeInput="text" onChangeFunction={(e) => setDeparture(e.target.value)}/>
          <Input placeholderText="Selecione o Destino" atributtesBeauty='w-full' typeInput="text" onChangeFunction={(e) => setDestination(e.target.value)}/>
          <Input atributtesBeauty='w-full' typeInput="date" onChangeFunction={(e) => setEndDate(e.target.value)}/>
        </div>
        <Button 
          text='Adicionar Viagem'
          atributtesBeauty='bg-tamarind-600 hover:bg-tamarind-900 w-full mt-4 text-white font-bold text-lg rounded'
        />
      </form>
    </div>
  )
}