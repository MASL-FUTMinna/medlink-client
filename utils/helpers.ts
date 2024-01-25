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
