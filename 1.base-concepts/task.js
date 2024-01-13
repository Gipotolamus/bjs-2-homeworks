"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [(-b + Math.sqrt(d))/(2*a)];
  } else {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a) ;
    arr.push(x1, x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let per = parseInt(percent) / 100 / 12;
	let con = parseInt(contribution);
	let am = parseInt(amount);
	if (isNaN(per) || per < 0) {
		return `false`;
	} else {
			let s = am - con;
			let n = countMonths;
			let pay = s * (per + per / (((1 + per) ** n) - 1));
			let totalAmount = (pay * n).toFixed(2);
			console.log(totalAmount);
			return +totalAmount;
   }
}