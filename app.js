/*
//1

const number = 2;
if (number < 10) {
    console.log('константа меньше 10');
}
else{
    console.log('константа не меньше 10');
}

//2

console.log('start');

if(3>4){
    console.log('middle');
} else if(3>2) {
    console.log('success');
} else console.log('error')

//3

let x = 10, y = 7;
if(x > y){
    console.log('x больше, чем y')
} else{ 
    console.log('x меньше, чем y')
}

//4


let num = prompt('число');
if(num % 2 === 0){
    console.log('четное число')
} else(console.log('нечетное число'))



//5

let num1 = prompt('1 числo');
let num2 = prompt('2 числo');
let num3 = prompt('3 числo');

if(num1 >= num2, num3){
    console.log(num1)
} else if(num2 >= num1, num3){
    console.log(num2)
} else if(num3 >= num1, num3){
    console.log(num3)
} 






//obj
let man = {
    name: 'Muslim',
    familia: 'Bisultanov',
    age: 20,
    height: 177,
    login: 'mylogin@mail.com',
    password: 12121212,
    money: 150000
}
console.log(man)

man.adres ='Grozny'

let password = 12121212
if(password == man.password) {
    console.log(`Добро пожаловать! ${man.name} ${man.familia} ${man.login}`)
} else {
    console.log('Указанный пароль не верен. Попробуйте еще раз')
}


let i = 0
while(i<=10){
    console.log(i++)
}
 */







//6

let arr = [95, 'lorem', true, 721, 24005, 'one', 'two', 'three', 1]
console.log (arr.length)
console.log (arr[arr.length - 1])
console.log (arr[0])

let em = [2, false, 'word', 33, 'xxxxxxxx'];
em [5] = 123
em.unshift(555, 334, 414)
em.shift()
em.splice(-2, 2)
console.log (em)

let number = [1, 3, 5, 7, 9]
if(number % 2 !== 0){
   return number + 1}
console.log(number) //попробую еще