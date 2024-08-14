interface OutstandingDayProp {
  yearOfLastLeave: string;
  outStandingDays: string;
  stuffType: string;
  daysApplied: string;
  otherDeductions: string;
}

export const outstandingDays = (info: OutstandingDayProp) => {
  const {
    yearOfLastLeave,
    outStandingDays,
    stuffType,
    daysApplied,
    otherDeductions,
  } = info;
  console.log(info);

  //   const yearOfLastLeave = 2023;
  const currentYear = new Date().getFullYear();
  //   const outStandingDays = 50;
  //   const stuffType = "SS";
  //   const daysapplied = 20;
  //   const otherDeductions = 0;

  if (stuffType === "SS") {
    // const asignedLeaveDays = 42;
    const yearDifference = currentYear - parseInt(yearOfLastLeave);
    const totalYearLeave = yearDifference * 42;
    const result =
      totalYearLeave +
      parseInt(outStandingDays) -
      (parseInt(daysApplied) + parseInt(otherDeductions));
    return result;
  }
  if (stuffType === "JJ") {
    // const asignedLeaveDays = 36;
    const yearDifference = currentYear - parseInt(yearOfLastLeave);
    const totalYearLeave = yearDifference * 36;
    const result =
      totalYearLeave +
      parseInt(outStandingDays) -
      parseInt(daysApplied + otherDeductions);
    return result;
  }
};
