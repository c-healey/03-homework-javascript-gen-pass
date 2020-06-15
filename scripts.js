generatePassword = () => {
  let valuesLower = "abcdefghijklmnopqrstuvwxyz";
  let valuesUpper = valuesLower.toUpperCase();
  let valuesNumber = "0123456789";
  let valuesSpecial = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let values = "";
  //   values = valuesLower + valueUpper + valuesNumber;
  //   values = values + values.toUpperCase();
  let password = "";

  // set password length/complexity
  let complexity = document.getElementById("slider").value;

  // set values depending on what is checked
  if (document.getElementById("values-upper").checked) {
    values = values + valuesUpper;
  }
  if (document.getElementById("values-lower").checked) {
    values = values + valuesLower;
  }
  if (document.getElementById("values-number").checked) {
    values = values + valuesNumber;
  }
  if (document.getElementById("values-special").checked) {
    values = values + valuesSpecial;
  }

  //    generate password by randomly selecting 'complexity' number of values
  for (let i = 0; i < complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //   display password in textbox
  document.getElementById("display").value = password;

  //   append the last password to the previous password list
  document.getElementById("lastNums").innerHTML += password + "<br/>";
};

// set default lenght status text
document.getElementById("length").innerHTML = "Length: 68";

// set length from slider
document.getElementById("slider").oninput = () => {
  let sliderValue = document.getElementById("slider").value;
  if (sliderValue > 0) {
    document.getElementById("length").innerHTML = "Length: " + sliderValue;
  }
};

// Copy password to clipboard on click
copyPassword = () => {
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard");
};
