const container = document.querySelector(".container");
const btnSignIn = document.querySelector(".btnSign-in");
const btnSignUp = document.querySelector(".btnSign-up");
const hai = "I LOVE YOU";

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
    let result = new Function(
      "return " + document.getElementById("screen").value
    )();
    document.getElementById("screen").value = result;
  } catch (error) {
    alert("Input tidak valid");
    clearScreen();
  }
}

document.getElementById("password").addEventListener("input", function () {
  let password = this.value;
  let rulesList = document.getElementById("password-rules");
  rulesList.style.display = password.length > 0 ? "block" : "none";

  let lengthValid = password.length >= 8;
  let uppercaseValid = /[A-Z]/.test(password);
  let numberValid = /[0-9]/.test(password);

  function updateRule(elementId, isValid) {
    let element = document.getElementById(elementId);
    let originalText =
      element.getAttribute("data-text") || element.textContent.trim();

    if (!element.hasAttribute("data-text")) {
      element.setAttribute("data-text", originalText);
    }

    element.className = isValid ? "valid" : "invalid";
    element.innerHTML = (isValid ? "✅ " : "❌ ") + originalText;
  }

  updateRule("length", lengthValid);
  updateRule("uppercase", uppercaseValid);
  updateRule("number", numberValid);

  if (lengthValid && uppercaseValid && numberValid) {
    rulesList.style.display = "none";
  }
});
