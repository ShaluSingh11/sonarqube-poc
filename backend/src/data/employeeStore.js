// In-memory employee storage.
// In a real app this would be a database — kept simple here for the POC.
let employees = [
  { id: 1, name: "Asha Rao", department: "Engineering", email: "asha@example.com" },
  { id: 2, name: "Ben Fischer", department: "Sales", email: "ben@example.com" }
];
let nextId = 3;

function getAll() {
  return employees;
}

function getById(id) {
  return employees.find((emp) => emp.id === id);
}

function create(data) {
  const employee = { id: nextId++, ...data };
  employees.push(employee);
  return employee;
}

function update(id, data) {
  const index = employees.findIndex((emp) => emp.id === id);
  if (index === -1) return null;
  employees[index] = { ...employees[index], ...data };
  return employees[index];
}

function remove(id) {
  const index = employees.findIndex((emp) => emp.id === id);
  if (index === -1) return false;
  employees.splice(index, 1);
  return true;
}

function search(query) {
  const lower = query.toLowerCase();
  return employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(lower) ||
      emp.department.toLowerCase().includes(lower)
  );
}

module.exports = { getAll, getById, create, update, remove, search };