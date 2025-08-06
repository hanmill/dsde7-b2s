console.log("Hello back to school");

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

const oregonWashingtonButton = document.getElementById("ONW");
const clearFilterButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

// Logging workbook information
function logWorbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);

  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is :${element.name}`);
  });

  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is :${element.name}`);
  });
}

//Defining Functions

// function to apply a filter on state for Washington and Oregon
function oregonWashFunction() {
  console.log(oregonWashingtonButton.value);

  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

//function to clear any filters on State
function clearFunction() {
  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

//function to undo
function undoFunction() {
  viz.undoAsync();
}

//Event Listeners

oregonWashingtonButton.addEventListener("click", oregonWashFunction);

clearFilterButton.addEventListener("click", clearFunction);

undoButton.addEventListener("click", undoFunction);

viz.addEventListener("firstinteractive", logWorbookInformation);
