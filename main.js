//MILESTONE 1
/*
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
*/
//MILESTONE 2
/* 
const priceKm = 0.21
const formEl = document.querySelector("form")
const fullNameEl = document.getElementById("fullname")
const userKmEl = document.getElementById("userKm")
const userAgeEl = document.getElementById("userAge")


formEl.addEventListener('submit', function () {
    event.preventDefault()
    let travelPrice = Number(userKmEl.value) * priceKm
    if (Number(userAgeEl.value) > 65) {
        const overDiscount = travelPrice * 40 / 100
        console.log(travelPrice);
        console.log(overDiscount);
        const discountOver = travelPrice - overDiscount
        console.log(discountOver.toFixed(2));
    } else if (Number(userAgeEl.value) < 18) {
        const minorDiscount = travelPrice * 20 / 100
        console.log(travelPrice);
        console.log(minorDiscount);
        const discountMinor = travelPrice - minorDiscount
        console.log(discountMinor.toFixed(2));
    } else if (isNaN(userKmEl) || isNaN(userAgeEl)) {
        alert("please insert a numeric value")
    } else {
        console.log(travelPrice);
    }
}
) 
*/
//MILESTONE 3
const priceKm = 0.21
const formEl = document.querySelector("form")
const fullNameEl = document.getElementById("fullname")
const userKmEl = document.getElementById("userKm")
const userAgeEl = document.getElementById("userAge")
const ticketNameEl = document.getElementById("ticketName")
const ticketAgeEl = document.getElementById("ticketAge")
const ticketKmEl = document.getElementById("ticketKm")
const ticketOfferEl = document.getElementById("ticketOffer")
const ticketCarriageEl = document.getElementById("ticketCarriage")
const ticketPriceEl = document.getElementById("ticketPrice")


formEl.addEventListener('submit', function () {
    event.preventDefault()
    let travelPrice = Number(userKmEl.value) * priceKm
    if (Number(userAgeEl.value) > 65) {
        const overDiscount = travelPrice * 40 / 100
        const discountOver = travelPrice - overDiscount
        let offer = "Over Discount"
        ticketPriceEl.innerText = discountOver.toFixed(2)
        ticketOfferEl.innerText = offer
    } else if (Number(userAgeEl.value) < 18) {
        const minorDiscount = travelPrice * 20 / 100
        const discountMinor = travelPrice - minorDiscount
        let offer = "Minor Discount"
        ticketPriceEl.innerText = discountMinor.toFixed(2)
        ticketOfferEl.innerText = offer
    } else {
        let offer = "Regular"
        ticketPriceEl.innerText = travelPrice.toFixed(2)
        ticketOfferEl.innerText = offer
    }
    ticketNameEl.innerText = fullNameEl.value
    ticketAgeEl.innerText = userAgeEl.value
    ticketKmEl.innerText = userKmEl.value
    ticketCarriageEl.innerText = Math.floor(Math.random() * 10 + 1)
}
) 
