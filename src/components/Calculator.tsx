import React from "react";
import NumberInput from "./NumberInput";
import RadioInput from "./RadioInput";
import { Values } from "./Main";

const Calculator = ({
  dateLeaveCommence,
  daysApplied,
  otherDeduction,
  stuffType,
  yearOfLastLeave,
  outStandingDays,
  setValue,
  submitHandler,
}: Values & {
  setValue: React.Dispatch<React.SetStateAction<Values>>;
  submitHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
}) => {
  const reset = () => {
    setValue((e) => {
      return {
        daysApplied: "",
        dateLeaveCommence: "",
        yearOfLastLeave: "",
        stuffType: "SS",
        otherDeduction: "",
        outStandingDays: "",
      };
    });
  };

  return (
    <>
      <form className=" space-y-2 py-5 w-full  px-5 sm:px-10">
        <div className="flex justify-between">
          <p className="text-[#000066] sm:text-[1.3em] text-[1em] font-bold">
            Leave Calculator
          </p>
          <button
            className="border-b border-[#ED008C] text-[#ED008C]"
            onClick={reset}
          >
            clear all
          </button>
        </div>
        <NumberInput
          label=" Days Applied"
          name="days_applied"
          onChange={(e) =>
            setValue((stateValue) => {
              return { ...stateValue, daysApplied: e.target.value };
            })
          }
          placeHolder="E.g.20,5,6"
          type="number"
          discre="DAYS"
          value={daysApplied}
        />
        <NumberInput
          label="Date Of Leave Commencement"
          name="days_applied"
          placeHolder="E.g.05/04/2023"
          onChange={(e) =>
            setValue((stateValue) => {
              return { ...stateValue, dateLeaveCommence: e.target.value };
            })
          }
          type="date"
          discre="DATE"
          value={dateLeaveCommence}
        />
        <NumberInput
          label="Year Of last leave"
          name=""
          onChange={(e) =>
            setValue((stateValue) => {
              return { ...stateValue, yearOfLastLeave: e.target.value };
            })
          }
          placeHolder="E.g.2002,2014,2016"
          type="number"
          discre="YEAR"
          value={yearOfLastLeave}
        />
        <RadioInput setValue={setValue} />
        <NumberInput
          label="Outstanding Days"
          name="outstanding_days"
          onChange={(e) =>
            setValue((stateValue) => {
              return { ...stateValue, outStandingDays: e.target.value };
            })
          }
          placeHolder="E.g.20,5,6"
          type="number"
          discre="DAYS"
          value={outStandingDays}
        />
        <div>
          <NumberInput
            label="Other Deductions"
            name=""
            onChange={(e) =>
              setValue((stateValue) => {
                return { ...stateValue, otherDeduction: e.target.value };
              })
            }
            placeHolder="E.g.20,5,6"
            type="number"
            discre="DAYS"
            value={otherDeduction}
          />
          <span>(optional)</span>
        </div>
        <div className=" flex w-full justify-center">
          <button
            className="btn bg-[#000066] text-white text-lg w-[60%] hover:bg-[#020246] "
            onClick={submitHandler}
          >
            Calculate
          </button>
        </div>
      </form>
    </>
  );
};

export default Calculator;
