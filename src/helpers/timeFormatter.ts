export const timeFormatter = (timeStart: string, timeEnd: string = "Present"): string => {
  let formatted: string;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [startMonth, startYear] = timeStart.split("/");
  const [endMonth, endYear] = timeEnd.split("/");

  if (timeEnd !== "Present" && startYear === endYear) {
    formatted = `${months[Number(startMonth) - 1]} - ${months[Number(endMonth) - 1]} ${endYear}`;
  } else if (timeEnd === "Present") {
    formatted = `${months[Number(startMonth) - 1]} ${startYear} - Present`;
  } else {
    formatted = `${months[Number(startMonth) - 1]} ${startYear} - ${months[Number(endMonth) - 1]} ${endYear}`;
  }

  return formatted;
};
