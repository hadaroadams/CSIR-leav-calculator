import React from "react";

interface NumberInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  placeHolder: string;
  type: string;
  discre: string;
}

const NumberInput = ({
  value,
  onChange,
  name,
  label,
  placeHolder,
  type,
  discre,
}: NumberInputProps) => {
  return (
    <div className=" text-[#000066] space-y-1">
      <label htmlFor="" className="text-[0.8em] sm:text-[1em] ">
        {label}
      </label>
      <div className="relative border  rounded-lg">
        <div className="absolute h-full text-white flex items-center font-bold z-0 px-2 bg-[#ED008C] rounded-l-lg text-  sm:text-[1em] text-[0.7em] ">
          <span>{discre}</span>
        </div>
        <input
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          type={type}
          placeholder={placeHolder}
          min={0}
          className="input input-bordered input-secondary  pr-7 pl-10 z-20 bg-transparent  w-full  text-end text-[#000066] h-10 sm:text-[1.3em] text-[1em]  "
        />
      </div>
    </div>
  );
};

export default NumberInput;
