const numbers = [12, 13, 14, 15, 16, 17, 18, 19];
const result = numbers.map(number => number * 2)
// console.log(result)
const numberFilter = numbers.filter(number => number> 14);
// console.log(numberFilter)
const numberFind = numbers.find(number => number>15);

const total = numbers.reduce((sum, num) => sum + num, 0);//single line arrow function auto return
// console.log(total)

const price =[12, 14, 56, 67, 6899, 678, 58, 09, 90, 579, 8]
const totalPrice = price.reduce((total, pric)=> {
    // console.log("Total",total, "price",pric)
   return total + pric //multiLine arow function stracture
}, 0)
// console.log(totalPrice)

const friends = [
    {name:"karim", salary : 10},
    {name:"rejaul", salary : 11},
    {name:"shohag", salary : 15},
    {name:"babul", salary : 20},
    {name:"mahabub", salary : 8}
];
const totalSalary = friends.reduce((sum, friend)=>{
    return sum + friend.salary;
}, 0)
const players=[
    {name : "Messi", fee : 111},
    {name : "Messi", fee : 4334},
    {name : "Messi", fee : 76},
    {name : "Messi", fee : 66},
    {name : "Messi", fee : 909},
    {name : "Messi", fee : 56}
];
const totalPlayerFee = players.reduce((sum, player)=>sum + player.fee,0)
console.log(totalPlayerFee)