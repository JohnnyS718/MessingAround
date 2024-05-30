let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    document.body.style.backgroundColor = `${this.id}`;
    console.log(this.id);
  });
});
