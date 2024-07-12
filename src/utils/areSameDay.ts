function isDate(value: any): value is Date {
  return value instanceof Date;
}

function areSameDay(date1: Date | string, date2: Date | string): boolean {
  let firstDate = date1;
  if (!isDate(firstDate)){
    firstDate = new Date(Date.parse(firstDate));
  }
  let secoundDate = date2;
  if (!isDate(secoundDate)){
    secoundDate = new Date(Date.parse(secoundDate));
  }
  
  
  const isEqual = (
    firstDate.getFullYear() === secoundDate.getFullYear() &&
    firstDate.getMonth() === secoundDate.getMonth() &&
    firstDate.getDate() === secoundDate.getDate()
  )

  console.log({firstDate,secoundDate,isEqual});
  
  return isEqual;
}

export default areSameDay