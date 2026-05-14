const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const strengthText = document.getElementById("strengthText");
const bars = document.querySelectorAll(".bar");
const message = document.getElementById("message");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
  updateStrength();
});

[uppercase, lowercase, numbers, symbols].forEach(option => {
  option.addEventListener("change", updateStrength);
});

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {
  const length = Number(lengthSlider.value);
  const selectedSets = getSelectedSets();

  if (selectedSets.length === 0) {
    message.textContent = "Select at least one option.";
    passwordOutput.textContent = "";
    return;
  }

  let password = "";
  let allCharacters = "";

  selectedSets.forEach(set => {
    const chars = characters[set];
    allCharacters += chars;
    password += getRandomCharacter(chars);
  });

  while (password.length < length) {
    password += getRandomCharacter(allCharacters);
  }

  password = shufflePassword(password);
  passwordOutput.textContent = password;
  message.textContent = "";
  updateStrength();
}

function getSelectedSets() {
  const selected = [];

  if (uppercase.checked) selected.push("uppercase");
  if (lowercase.checked) selected.push("lowercase");
  if (numbers.checked) selected.push("numbers");
  if (symbols.checked) selected.push("symbols");

  return selected;
}

function getRandomCharacter(characterSet) {
  const randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet[randomIndex];
}

function shufflePassword(password) {
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function updateStrength() {
  const length = Number(lengthSlider.value);
  const selectedOptions = getSelectedSets().length;

  let score = 0;

  if (length >= 8) score++;
  if (length >= 12) score++;
  if (selectedOptions >= 3) score++;
  if (selectedOptions === 4 && length >= 14) score++;

  let text = "TOO WEAK!";

  if (score === 2) text = "WEAK";
  if (score === 3) text = "MEDIUM";
  if (score >= 4) text = "STRONG";

  strengthText.textContent = text;

  bars.forEach((bar, index) => {
    bar.classList.toggle("active", index < score);
  });
}

function copyPassword() {
  const password = passwordOutput.textContent;

  if (password === "") {
    message.textContent = "Generate a password first.";
    return;
  }

  const tempInput = document.createElement("input");
  tempInput.value = password;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  message.textContent = "Password copied!";
}

generatePassword();