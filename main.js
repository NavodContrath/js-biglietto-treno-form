//MILESTONE 1
const fullName = prompt("type uor full name")
const km = Number(prompt("type the number of km that u want to travel"))
const age = Number(prompt("type uor age"))
const priceKm = 0.21
let travelPrice = km * priceKm
console.log(travelPrice);
if (age > 65) {
    const overDiscount = travelPrice * 40 / 100
    const discountOver = travelPrice - overDiscount
    console.log(discountOver.toFixed());
} else if (age < 18) {
    const minorDiscount = travelPrice * 20 / 100
    const discountMinor = travelPrice - minorDiscount
    console.log(discountMinor.toFixed());
} else if (isNaN(km) || isNaN(age)) {
    alert("please insert a numeric value")
}

