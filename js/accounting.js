let table=document.getElementById("table")
const getData = () => {
  const data = JSON.parse(localStorage.getItem("Employees"));
  return data;
};


function renderHeader(){
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = "Deoartment Name";
    tr.appendChild(columnName);


    let columnNumber = document.createElement('th');
    columnNumber.textContent = "Number of Employees";
    tr.appendChild(columnNumber);

    let columnAvg = document.createElement('th');
    columnAvg.textContent = "Average Salary";
    tr.appendChild(columnAvg);

    let columnTotal = document.createElement('th');
    columnTotal.textContent = "total Salary";
    tr.appendChild(columnTotal);
}


const renderTable = function () {
  const data = getDataInsights(getData());
  let markup;

    markup = `<table class="employees-info-table">
  <thead>
    <tr>
      <th>Department Name</th>
      <th>Number of Employees</th>
      <th>Average Salary</th>
      <th>Total Salaries</th>
    </tr>
    </thead>
         <td>${entry.department}</td>
          <td>${entry.noOfEmployees}</td>
          <td>${formatter.format(entry.avgSalary)}</td>
          <td>${formatter.format(entry.totalSalaries)}</td>
        </tr>
        <tfoot>
        <tr>
            <td>Total</td>
            <td>${total.totalNoOfEmployees}</td>
            <td>${formatter.format(total.avgAllSalaries)}</td>
            <td>${formatter.format(total.allDepsSalaries)}</td>
        </tr>
        </tfoot>
      </table>`
        
      }
     
   
    renderHeader();

renderTable();