// Uppercase to title case
const toTitleCase = (string: string) =>
  string.replace(/\b\S/g, (t) => t.toUpperCase());

// Remove underscores, change from snake case
const convertFromSnakeCase = (string: string) => string.replace(/_/g, " ");
