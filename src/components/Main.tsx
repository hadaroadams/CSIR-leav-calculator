import { useState } from "react";
import Calculator from "./Calculator";
import Result from "./Result";
import { calculate } from "../utils/calc";
import { outstandingDays } from "../utils/daysLeft";
import { animateScroll as scroll } from "react-scroll";

export interface ResultPop {
  dateLeaveEnds: string;
  dateWorkResume: string;
  newOutstandingDays: number | undefined;
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
  const [resultToggler, setResultToggler] = useState(false);
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
    newOutstandingDays: 0,
  });
  // console.log(finalValues);
  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const dateLeaveEnds = calculate({
      dateLeaveCommence: values.dateLeaveCommence,
      daysApplied: values.daysApplied,
    });
    const dateWorkResumes = calculate({
      dateLeaveCommence: values.dateLeaveCommence,
      daysApplied: (parseInt(values.daysApplied) + 1).toString(),
    });
    const daysLeft = outstandingDays({
      daysApplied: values.daysApplied,
      otherDeductions: values.otherDeduction,
      outStandingDays: values.outStandingDays,
      stuffType: values.stuffType,
      yearOfLastLeave: values.yearOfLastLeave,
    });
    // console.log(dateLeaveEnds, daysLeft);
    setFinalValues({
      dateLeaveEnds,
      dateWorkResume: dateWorkResumes,
      newOutstandingDays: daysLeft,
    });
    setResultToggler(true);
    scroll.scrollToBottom();
  };
  // console.log(new Date("2024-01-29"));

  return (
    <main className="bg-white flex   sm:w-[400px] w-[300px] rounded-lg shadow-xl">
      <div className="w-full">
        <Calculator
          {...values}
          setValue={setValues}
          submitHandler={submitHandler}
          setResultToggler={setResultToggler}
        />
        {resultToggler ? (
          <>
            <Result {...finalValues} />
          </>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default Main;
