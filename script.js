const changeButton = document.querySelector("#change-color-card-button")
const card = document.querySelector(".card-list__item")
const allCards = document.querySelectorAll(".card-list__item")
console.log(changeButton)
changeButton.addEventListener("click", () => {
  card.style.background = "#fc72e5"
})

const changeAllCardButton = document.querySelector("#change-color-all-cards-button")
changeAllCardButton.addEventListener("click", () => {
  allCards.forEach(card => {
    card.style.background = "#ce6969"
  })
})

const openGoogle = document.querySelector("#open-url")
openGoogle.addEventListener("click", () => {
  const answer = confirm("Вы действительно хотите перейти в гугл?")
  if (answer === true) { window.open("https://google.com") }
})

const outPutLog = document.querySelector("#out-put-log")
function outPutConsoleLog(message) {
  console.log(message)
}
outPutLog.addEventListener("click", () => {
  outPutConsoleLog("Любой текст")
})

const title = document.querySelector(".title")
title.addEventListener("mouseenter", () => {
console.log(title.textContent)
})

const changeBackground=document.querySelector("#change-background")
changeBackground.addEventListener("click", () => {
  changeBackground.classList.toggle("active")
})