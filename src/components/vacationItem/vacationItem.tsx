import { Trip } from "@/types/Trip";
import { LuArrowRight } from "react-icons/lu";

export default function VacationItem({startDate, endDate, destination, departure}: Trip) {
  return (
    <main className="rounded-r-sm bg-tamarind-100 h-10 border-l-2 text-tamarind-900 border-l-tamarind-900">
      <div className="grid grid-flow-col grid-cols-5 align-middle h-full items-center pl-4  font-bold">
        <span>{departure}</span>
        <LuArrowRight className="text-tamarind-900"/>
        <span>{destination}</span>
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>
    </main>
  )
}