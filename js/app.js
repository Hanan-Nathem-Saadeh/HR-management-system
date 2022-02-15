'use strict';
var allEmployee =[];

function EmployeeInfo (EmployeeID, FullName,Department,Level,ImageURL)
{
this.EmployeeID=EmployeeID;
this.FullName=FullName;
this.Department=Department;
this.Level=Level;
this.ImageURL=ImageURL;
this.salary = 0 ;
allEmployee.push(this);
}
let Ghazi = new EmployeeInfo(1000, "Ghazi Samer", "Administration", "Senior","URL");
let Lana  = new EmployeeInfo(1001, "Lana Ali", "Finance","Senior","URL");
let Tamara = new EmployeeInfo(1002, "Tamara Ayoub","Marketing", "Senior","URL");
let Safi = new EmployeeInfo(1003, "Safi Walid","Administration","Mid-Senior","URL");
let Omar = new EmployeeInfo(1004, "Omar Zaid", "Development","Senior","URL");
let Rana = new EmployeeInfo(1005, "Rana Saleh","Development","Junior","URL");
let Hadi = new EmployeeInfo(1006, "Hadi Ahmad","Financen","Mid-Senior","URL");

EmployeeInfo.prototype.render = function(){
   document.write(`<h1> ${this.FullName} : ${this.salary} </h1>`); 
   
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
console.log(allEmployee);
for (let i = 0; i <  allEmployee.length ; i++) {
    allEmployee[i].getSalary();
    console.log(allEmployee[i]);
    allEmployee[i].render();
}