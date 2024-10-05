function generateMultiplicationTable(number) {
    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }

    let tableHTML = "<table>";
    for (let i = 1; i <= 10; i++) {
      tableHTML += "<tr><td>" + number + " x " + i + " = " + (number * i) + "</td></tr>";
    }
    tableHTML += "</table>";

    document.getElementById("multiplication-table").innerHTML = tableHTML;
  }

  const userInput = prompt("Enter a number, Which want you a table 1 TO ......  :");
  generateMultiplicationTable(userInput);