const d1 = new Date();

console.log(d1);

// строку в объект
const d4 = new Date('Tue Mar 08 2022');
console.log(d4);

const d20 = new Date();
// методы
console.log(d20.getDay()); //-- текущий день недели начиная с ВС 0..6
console.log(d20.getMonth()); // 0 .. 11!!!!!!!!!!!!
console.log(d20.getFullYear());
console.log(d20.getDate()); //-- текущая дата 1..31

function addLeadingZero(d) {
  return (d < 10) ? '0' + d : d;
}

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];

function getUserTime(t = new Date()) {
  let d = days[t.getDay()];
  let Y = t.getFullYear();
  let M = addLeadingZero(t.getMonth() + 1);
  // if (M < 10) M = '0' + M;
  let D = addLeadingZero(t.getDate());

  console.log(d, M, D, Y);
  return `${Y}.${M}.${D} (${d})`
}

console.log(getUserTime());