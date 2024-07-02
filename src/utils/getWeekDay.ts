export default function getWeekDay(day?:Date) {
  // const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const days = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado'];

  const today = day || new Date()
  return days[ today.getDay() ]
}