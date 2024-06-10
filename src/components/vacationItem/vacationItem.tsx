import { LuArrowRight } from "react-icons/lu";

export default function VacationItem() {
  return (
    <main className="w-full rounded-r-sm bg-tamarind-100 h-10 border-l-2 text-tamarind-900 border-l-tamarind-900">
      <div className="flex align-middle h-full items-center p-4 gap-10 font-bold">
        <span>São Paulo</span>
        <LuArrowRight className="text-tamarind-900"/>
        <span>Maceió</span>
        <span>12/12/2024</span>
        <span>24/12/2024</span>
      </div>
    </main>
  )
}