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
