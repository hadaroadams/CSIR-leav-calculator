import { useState } from "react";
import Calculator from "./Calculator";
import Result from "./Result";
import { calculate } from "../utils/calc";
import { outstandingDays } from "../utils/daysLeft";

export interface ResultPop {
  dateLeaveEnds: string;
  dateWorkResume: string;
  newOutstandingDays: string;
}
export interface Values {
  daysApplied: string;
  dateLeaveCommence: string;
  yearOfLastLeave: string;
  stuffType: "SS" | "JJ";
  otherDeduction: string;
  outStandingDays: string;
}

const Main = () => {
  const [values, setValues] = useState<Values>({
    daysApplied: "",
    dateLeaveCommence: "",
    yearOfLastLeave: "",
    stuffType: "SS",
    otherDeduction: "",
    outStandingDays: "",
  });
  const [finalValues, setFinalValues] = useState<ResultPop>({
    dateLeaveEnds: "",
    dateWorkResume: "",
    newOutstandingDays: "",
  });
  console.log(finalValues);
  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const dateLeaveEnd = calculate({
      dateLeaveCommence: values.dateLeaveCommence,
    });
    const daysLeft = outstandingDays({
      daysApplied: values.daysApplied,
      otherDeductions: values.otherDeduction,
      outStandingDays: values.outStandingDays,
      stuffType: values.dateLeaveCommence,
      yearOfLastLeave: values.yearOfLastLeave,
    });
    console.log(dateLeaveEnd, daysLeft);
  };

  return (
    <main className="bg-white flex   sm:w-[400px] w-[300px] rounded-lg shadow-xl">
      <div className="w-full">
        <Calculator
          {...values}
          setValue={setValues}
          submitHandler={submitHandler}
        />
        <Result {...finalValues} />
      </div>
    </main>
  );
};

export default Main;
