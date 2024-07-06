function compareDateToTaskDate(date: Date, taskDate: string): boolean {
  const dateYear = date.getFullYear()
  const dateMonth = date.getMonth() + 1
  const dateDay = date.getDate()
  const dateString = `${dateYear}/${dateMonth}/${dateDay}`

  console.log({
    date,
    dateString,
    taskDate,
    compare: taskDate.localeCompare(dateString)
  });
  
  return taskDate.localeCompare(dateString) === 0
}

export default compareDateToTaskDate