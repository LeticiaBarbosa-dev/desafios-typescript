// // Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

type Employee = {
    code: number,
    name: string
}

function createEmployee(employee: Employee) {
    return `code: ${employee.code}, name: ${employee.name}.`;
}

const emp = createEmployee({code: 10, name: "Jonh"})

console.log(emp)