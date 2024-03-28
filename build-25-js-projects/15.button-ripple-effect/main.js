const buttons = document.querySelectorAll(".ripple-effect-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.target.offsetLeft);
    // console.log(e.target.offsetTop);

    let xCor = e.clientX - e.target.offsetLeft;
    let yCor = e.clientY - e.target.offsetTop;
    let rippleElm = document.createElement("span");

    rippleElm.style.left = `${xCor}px`;
    rippleElm.style.top = `${yCor}px`;
    btn.appendChild(rippleElm);

    window.setTimeout(() => {
      rippleElm.remove();
    }, 500);

    //...................
  });
});
