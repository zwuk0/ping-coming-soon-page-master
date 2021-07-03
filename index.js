const notifyBtn = document.getElementById("notify-btn");
const alertEle = document.getElementById("alert");
const alertEle2 = document.getElementById("alert2");
const emailInput = document.getElementById("email-input");

function ValidateEmail(x) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mailformat.test(x.value)) {
    return true;
  } else {
    return false;
  }
}

notifyBtn.addEventListener("click", function () {
  if (emailInput.value == "") {
    alertEle2.classList.toggle("alert2-toggle");
  } else if (
    ValidateEmail(emailInput) === false ||
    alertEle2.style.display == "block"
  ) {
    alertEle.classList.toggle("alert-toggle");
    emailInput.classList.toggle("email-input-toggle");
    alertEle2.style.display = "none";
  }
});
