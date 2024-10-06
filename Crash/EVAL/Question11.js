function extractManagerDetails(company) {

    return Object.values(company.departments).map(
        department => {
            const { manager } = department
            return manager
        }
    )
}

function calculateAverageSalary(company) {

    let totalSalary = 0;
    let totalEmployees = 0;

    Object.values(company.departments).forEach(el=>{
        const {manager,employees} = el;

        totalSalary += manager.salary;
        totalEmployees += 1;

        employees.forEach(el=>{
            totalSalary += el.salary;
            totalEmployees++;
        })
    })

    const avgSalary = totalSalary/totalEmployees
    return avgSalary.toFixed(2)


}

function findHighestPaidEmployee(company){
    let highestEmp = {name:"",salary:-Infinity};
    Object.values(company.departments).forEach(el=>{
        const {manager,employees} = el;

        if (manager.salary > highestEmp.salary){
            highestEmp = {name:manager.name,salary:manager.salary}
        }

        employees.forEach(el=>{
            if (el.salary > highestEmp.salary){
                highestEmp = {name:el.name,salary:el.salary}
            }
        })
    })

    return highestEmp

}



const company = {
    name: "Tech Solutions Inc.",
    departments: {
      engineering: {
        manager: {
          name: "John Doe",
          age: 35,
          position: "Engineering Manager",
          salary: 100000,
        },
        employees: [
          { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
          { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
        ],
      },
      sales: {
        manager: {
          name: "Jane Smith",
          age: 40,
          position: "Sales Manager",
          salary: 95000,
        },
        employees: [
          { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
          { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
        ],
      },
      marketing: {
        manager: {
          name: "Emily Johnson",
          age: 37,
          position: "Marketing Manager",
          salary: 90000,
        },
        employees: [
          { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
          { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
        ],
      },
    },
};





console.log(extractManagerDetails(company));
// Output:
// [
//   { name: "John Doe", age: 35, position: "Engineering Manager", salary: 100000 },
//   { name: "Jane Smith", age: 40, position: "Sales Manager", salary: 95000 },
//   { name: "Emily Johnson", age: 37, position: "Marketing Manager", salary: 90000 }
// ]

console.log(calculateAverageSalary(company));
// Output: 77777.78 (rounded to two decimal places)

console.log(findHighestPaidEmployee(company));
// Output: { name: "John Doe", salary: 100000 }