let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employee2 = {
        ...employee,
    } 
    employee2[key] = value;
    return employee2;
} 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
} 
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {
        ...employee,
    } 
    newEmployee[key] = undefined;
    return newEmployee;
} function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}