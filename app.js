const buttonTwo = document.querySelector(".btn-2");
function alertBtn() {
  alert("I also love Js!");
}
buttonTwo.addEventListener("click", alertBtn);

// Event propagation 3 phases: event capturing, target, event bubbling
// true = event capture, false = event bubbling, false by default
window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);
window.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);

document.querySelector(".div-2").addEventListener(
  "click",
  function (e) {
    console.log("div-2");
    // e.stopPropagation();
  },
  //   false
  { once: true }
);
document.querySelector(".div-1").addEventListener(
  "click",
  function () {
    console.log("div-1");
  },
  false
);
document.querySelector(".btn-3").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "clicked!"));
  },
  false
);
document.querySelector(".btn-4").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log((e.target.innerText = "clicked!"));
  },
  false
);
