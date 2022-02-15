'use strict';
let allEmployee =[];
let sall =[];
function EmployeeInfo (EmployeeID, FullName,Department,Level,ImageURL)
{
this.EmployeeID=EmployeeID;
this.FullName=FullName;
this.Department=Department;
this.Level=Level;
this.ImageURL=ImageURL;
this.salary=this.calculateSalary;
allEmployee.push(this);
}
let Ghazi = new EmployeeInfo(1000, "Ghazi Samer", "Administration", "Senior");
let Lana  = new EmployeeInfo(1001, "Lana Ali", "Finance","Senior");
let Tamara = new EmployeeInfo(1002, "Tamara Ayoub","Marketing", "Senior");
let Safi = new EmployeeInfo(1003, "Safi Walid","Administration","Mid-Senior");
let Omar = new EmployeeInfo(1004, "Omar Zaid", "Development","Senior");
let Rana = new EmployeeInfo(1005, "Rana Saleh","Development","Junior");
let Hadi = new EmployeeInfo(1006, "Hadi Ahmad","Financen","Mid-Senior");

console.log(allEmployee);
EmployeeInfo.prototype.render = function(){
   document.write(this.FullName ,this.salary);
  
}
for (let i = 0; i <  allEmployee.length ; i++) {
    allEmployee[i].render();
}
EmployeeInfo.prototype.calculateSalary = function() {
    if (this.Level==="Senior"){
        this.salary= Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    }
    else if (level==="Mid-Senior")
    {
        this.salary= Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    }
    elseif(Level==="Junior")
    {
        this.salary= Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    }
return this.netSalary();
}
EmployeeInfo.prototype.netSalary=function()
{
    return (this.netSalary = this.salary - Math.floor(this.salary * (7.5 / 100)));
}




