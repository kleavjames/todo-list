import format from "date-fns/format";

const DEFAULT_FORMAT = "MMM dd, yyyy";

export const formattedDate = (date: string | Date) => {
  let formatDate = date;

  if (typeof formatDate === "string") {
    formatDate = new Date(formatDate);
  }

  return format(formatDate, DEFAULT_FORMAT);
};
