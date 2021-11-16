const cookieBox = document.querySelector(".wrapper");
acceptBtn = cookieBox.querySelector(".buttons button");
acceptBtn.onclick = () => {
  cookieBox.classList.add("hide");
};
