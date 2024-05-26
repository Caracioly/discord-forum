import { Dispatch, SetStateAction } from "react";

import { days } from "@/utils/register/calendar";

interface DaySelectorProps {
  value?: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function DaySelector({ value, setValue }: DaySelectorProps) {
  const dayOptions = () => {
    const options: any = [];
    days.forEach((day) => {
      options.push(
        <option label={day.toString()} value={day} key={day}></option>
      );
    });
    return options;
  };

  return (
    <select
      id="day"
      className="scrollbar-thin scrollbar-thumb-gray text-left p-2 bg-gray-input rounded-md text-gray"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {dayOptions()}
    </select>
  );
}
