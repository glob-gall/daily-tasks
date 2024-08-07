function compareDateToTaskDate(date: Date, taskDate: string): boolean {
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth() + 1;
  const dateDay = date.getDate();

  const month = dateMonth < 10 ? `0${dateMonth}` : dateMonth;
  const day = dateDay < 10 ? `0${dateDay}` : dateDay;

  const dateString = `${dateYear}/${month}/${day}`;

  return taskDate.localeCompare(dateString) === 0;
}

export default compareDateToTaskDate;
