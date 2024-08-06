// type WeekDay =
//   | "Domingo"
//   | "Segunda-Feira"
//   | "Terça-Feira"
//   | "Quarta-Feira"
//   | "Quinta-Feira"
//   | "Sexta-Feira"
//   | "Sabado";

type WeekDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
export default function getWeekDay(day?: Date): WeekDay {
  // const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const days: WeekDay[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = day || new Date();
  return days[today.getDay()];
}
