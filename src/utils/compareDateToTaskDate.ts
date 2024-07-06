function compareDateToTaskDate(date: Date, taskDate: string): boolean {
  const dateYear = date.getFullYear()
  const dateMonth = date.getMonth()
  const dateDay = date.getDate()
  const dateString = `${dateYear}/${dateMonth}/${dateDay}`

  return taskDate.localeCompare(dateString) === 0
}

export default compareDateToTaskDate