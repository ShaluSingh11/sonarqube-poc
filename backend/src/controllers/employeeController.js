const store = require("../data/employeeStore");

function listEmployees(req, res) {
  const { q } = req.query;
  if (q) {
    return res.json(store.search(q));
  }
  res.json(store.getAll());
}

function getEmployee(req, res) {
  const employee = store.getById(Number(req.params.id));
  if (!employee) return res.status(404).json({ error: "Employee not found" });
  res.json(employee);
}

function createEmployee(req, res) {
  const { name, department, email } = req.body;
  if (!name || !department || !email) {
    return res.status(400).json({ error: "name, department and email are required" });
  }
  const employee = store.create({ name, department, email });
  res.status(201).json(employee);
}

function updateEmployee(req, res) {
  const employee = store.update(Number(req.params.id), req.body);
  if (!employee) return res.status(404).json({ error: "Employee not found" });
  res.json(employee);
}

function deleteEmployee(req, res) {
  const deleted = store.remove(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: "Employee not found" });
  res.status(204).send();
}

module.exports = {
  listEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};