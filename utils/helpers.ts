// @ts-ignore
import * as lodash from "lodash";
import { Dispatch, SetStateAction } from "react";

type AnyObject = Record<string, any>;

export function customLoadashGet<T>(
  object: T,
  path: string | string[],
  defaultValue?: any
): any {
  const pathArray = Array.isArray(path) ? path : path.split(".");

  return pathArray.reduce((acc: AnyObject | undefined, key: string) => {
    return acc && acc[key] !== undefined ? acc[key] : defaultValue;
  }, object as AnyObject);
}

export const debouncedOnChange = lodash.debounce(
  (value: string, setValue: Dispatch<SetStateAction<string | null>>) => {
    if (value.length > 0) {
      setValue(value);
    } else setValue(null);
  },
  300
);

export function convertDateFormat(inputDate: string) {
  var dateParts = inputDate.split("-");
  var newDate = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
  return newDate;
}

export const dateFormat = (inputDate: string) => {
  const readableDate = new Date(inputDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Adjust date according to browser's timezone
  });

  return readableDate;
};

export const timeFormat = (inputTime: string) => {
  const formattedTime = new Date(`2000-01-01T${inputTime}`).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Adjust time according to browser's timezone
    }
  );
  return formattedTime;
};

export const timezoneFromat = (dateString: string, timeString: string) => {
  // Merge date and time strings
  const combinedDateTimeString = dateString + "T" + timeString + ":00Z";

  // Convert merged string to Date object
  const combinedDateTime = new Date(combinedDateTimeString);

  // Add an hour to the combined datetime
  combinedDateTime.setHours(combinedDateTime.getHours() + 1);

  // Format the resulting datetime
  const formattedDateTime = combinedDateTime
    .toISOString()
    .slice(0, 16)
    .replace("T", " ");

  // Convert to clock time format
  const clockTime = combinedDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Convert to clock date format
  const clockDate = combinedDateTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // Print the result
  return { formattedDateTime, clockTime, clockDate };
};
