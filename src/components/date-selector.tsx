import { useState } from "react";

import { months, days, years } from "@/utils/calendar";

export function DateSelector() {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const className =
    "scrollbar-thin scrollbar-thumb-gray text-left p-2 bg-gray-input rounded-md text-gray";

  const dayOptions = () => {
    const options: any = [];
    days.forEach((day) => {
      options.push(<option label={day.toString()} value={day}></option>);
    });
    return options;
  };

  const monthOptions = () => {
    const options: any = [];
    months.forEach((mouth) => {
      options.push(<option label={mouth.toString()} value={mouth}></option>);
    });
    return options;
  };

  const yearOptions = () => {
    const options: any = [];
    years.forEach((year) => {
      options.push(<option label={year.toString()} value={year}></option>);
    });
    return options;
  };

  return (
    <div className="flex gap-3 gap-x-5 w-full">
      <select
        className={className}
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        {dayOptions()}
      </select>
      <select
        className={className}
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {monthOptions()}
      </select>
      <select
        className={className}
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {yearOptions()}
      </select>
    </div>
  );
}
