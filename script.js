// if (html.classList.contains("light")) {
// html.classList.remove("light")
// } else {
//  html.classList.add("light")
// }

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-bubu.png")
  } else {
    img.setAttribute("src", "./assets/avatar-bubu.png")
  }

  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "bubu com semblante feliz")
  } else {
    alt.setAttribute("alt", "bubu com semblante triste")
  }
}
