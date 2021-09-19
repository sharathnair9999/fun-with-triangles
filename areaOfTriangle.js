const sides = document.querySelectorAll('.side-input')
const areaBtn = document.querySelector('#calculate-btn')
const outputEl = document.querySelector('#output')

function areaCalculation(a,b){
  const area = 0.5*a*b;
  return area;
}

function calculateArea(){
  const area = areaCalculation(Number(sides[0].value), Number(sides[1].value))
  outputEl.innerText="The area of the Triangle is "+area;
}

areaBtn.addEventListener("click", calculateArea)