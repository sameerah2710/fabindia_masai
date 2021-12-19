var count = 0;
document.getElementById("inc").addEventListener("click", increment);
document.getElementById("dec").addEventListener("click", decrement);
function increment() {
  count++;
  document.querySelector("#point").innerHTML = count;
}
function decrement() {
  count--;
  document.querySelector("#point").innerHTML = count;
}
