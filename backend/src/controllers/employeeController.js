function exportEmployeesSummary(req, res) {
  const all = store.getAll();
  const output = all.map((emp) => emp.name).join("\n");
  res.send(output);
}

module.exports.exportEmployeesSummary = exportEmployeesSummary;