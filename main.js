
function countValues(rowSelectorClass) {
  // Get all table rows
  var rows = document.getElementsByClassName(rowSelectorClass);
  var total = 0;
  // Go through all rows
  for (var i = 0; i < rows.length; i++) {
    // get value from td and parse it to Integer
    var countValue = parseInt(rows[i].cells[1].innerText);
    // add it to total value
    total += countValue;
  }
  // return total value from function
  return total;
}

// Call function (execute test case)
var totalValue = countValues('rowName');
var totalFromPage = parseInt(document.getElementById('total').cells[1].innerText);
console.log(totalFromPage);
// Compare two values
alert('Test completed with result:')
alert(totalValue === totalFromPage)
