export const breakpoints = {
  "xs-phone": "20em", // 320px
  "f-phone": "28.125em", // 450px
  "m-phone": "32.5em", // 520px
  "s-phone": "37.5em", // 600px
  "tab-port": "56.25em", // 900px
  "tab-land": "75em", // 1200px
  "big-desktop": "112.5em", // 1800px
};

export const respond = (breakpoint, type = "max") => {
  const value = breakpoints[breakpoint];
  if (!value) return "";

  if (type === "max") return `@media only screen and (max-width: ${value})`;
  if (type === "min") return `@media only screen and (min-width: ${value})`;

  return "";
};
