export default function formattedPrice(
  price: number | string,
  locale?: string,
  currencyCode?: string,
) {
  const formatted = price?.toLocaleString(locale || "id-ID", {
    style: "currency",
    currency: currencyCode || "IDR",
    minimumFractionDigits: 0, // Set minimumFractionDigits to 0
    maximumFractionDigits: 2, // Set maximumFractionDigits to 2
  });

  // Remove trailing .00 if present
  return formatted?.replace(/\.00$/, "");
}

export const formatNumber = (number: number | string) => {
  const parts = number.toString().split(".");
  let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let decimalPart = parts.length > 1 ? "." + parts[1] : "";

  return integerPart + decimalPart;
};
