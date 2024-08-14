export const calculate = ({
  dateLeaveCommence,
}: {
  dateLeaveCommence: string;
}) => {
  const dateleaveBegins = new Date(dateLeaveCommence);
  let daysapplied = 14;
  console.log(dateLeaveCommence);

  console.log(`date Leave commence:${dateLeaveCommence}`);
  for (let i = 0; i < daysapplied; i++) {
    {
      i === 0
        ? dateleaveBegins.setDate(dateleaveBegins.getDate())
        : dateleaveBegins.setDate(dateleaveBegins.getDate() + 1);
    }
    // dateleaveBegins.setDate(dateleaveBegins.getDate() + 1);
    if (dateleaveBegins.getDay() === 0 || dateleaveBegins.getDay() === 6) {
      //   console.log(dateleaveBegins);
      daysapplied += 1;
      // console.log(daysapplied);
      console.log("Not part");
    }

    console.log(i, daysapplied, dateleaveBegins.getDay());
    // console.log(dateleaveBegins);
    // if (dateleaveBegins.getDay()) {
    // }
  }
  //   const currentYear = new Date().getFullYear();
  //   console.log(currentYear);
  return dateleaveBegins;
};
