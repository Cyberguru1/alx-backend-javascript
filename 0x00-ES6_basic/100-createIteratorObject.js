export default function createIteratorObject(report) {
  const employee = [];
  // eslint-disable-next-line no-unused-vars, prefer-const
  for (let [depts, emplys] of Object.entries(report.allEmployees)) {
    for (const empy of emplys) {
      employee.push(empy);
    }
  }
  return employee;
}
