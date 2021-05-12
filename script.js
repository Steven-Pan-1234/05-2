document.getElementById('button').addEventListener('click', ws)
let age = 0
let date = 'week'
function ws () {
  age = document.getElementById('age').value
  age = parseInt(age)
  date = document.getElementById('date').value
  if ((age >= 0 && age <= 18) && (date !== 'sunday' && date !== 'saturday')) {
    document.getElementById('p').innerHTML = 'go to school'
    }
  else if ((age > 18) && (date !== 'sunday' && date !== 'saturday')) {
    document.getElementById('p').innerHTML = 'go to work'
    }
  else if ((age > 0) && (date === 'sunday' || date === 'saturday')) 
  {
    document.getElementById('p').innerHTML = 'Time to relax for the weekend'
    }
}
