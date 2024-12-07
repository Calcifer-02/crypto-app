export function percentDifference(oldValue, newValue) {
   return ((newValue - oldValue) / oldValue) * 100;
}

export function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.substring(1);
}
