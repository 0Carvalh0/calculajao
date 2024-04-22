const res = document.querySelector(".mainContainer__display-current");

function addValue(num) {
  let text = document.querySelector(
    ".mainContainer__display-current"
  ).innerHTML;

  if (text === "") {
    let operations = /[\+\-\*\/\.]$/;

    if (!operations.test(num)) {
      res.innerHTML = num;
    }
  } else {
    let operations = /[\+\-\*\/\.]$/;

    if (operations.test(num)) {
      if (!operations.test(text.slice(-1))) {
        res.innerHTML += num;
      }
    } else {
      let operations = /[\+\-\*\/]/;
      let parts = text.split(operations);
      let last = parts[parts.length - 1];

      if (last.includes(".")) {
        res.innerHTML += num;
      } else {
        res.innerHTML += num;
      }
    }
  }
}

function clear() {
  res.innerHTML = "";
  document.querySelector(".mainContainer__display-prev").innerHTML = "";
}

function del() {
  let text = document.querySelector(
    ".mainContainer__display-current"
  ).innerHTML;
  res.innerHTML = text.substring(0, text.length - 1);
}

function calc() {
  let text = document.querySelector(
    ".mainContainer__display-current"
  ).innerHTML;
  if (text) {
    document.querySelector(".mainContainer__display-prev").innerHTML = text;
    res.innerHTML = eval(text);
  }
}
