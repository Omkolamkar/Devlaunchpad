/*function sum(a,b)
{
    console.log(`Sum of ${a} and ${b} is `)

}*/

//Wap using function to print full name by using first name and last name as arguments

// let firstname
// let lastname
// function fullname(firstname,lastname)
// {
//     console.log(`Full name is ${firstname} ${lastname}`)
// }
// fullname("Om","Kolamkar");

//Const Example



//Arrow Function Example

// const sum = (a,b,c) =>
// {
//     return a+b+c;
// }
// console.log(sum(5,6,7));



//String Fuction Usage

// let a="Om Pramod";

// let length= a.length;
// console.log(length);

// console.log(a.toLowerCase());

// let match=a.match("Om");
// console.log(match);

// console.log(a.indexOf("m"));

// console.log(a.slice(-8));

// console.log(a.lastIndexOf("o"));

// let fullname= a.concat(" Kolamkar");
// console.log(fullname);

// console.log(a.search("Om"));



//WAP using array to check prime number in it;
//return array of prime numbers in string format -->["3","5"]

const num = [1, 2, 5, 6, 7, 9, 3, 5];
let primenumber = [];

function prime(no) {
    for (let j = 0; j < no.length; j++) {
        let n = no[j];
        let count = 0;

        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                count++;
            }
        }

        if (count === 2) {
            primenumber.push(n.toString());
        }
    }
    return primenumber;
}

console.log(prime(num));
