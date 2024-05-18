import { Dispatch, SetStateAction } from "react";

import { months } from "@/utils/calendar";

interface MonthSelectorProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function MonthSelector({ value, setValue }: MonthSelectorProps) {
  const monthOptions = () => {
    const options: any = [];
    months.forEach((mouth) => {
      options.push(<option label={mouth.toString()} value={mouth}></option>);
    });
    return options;
  };
  
  return (
    <select
      className="scrollbar-thin scrollbar-thumb-gray text-left p-2 bg-gray-input rounded-md text-gray"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {monthOptions()}
    </select>
  );
}
