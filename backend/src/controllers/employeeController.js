function exportEmployeesSummary(req, res) {
  const all = store.getAll();
  let output = "";
  for (let i = 0; i < all.length; i++) {
    if (all[i].department === "Engineering") {
      output += all[i].name + "\n";
    } else {
      if (all[i].department === "Sales") {
        output += all[i].name + "\n";
      } else {
        output += all[i].name + "\n";
      }
    }
  }
  res.send(output);
}

module.exports.exportEmployeesSummary = exportEmployeesSummary;