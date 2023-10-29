export const generateClassName = (...rest: Array<string | undefined>) => rest.filter((i) => i !== undefined).join(" ");
