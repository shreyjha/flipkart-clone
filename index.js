let loginBtn = document.getElementById("head-3")
loginBtn.addEventListener("mouseover", loginOpen)
loginBtn.addEventListener("mouseout", loginClose)

let usericonLb = document.getElementById("user-icon")
let loginLb = document.getElementById("login-btn")
let loginarrowLb = document.getElementById("login-arrow")

let loginPopup = document.getElementById("login-popup")

let threedotsBtn = document.getElementById("head-6")
threedotsBtn.addEventListener("mouseover", openThreedots)
threedotsBtn.addEventListener("mouseout", closeThreedots)

let threedotsPopup = document.getElementById("threedots-popup")

function loginOpen() {
    loginBtn.style.backgroundColor = "rgb(42, 91, 236)"
    usericonLb.style.backgroundColor = "rgb(42, 91, 236)"
    loginLb.style.backgroundColor = "rgb(42, 91, 236)"
    loginarrowLb.style.backgroundColor = "rgb(42, 91, 236)"

    usericonLb.style.color = "white"
    loginLb.style.color = "white"
    loginarrowLb.style.color = "white"

    loginarrowLb.style.transform = "rotate(270deg)"

    loginPopup.style.display = "block"
}

function loginClose() {
    loginBtn.style.backgroundColor = "white"
    usericonLb.style.backgroundColor = "white"
    loginLb.style.backgroundColor = "white"
    loginarrowLb.style.backgroundColor = "white"

    usericonLb.style.color = "rgb(36, 36, 36)"
    loginLb.style.color = "rgb(36, 36, 36)"
    loginarrowLb.style.color = "rgb(36, 36, 36)"

    loginarrowLb.style.transform = "rotate(90deg)"

    loginPopup.style.display = "none"
}

function openThreedots() {
    threedotsPopup.style.display = "block"
}

function closeThreedots() {
    threedotsPopup.style.display = "none"
}



