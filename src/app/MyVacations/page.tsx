import VacationItem from "@/components/vacationItem/vacationItem";

export default function MyVacation() {
  return (
    <main className="flex justify-center items-center w-[95%]">
      <div className='p-8 bg-white h-[90%] w-[90%] rounded-md'>
        <h1>Minhas viagens</h1>
        <div className="grid grid-flow-row gap-2 mt-4">
          <VacationItem />
          <VacationItem />
          <VacationItem />
        </div>
      </div>
    </main>
  )
}