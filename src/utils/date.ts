// Function to get the number of days in a month
const daysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};
const weeksInMonth = (year: number, month: number) => {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const days = daysInMonth(year, month);
  return Math.ceil((firstDay + days) / 7);
};

export const monthsOptions = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const getMonthName = (month: number) => {
  return monthsOptions[month - 1];
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed in JavaScript

export const daysArray = Array.from(
  { length: daysInMonth(currentYear, currentMonth) },
  (_, i) => i + 1,
);

export const weeksArray = Array.from(
  { length: weeksInMonth(currentYear, currentMonth) },
  (_, i) => {
    const startDay = i * 7 + 1;
    const endDay = Math.min(
      startDay + 6,
      daysInMonth(currentYear, currentMonth),
    );
    return `${startDay}-${endDay} ${getMonthName(currentMonth)} ${currentYear}`;
  },
);

