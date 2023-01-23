export default function hasNonEmptyValue(obj) {
  if (Array.isArray(obj)) {
    return obj.some(element => hasNonEmptyValue(element));
  } else if (typeof obj === "object") {
    return Object.values(obj).some(value => hasNonEmptyValue(value));
  }
  return Boolean(obj);
}