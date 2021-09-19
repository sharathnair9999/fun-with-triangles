const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  // console.log(sumOfAngles);
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  // console.log(typeof inputs[0].value,inputs[1].value,inputs[2].value)
  if (sumOfAngles === 180) {
    outputEl.innerText = "Wow! That's a Triangle";
    outputEl.style.color = "green"
    outputEl.style.fontSize= "1rem"
  } else {
    outputEl.innerText = "Oops.! That's not a Triangle";
    outputEl.style.color = "red"
    outputEl.style.fontSize= "1rem"
    }
}

isTriangleButton.addEventListener("click", isTriangle);
