document.querySelector("button").addEventListener("click", () => {
  let inputValue = document.getElementById("A");
  let result = parseInt(inputValue.value) * (9 / 5) + 32;
  document.getElementById("B").innerText = result;

  inputValue.value = "";
});

document.getElementById("sumNumbers").addEventListener("click", () => {
  let values = document.getElementById("sum");
  let result = values.value.split(",");
  let sumCount = 0;
  result.forEach((currElem) => {
    sumCount += parseInt(currElem);
  });
  document.getElementById("sumValue").innerText = sumCount;

  values.value = "";
});

document.getElementById("maxNumber").addEventListener("click", () => {
  let valuesFromInput = document.getElementById("max");
  let arrayResult = valuesFromInput.value.split(",");
  let maxValue = arrayResult[0];
  arrayResult.forEach((currElem) => {
    if (currElem > maxValue) {
      maxValue = currElem;
    }
  });
  document.getElementById("maxValue").innerText = maxValue;

  valuesFromInput.value = "";
});

document.getElementById("maxArray").addEventListener("click", () => {
  let valuesFromOut = document.getElementById("even");
  let evenResult = valuesFromOut.value.split(",");
  let shownResult = [];
  evenResult.forEach((currElem) => {
    if (parseInt(currElem) % 2 === 0) {
      shownResult.push(parseInt(currElem));
    }
    console.log(shownResult);
  });
  document.getElementById("evenNumber").innerText = shownResult;

  valuesFromOut.value = "";
});

document.getElementById("reverseString").addEventListener("click", () => {
  let reverse = document.getElementById("reverse");
  let reversedString = "";

  for (let currstring of reverse.value) {
    reversedString = currstring + reversedString;
  }
  console.log(reversedString);

  document.getElementById("reversedString").innerText = reversedString;

  reverse.value = "";
});

document.getElementById("vowelSubmit").addEventListener("click", () => {
  let Str = document.getElementById("vowel");

  const vowelsarray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let currStr of Str.value) {
    if (vowelsarray.includes(currStr)) {
      count += 1;
    }
  }
  document.getElementById("vowelspan").innerText = count;

  Str.value = "";
});

document.getElementById("gradeSubmit").addEventListener("click", () => {
  let marks = document.getElementById("marks"); //input

  let getMarks = parseInt(marks.value);

  if (getMarks > 90 && getMarks <= 100) {
    document.getElementById("gradeSpan").innerText = "A";
  } else if (getMarks > 80 && getMarks <= 90) {
    document.getElementById("gradeSpan").innerText = "B";
  } else if (getMarks > 70 && getMarks <= 80) {
    document.getElementById("gradeSpan").innerText = "C";
  } else {
    document.getElementById("gradeSpan").innerText = "not found";
  }
  marks.value = "";
});

document.getElementById("averageSubmit").addEventListener("click", () => {
  let average = document.getElementById("average");
  let averageValues = average.value.split(",");
  let sum = 0;
  const averageList = [];
  for (let currlem of averageValues) {
    averageList.push(parseInt(currlem));
  }
  for (let currElem of averageList) {
    sum += currElem;
  }
  let length = averageList.length;
  let finalAverage = sum / length;

  document.getElementById("averageSpan").innerText = finalAverage;

  average.value = "";
});
