type ClassValue = string | false | null | undefined;

/**
 * cw ("class when") composes a className string from any number of arguments,
 * dropping every falsy value so conditional classes stay readable.
 *
 * Use it instead of template-literal interpolation for conditional classes:
 *   cw("transition-all pr-12", isOpen && "rotate-180")
 */
export const cw = (...values: Array<ClassValue>): string => {
  const truthy = values.filter((value) => Boolean(value));

  return truthy.join(" ");
};
