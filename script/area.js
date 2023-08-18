// common function:-
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// Triangle Area:-
function calculateTriangleArea() {
  const base = getInputValue("triangle-b");
  const hight = getInputValue("triangle-h");

  if (isNaN(base) || isNaN(hight)) {
    alert("Please insert Number");
    return;
  }

  const area = 0.5 * base * hight;
  setElementInnerText("triangle-area", area);
  //   const areaSet = document.getElementById("triangle-area");
  //   areaSet.innerText = area;

  // add to calculation entry
  addToCalculationEntry("Triangle", area);
}

// Rectangle Area:-
function calculateRectangleArea() {
  const rectangleWidth = getInputValue("rectangle-w");
  const rectangleHeight = getInputValue("rectangle-i");

  if (isNaN(rectangleHeight) || isNaN(rectangleWidth)) {
    alert("Please insert Number");
    return;
  }

  const area = rectangleWidth * rectangleHeight;
  setElementInnerText("rectangle-area", area);
  //   const areaSet = document.getElementById("rectangle-area");
  //   areaSet.innerText = area;
  addToCalculationEntry("Rectangle", area);
}

// Parallelogram Area:-
function calculateParallelogramArea() {
  const width = getInputValue("parallelogram-b");
  const hight = getInputValue("parallelogram-h");

  if (isNaN(width) || isNaN(hight)) {
    alert("Please insert Number");
    return;
  }

  const area = width * hight;
  setElementInnerText("parallelogram-area", area);
  //   const areaSet = document.getElementById("parallelogram-area");
  //   areaSet.innerText = area;
  addToCalculationEntry("Parallelogram", area);
}

// Rhombus Area
function calculateRhombusArea() {
  const distance1 = getInputValue("rhombus-d1");
  const distance2 = getInputValue("rhombus-d2");

  if (isNaN(distance1) || isNaN(distance2)) {
    alert("Please insert Number");
    return;
  }

  const area = 0.5 * distance1 * distance2;
  setElementInnerText("rhombus-area", area);

  addToCalculationEntry("Rhombus", area);
}

// Pentagon Area
function calculatePentagonArea() {
  const length = getInputValue("pentagon-p");
  const side = getInputValue("pentagon-b");

  if (isNaN(length) || isNaN(side)) {
    alert("Please insert Number");
    return;
  }

  const area = 0.5 * length * side;
  setElementInnerText("pentagon-area", area);

  addToCalculationEntry("Pentagon", area);
}
// Ellipse Area
function calculateEllipseArea() {
  const major = getInputValue("ellipse-a");
  const minor = getInputValue("ellipse-b");

  if (isNaN(major) || isNaN(minor)) {
    alert("Please insert Number");
    return;
  }

  const area = 3.1416 * major * minor;
  const fixedTow = area.toFixed(2);
  setElementInnerText("ellipse-area", fixedTow);

  addToCalculationEntry("Ellipse", fixedTow);
}

// Data validation
function addToCalculationEntry(areaType, area) {
  console.log(areaType, area);
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-2");
  p.classList.add("bg-gray-300");
  p.classList.add("rounded");
  p.classList.add("p-2");
  p.classList.add("text-left");
  p.innerHTML = `${
    count + 1
  }. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary text-white">Convert</button>`;
  calculationEntry.appendChild(p);
}
