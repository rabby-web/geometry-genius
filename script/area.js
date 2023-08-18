function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

function calculateTriangleArea() {
  const baseFiled = document.getElementById("triangle-b");
  const baseValueText = baseFiled.value;
  const base = parseFloat(baseValueText);
  console.log(base);

  const hightFiled = document.getElementById("triangle-h");
  const hightValueText = hightFiled.value;
  const hight = parseFloat(hightValueText);
  console.log(hight);

  const area = 0.5 * base * hight;
  console.log(area);
  const areaSet = document.getElementById("triangle-area");
  areaSet.innerText = area;
}

function calculateRectangleArea() {
  const rectangleWidth = getInputValue("rectangle-w");
  const rectangleHeight = getInputValue("rectangle-i");

  const area = rectangleHeight * rectangleHeight;
  const areaSet = document.getElementById("rectangle-area");
  areaSet.innerText = area;
  console.log(rectangleWidth, rectangleHeight, area);
}
