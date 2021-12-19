var pay = JSON.parse(localStorage.getItem("payment"));
var shop = document.querySelector("#shop");
display(pay);
// document.querySelector("p").innerHTML = "";
function display(event) {
  pay.map(function (elem) {
    shop.innerHTML = "";
    var div = document.createElement("div");
    var name = document.createElement("p");
    var mobile = document.createElement("p");
    var address = document.createElement("p");
    var city = document.createElement("p");
    var State = document.createElement("p");
    name.textContent = elem.name;
    mobile.textContent = elem.mobile;
    address.textContent = elem.address;
    city.textContent = elem.city;
    State.textContent = elem.State;

    div.append(name, mobile, address, city, State);
    shop.append(div);
  });
}
var otp;
document.querySelector("#cartform").addEventListener("submit", fill);

function fill(event) {
  event.preventDefault();

  var cardNumber = cartform.number.value;
  var name = cartform.Name.value;
  var cvv = cartform.cvv.value;

  if (cardNumber.length == 16 && cvv.length == 3 && name.length !== 0) {
    otp = Math.floor(Math.random() * 10000);

    confirm("Your OTP is  " + otp);
    var div = document.querySelector("#otpform");
    var form = document.createElement("form");
    form.setAttribute("id", "f");
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");

    input1.setAttribute("placeholder", "Enter OTP here");
    input2.setAttribute("type", "submit");
    input1.setAttribute("type", "number");
    input1.setAttribute("id", "inputotp");

    input2.setAttribute("value", "Submit");
    input2.setAttribute("id", "OTP1");

    form.append(input1, input2);
    div.append(form);
    document.querySelector("#f").addEventListener("submit", check);
  } else {
    alert("Invalid CardNumber or CVV");
  }
}

document.querySelector("#payment").addEventListener("click", debit);
function debit(event) {
  event.preventDefault();
  location.href = "payment2.html";
  a;
}

function change() {
  location.href = "payment.html";
}

function check(event) {
  event.preventDefault();
  var Select = f.inputotp.value;
  if (otp == Select) {
    swal("Ordered Successfully!", "Congratulations", "success");
  } else {
    swal("Cancelled", "Invalid OTP", "error");
  }

  document.querySelector("#f").remove();
  document.querySelector("#number").value = "";
  document.querySelector("#Name").value = "";
  document.querySelector("#cvv").value = "";
}
