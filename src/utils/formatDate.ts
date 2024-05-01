export default function formatMonthYear(
  dateString: string,
  show: "all" | "month year" = "month year",
): string {
  if (dateString === null) {
    return "NA";
  }
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (adding 1 as months are zero-based) and pad with leading zero if necessary
  const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

  if (show === "all") {
    return `${day}/${month}/${year}`;
  }
  return `${month} ${year}`;
}
