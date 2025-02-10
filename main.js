const container = document.querySelector(".container");
const btnSignIn = document.querySelector(".btnSign-in");
const btnSignUp = document.querySelector(".btnSign-up");
const hai = "I Love You";

btnSignIn.addEventListener("click", () => {
  container.classList.add("active");
});

btnSignUp.addEventListener("click", () => {
  container.classList.remove("active");
});

function appendValue(value) {
  document.getElementById("screen").value += value;
}
function clearScreen() {
  document.getElementById("screen").value = "";
}
function calculateResult() {
  try {
    document.getElementById("screen").value = eval(
      document.getElementById("screen").value
    );
  } catch (error) {
    alert("Input tidak valid");
    clearScreen();
  }
}

document.getElementById("password").addEventListener("input", function () {
  let password = this.value;
  let email = document.getElementById("email").value;
  let rulesList = document.getElementById("password-rules");
  rulesList.style.display = password.length > 0 ? "block" : "none";

  let lengthValid = password.length >= 8;
  let uppercaseValid = /[A-Z]/.test(password);
  let numberValid = /[0-9]/.test(password);

  function updateRule(elementId, isValid) {
    let element = document.getElementById(elementId);
    if (isValid) {
      element.className = "valid";
      element.innerHTML = "&#9989; " + element.textContent.slice(2);
    } else {
      element.className = "invalid";
      element.innerHTML = "&#10060; " + element.textContent.slice(2);
    }
  }

  // Validasi email dan password kosong
  if (email === "" || password === "") {
    document.getElementById("length").className = "invalid";
    document.getElementById("uppercase").className = "invalid";
    document.getElementById("number").className = "invalid";
  } else {
    updateRule("length", lengthValid);
    updateRule("uppercase", uppercaseValid);
    updateRule("number", numberValid);
  }

  // Sembunyikan aturan jika semua syarat terpenuhi
  if (lengthValid && uppercaseValid && numberValid) {
    rulesList.style.display = "none";
  }
});
