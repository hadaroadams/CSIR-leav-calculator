import { dateOfHolidays } from "./holidays";

export const calculate = ({
  dateLeaveCommence,
  daysApplied,
}: {
  dateLeaveCommence: string;
  daysApplied: string;
}) => {
  const dateleaveEnds = new Date(dateLeaveCommence);
  let daysapplied = parseInt(daysApplied);
  //   console.log(dateLeaveCommence);

  //   console.log(`date Leave commence:${dateLeaveCommence}`);
  for (let i = 0; i < daysapplied; i++) {
    {
      i === 0
        ? dateleaveEnds.setDate(dateleaveEnds.getDate())
        : dateleaveEnds.setDate(dateleaveEnds.getDate() + 1);
    }
    // dateleaveEnds.setDate(dateleaveEnds.getDate() + 1);
    if (dateleaveEnds.getDay() === 0 || dateleaveEnds.getDay() === 6) {
      //   console.log(dateleaveEnds);
      daysapplied += 1;
      // console.log(daysapplied);
      console.log("Weekend");
    }
    const isHoliday = dateOfHolidays.some(
      (e) => dateleaveEnds.toString() === new Date(e).toString()
    );
    console.log(isHoliday);
    // console.log(new Date("2024-03-06"));
    // console.log(dateleaveEnds);
    // console.log(dateleaveEnds.toString() === new Date("2024-03-06").toString());
    // console.log(new Date("2024-03-06"), dateleaveEnds);
    if (isHoliday) {
      daysapplied += 1;
      console.log("Holiday");
    }
    console.log(i, daysapplied, dateleaveEnds.getDay());
    // console.log(dateleaveEnds);
    // if (dateleaveEnds.getDay()) {
    // }
  }
  //   const currentYear = new Date().getFullYear();
  //   console.log(currentYear);
  return formatDateToYYYYMMDD(dateleaveEnds);
};

function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-11, so add 1
  const day = String(date.getDate()).padStart(2, "0"); // getDate() returns the day of the month

  return `${day}/${month}/${year}`;
}
