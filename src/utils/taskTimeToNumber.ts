export function taskTimeToNumber(time?: string) {
  if (!time) return 0;

  const [hours, min] = time.split(":");
  const timeNumber = +(hours + min);
  return timeNumber;
}
