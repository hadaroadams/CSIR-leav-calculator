import React from "react";
import { Values } from "./Main";

const RadioInput = ({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<Values>>;
}) => {
  return (
    <div className="text-[#000066] space-y-1 ">
      <label
        htmlFor=""
        className="text-[0.8em] sm:text-[1em]"
        onChange={(e) => console.log(e)}
      >
        Staff Type
      </label>
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2  sm:text-[1.5em] text-[1]">
          <label htmlFor="" className="font-bold">
            SS
          </label>
          <input
            type="radio"
            name="radio-3"
            className="radio radio-secondary bg-transparent"
            defaultChecked
            value={"SS"}
            onChange={(e) =>
              setValue((stateValue) => {
                return {
                  ...stateValue,
                  stuffType: e.target.value as "SS" | "JJ",
                };
              })
            }
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="" className="font-bold">
            JJ
          </label>
          <input
            type="radio"
            name="radio-3"
            className="radio radio-secondary bg-transparent"
            value={"JJ"}
            onChange={(e) =>
              setValue((stateValue) => {
                return {
                  ...stateValue,
                  stuffType: e.target.value as "SS" | "JJ",
                };
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RadioInput;
