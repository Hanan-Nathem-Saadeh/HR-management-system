'use strict';
var allEmployee =[];

let form = document.getElementById("dataform");

let allEmployees = document.getElementById(allEmployeesDiv) 
function EmployeeInfo (FullName,Department,Level,ImageURL)
{
this.EmployeeID=0;
this.FullName=FullName;
this.Department=Department;
this.Level=Level;
this.ImageURL=ImageURL;
this.salary = 0 ;
allEmployee.push(this);
}
let Ghazi = new EmployeeInfo(1000, "Ghazi Samer", "Administration", "Senior","css/assets/imgs/Ghazi.jpg");
let Lana  = new EmployeeInfo(1001, "Lana Ali", "Finance","Senior","URL");
let Tamara = new EmployeeInfo(1002, "Tamara Ayoub","Marketing", "Senior","URL");
let Safi = new EmployeeInfo(1003, "Safi Walid","Administration","Mid-Senior","URL");
let Omar = new EmployeeInfo(1004, "Omar Zaid", "Development","Senior","URL");
let Rana = new EmployeeInfo(1005, "Rana Saleh","Development","Junior","URL");
let Hadi = new EmployeeInfo(1006, "Hadi Ahmad","Financen","Mid-Senior","URL");

EmployeeInfo.prototype.generateID = function () {
    this.EmployeeID = Math.floor(1000 + Math.random() * 9000);
  };
EmployeeInfo.prototype.render = function()
{
 let title =document.createElement("h3");
  title.textContent=this.FullName;
  allEmployeesDiv.appendChild(title);

  let image = document.createElement("img");
  image.setAttribute("src", this.ImageURL);
  allEmployeesDiv.appendChild(image);
  
  let dep =document.createElement("h1");
  dep.textContent=this.Department;
  allEmployeesDiv.appendChild(dep);

  let lev =document.createElement("h1");
  lev.textContent=this.Level;
  allEmployeesDiv.appendChild(lev);
}

 
EmployeeInfo.prototype.getSalary = function () {
    let max;
    let min;
    if (this.Level=="Senior"){
       min=1500;
       max=2000;
    }
    else if (this.level=="Mid-Senior")
    {
        min=1000;
        max=1500;    }
    else
    {
        min=500;
        max=1000;   
     }
        let totalSalary = randInteger (min  ,max );
        this.salary = totalSalary - totalSalary * 0.075;
}
function randInteger( min, max )
{
return Math.floor(Math.random()  * (max - min + 1) ) + min;
}
function renderAll(){

    allEmployeesDiv.innerHTML="";

for (let i = 0; i <  allEmployee.length ; i++) {
    allEmployee[i].getSalary();
    allEmployee[i].render();
}
}
renderAll();
  form.addEventListener("submit" , handelsubmit)
  function handelsubmit(event)
  {
event.preventDefault();
let FullName = event.target.name.value;
let Department =event.target.select.value;
let level =event.target.level.value;
let ImageURL =event.target.Imageurl.value;

let newEmployee =new EmployeeInfo(FullName,Department, level ,ImageURL);
newEmployee.generateID();
newEmployee.getSalary();
renderAll();
form.reset();
  }
