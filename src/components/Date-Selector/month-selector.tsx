import { Dispatch, SetStateAction } from "react";

import { months } from "@/utils/register/calendar";

interface MonthSelectorProps {
  value?: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function MonthSelector({ value, setValue }: MonthSelectorProps) {
  const monthOptions = () => {
    const options: JSX.Element[] = [];
    Object.entries(months).forEach(([monthName, monthValue]) => {
      options.push(
        <option key={monthValue} value={monthValue}>
          {monthName}
        </option>
      );
    });
    return options;
  };

  return (
    <select
      id="month"
      className="scrollbar-thin scrollbar-thumb-gray text-left p-2 bg-gray-input rounded-md text-gray"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {monthOptions()}
    </select>
  );
}
