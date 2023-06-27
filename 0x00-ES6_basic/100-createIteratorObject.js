export default function createIteratorObject(report) {
    let employee = [];
    for (let [depts, emplys] of Object.entries(report.allEmployees)){
         for (let empy of emplys){
             employee.push(empy);
         }
    }
    return employee;

}