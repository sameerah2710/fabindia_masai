document.querySelector("#myform").addEventListener("submit", add);
var arr = JSON.parse(localStorage.getItem("payment")) || [];

function add(event) {
  event.preventDefault();

  var payobj = {
    name: myform.name.value,
    address: myform.address.value,
    mobile: myform.mobile.value,
    city: myform.city.value,
    State: myform.select1.value,
    country: myform.select2.value,
    pin: myform.pin.value,
  };
  arr.push(payobj);
  console.log("here");
  localStorage.setItem("payment", JSON.stringify(arr));
}

document.querySelector("#myform").addEventListener("submit", click);
function click() {
  location.href = "payment2.html";
}

// const form = document.getElementById("myform");
// const pin = document.getElementById("pin");
// const select1 = document.getElementById("select1");
// const name = document.getElementById("name");
// const address = document.getElementById("address");
// const mobile = document.getElementById("mobile");
// const select2 = document.getElementById("select2");
// const city = document.getElementById("city");
// const last = document.getElementById("last");
// const address2 = document.getElementById("address2");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//   // trim to remove the whitespaces
//   const pin = pin.value.trim();
//   const select1 = select1.value.trim();
//   const name = name.value.trim();
//   const address = address.value.trim();
//   const mobile = mobile.value.trim();
//   const select2 = select2.value.trim();
//   const city = city.value.trim();
//   const address2 = address2.value.trim();
//   const last = last.value.trim();

//   if (pin === "") {
//     setErrorFor(pin, "pin cannot be blank");
//   } else {
//     setSuccessFor(pin);
//   }

//   if (select1 === "") {
//     setErrorFor(select1, "select1 cannot be blank");
//   } else {
//     setSuccessFor(select1);
//   }

//   if (name === "") {
//     setErrorFor(name, "name cannot be blank");
//   } else {
//     setSuccessFor(name);
//   }

//   if (address === "") {
//     setErrorFor(address, "address cannot be blank");
//   } else {
//     setSuccessFor(address);
//   }
// }

// if (mobile === "") {
//   setErrorFor(pin, "mobile cannot be blank");
// } else {
//   setSuccessFor(mobile);
// }

// if (city === "") {
//   setErrorFor(city, "select1 cannot be blank");
// } else {
//   setSuccessFor(city);
// }

// if (address2 === "") {
//   setErrorFor(address2, "name cannot be blank");
// } else {
//   setSuccessFor(address2);
// }

// if (last === "") {
//   setErrorFor(last, "address cannot be blank");
// } else {
//   setSuccessFor(last);
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = message;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

// // SOCIAL PANEL JS
// const floating_btn = document.querySelector(".floating-btn");
// const close_btn = document.querySelector(".close-btn");
// const social_panel_container = document.querySelector(
//   ".social-panel-container"
// );

// floating_btn.addEventListener("click", () => {
//   social_panel_container.classList.toggle("visible");
// });

// close_btn.addEventListener("click", () => {
//   social_panel_container.classList.remove("visible");
// });
