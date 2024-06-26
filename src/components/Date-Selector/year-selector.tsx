import { Dispatch, SetStateAction } from "react";

import { years } from "@/utils/register/calendar";

interface YearSelectorProps {
  value?: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function YearSelector({ value, setValue }: YearSelectorProps) {
  const yearOptions = () => {
    const options: any = [];
    years.forEach((year) => {
      options.push(
        <option label={year.toString()} value={year} key={year}></option>
      );
    });
    return options;
  };

  return (
    <select
      id="year"
      className="scrollbar-thin scrollbar-thumb-gray text-left p-2 bg-gray-input rounded-md text-gray"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {yearOptions()}
    </select>
  );
}
