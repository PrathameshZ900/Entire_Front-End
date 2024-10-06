
const employees = [
    { name: "Alice", age: 30, salary: 50000, department: "HR" },
    { name: "Bob", age: 35, salary: 60000, department: "Finance" },
    { name: "Charlie", age: 28, salary: 55000, department: "HR" },
    { name: "David", age: 40, salary: 70000, department: "IT" },
    { name: "Eve", age: 32, salary: 65000, department: "Finance" },
  ];
  
//   console.log(groupByDepartment(employees));
  


function EMP (employees){
    // Filter employees where the department is "HR"
    let HR = employees.filter(ele => ele.department === "HR");
    
    // Sort the filtered HR employees by age
    HR.sort((a, b) => a.age - b.age);

    // Filter employees where the department is "HR"
    let IT = employees.filter(ele => ele.department === "IT"); 
    IT.sort((a, b) => a.age - b.age);

    let Finance = employees.filter(ele => ele.department === "Finance");
    Finance.sort((a,b) => a.age - b.age );

    
    return {
        HR:HR,
        IT:IT,
        Finance:Finance
    }


    
    
}  

console.log(EMP(employees))