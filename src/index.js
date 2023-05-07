function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("Dark")) {
    body.classList.remove("Dark");
  } else {
    body.classList.add("Dark");
  }
}
let DarkBtn = document.querySelector(".DarkBtn");
DarkBtn.addEventListener("click", changeTheme);
