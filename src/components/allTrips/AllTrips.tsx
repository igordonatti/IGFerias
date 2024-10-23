'use client'

import { Trip } from "@/types/Trip";
import { useEffect, useState } from "react";
import VacationItem from "../vacationItem/vacationItem";

export default function AllTrips () {
  const [trips, setTrips] = useState<Trip[]>([])

  useEffect(() => {
    const storedTrips = localStorage.getItem('trips')

    storedTrips ? setTrips(JSON.parse(storedTrips)) : []
  }, [])

  return (
    <div className="grid grid-flow-row gap-2 mt-4">
      {
        trips.map((trip) => {
          return <VacationItem destination={trip.destination} startDate={trip.startDate} endDate={trip.endDate} departure={trip.departure} />
        })
  
      }
    </div>
  )
}