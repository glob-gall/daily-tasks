
type WeekDay = 'Domingo'|'Segunda-Feira'|'Terça-Feira'|'Quarta-Feira'|'Quinta-Feira'|'Sexta-Feira'|'Sabado'
export default function getWeekDay(day?:Date): WeekDay {
  // const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const days:WeekDay[] = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sabado'
  ];

  const today = day || new Date()
  return days[ today.getDay() ]
}