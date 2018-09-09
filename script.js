function dataToTable() {
    var peopleAmount = prompt("How many people you want analyze"); // Ask user for amount of people to analyze
    peopleAmount = parseInt(peopleAmount); // Parse string to number
    var res = []; // Создаем объект
    for (var i = 0; i < peopleAmount; i++) {
      var name = prompt('What is human name? (If you want to stop press "Cancel")');
      if (name === null) // If user press "Cancel", break our cycle
        break;
      var age = prompt('Human age?');
      age = parseInt(age);
      res.push({
        name: name,
        age: age,
        weekend: age * 116,
        weekday: age * 275
      });
    }
    return res;
  }
  
  function addTable() {
    var table = document.getElementById('myTable');
    var data = dataToTable();
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr'); // Create table rows as many we have people
      table.appendChild(tr);
      for (var fld in data[i]) {
        var td = document.createElement('td'); // Create table cells as many we have benchmarks
        tr.appendChild(td);
        td.innerText = data[i][fld];
      }
    }
  }
