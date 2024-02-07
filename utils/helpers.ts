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
    }
  );
  return formattedTime;
};
