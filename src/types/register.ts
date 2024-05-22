import { SetStateAction } from "react";

export interface FormData {
  selectedDay: SetStateAction<string>;
  selectedMonth: SetStateAction<string>;
  selectedYear: SetStateAction<string>;
  email: string;
  userTag: string;
  password: string;
}
