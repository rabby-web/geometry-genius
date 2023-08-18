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

  const area = 0.5 * base * hight;
  setElementInnerText("triangle-area", area);
  //   const areaSet = document.getElementById("triangle-area");
  //   areaSet.innerText = area;
}

// Rectangle Area:-
function calculateRectangleArea() {
  const rectangleWidth = getInputValue("rectangle-w");
  const rectangleHeight = getInputValue("rectangle-i");

  const area = rectangleWidth * rectangleHeight;
  setElementInnerText("rectangle-area", area);
  //   const areaSet = document.getElementById("rectangle-area");
  //   areaSet.innerText = area;
}

// Parallelogram Area:-
function calculateParallelogramArea() {
  const width = getInputValue("parallelogram-b");
  const hight = getInputValue("parallelogram-h");

  const area = width * hight;
  setElementInnerText("parallelogram-area", area);
  //   const areaSet = document.getElementById("parallelogram-area");
  //   areaSet.innerText = area;
}

function calculateEllipseArea() {
  const major = getInputValue("ellipse-a");
  const minor = getInputValue("ellipse-b");

  const area = 3.1416 * major * minor;
  setElementInnerText("ellipse-area", area);
}
