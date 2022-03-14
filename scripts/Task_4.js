let totalPrice = 120000;
let subscriptionPrice = 108000;
let chargePrice = 12000;

let totalPrice_s = 1440000;
let subscriptionPrice_s = 1296000;
let chargePrice_s = 144000;

document.getElementById("totalPrice").innerHTML = totalPrice;
document.getElementById("subscriptionPrice").innerHTML = subscriptionPrice;
document.getElementById("chargePrice").innerHTML = chargePrice;

function monthSelector() {
  document
    .querySelectorAll(".month-selected")
    .forEach((el) => el.classList.remove("month-selected"));
  var panelMonth_1 = document.getElementById("month_1");
  panelMonth_1.classList.add("month-selected");
}

function totalPrice_1() {
  totalPrice = totalPrice;
  return totalPrice;
}

function subscriptionPrice_1() {
  subscriptionPrice = subscriptionPrice;
  return subscriptionPrice;
}

function chargePrice_1() {
  chargePrice = chargePrice;
  return chargePrice;
}

function totalPrice_3() {
  totalPrice = totalPrice * 3;
  return totalPrice;
}

function subscriptionPrice_3() {
  subscriptionPrice = subscriptionPrice * 3;
  return subscriptionPrice;
}

function chargePrice_3() {
  chargePrice = chargePrice * 3;
  return chargePrice;
}

function totalPrice_6() {
  totalPrice = totalPrice * 6;
  return totalPrice;
}

function subscriptionPrice_6() {
  subscriptionPrice = subscriptionPrice * 6;
  return subscriptionPrice;
}

function chargePrice_6() {
  chargePrice = chargePrice * 6;
  return chargePrice;
}

function totalPrice_9() {
  totalPrice = totalPrice * 9;
  return totalPrice;
}

function subscriptionPrice_9() {
  subscriptionPrice = subscriptionPrice * 9;
  return subscriptionPrice;
}

function chargePrice_9() {
  chargePrice = chargePrice * 9;
  return chargePrice;
}

function totalPrice_12() {
  totalPrice = totalPrice * 12;
  return totalPrice;
}

function subscriptionPrice_12() {
  subscriptionPrice = subscriptionPrice * 12;
  return subscriptionPrice;
}

function chargePrice_12() {
  chargePrice = chargePrice * 12;
  return chargePrice;
}

function totalPriceSchool_12() {
  totalPrice = totalPrice_s;
  return totalPrice_s;
}

function subscriptionPriceSchool_12() {
  subscriptionPrice = subscriptionPrice_s;
  return subscriptionPrice_s;
}

function chargePriceSchool_12() {
  chargePrice = chargePrice_s;
  return chargePrice_s;
}
