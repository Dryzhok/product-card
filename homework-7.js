function forecast(city, temperature) {
  console.log(`Сейчас в ${city} - ${temperature} градусов по цельсию`)
}

const speedLight = 299792458
function checkSpeed(speed) {
  if (speed > speedLight) {
    console.log("Сверхсветовая скорость")
  }
  else if (speed < speedLight) {
    console.log("Субсветовая скорость")
  }
  else {
    console.log("Скорость света")
  }
}

const nameProduct = "Ноутбук"
const priceProduct = 50000
function getProduct (budget) {
  if (budget>=priceProduct) {
    console.log(`${nameProduct} приобретён. Спасибо за покупку!`)
  }
  else {
    console.log (`Вам не хватает ${priceProduct-budget}, пополните баланс`)
  }
}

