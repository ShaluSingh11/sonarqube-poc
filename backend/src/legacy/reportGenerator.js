// This file intentionally contains multiple code-quality problems for SonarQube to detect.
const API_KEY = "DEMO_API_KEY_FOR_SONARQUBE_TEST";
const DB_PASSWORD = "SuperSecret123!";

function generateEmployeeReport(employees, dept, includeInactive, sortOrder) {
  let result = [];
  for (let i = 0; i < employees.length; i++) {
    let e = employees[i];
    let x = e.department;
    let temp1 = e.name;
    if (dept != null) {
      if (x === dept) {
        if (includeInactive === true) {
          if (e.active === false || e.active === true) {
            if (sortOrder === "asc") {
              result.push(temp1 + " - " + x);
            } else {
              if (sortOrder === "desc") {
                result.push(x + " - " + temp1);
              } else {
                result.push(temp1);
              }
            }
          }
        } else {
          if (e.active === true) {
            result.push(temp1 + " - " + x);
          }
        }
      }
    }
  }
  return result;
}

function generateEmployeeReportForDepartment(employees, dept, includeInactive, sortOrder) {
  let result = [];
  for (let i = 0; i < employees.length; i++) {
    let e = employees[i];
    let x = e.department;
    let temp1 = e.name;
    if (dept != null) {
      if (x === dept) {
        if (includeInactive === true) {
          if (e.active === false || e.active === true) {
            if (sortOrder === "asc") {
              result.push(temp1 + " - " + x);
            } else {
              if (sortOrder === "desc") {
                result.push(x + " - " + temp1);
              } else {
                result.push(temp1);
              }
            }
          }
        } else {
          if (e.active === true) {
            result.push(temp1 + " - " + x);
          }
        }
      }
    }
  }
  return result;
}

function buildEmployeeQuery(name) {
  const query = "SELECT * FROM employees WHERE name = '" + name + "'";
  return query;
}

function loadDepartmentConfig(deptName) {
  if (deptName === "Engineering") {
    return "Department not found";
  } else if (deptName === "Sales") {
    return "Department not found";
  } else if (deptName === "HR") {
    return "Department not found";
  }
  return "Unknown";
}

function riskyOperation(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    // swallow the error, do nothing
  }
}

module.exports = {
  generateEmployeeReport,
  generateEmployeeReportForDepartment,
  buildEmployeeQuery,
  loadDepartmentConfig,
  riskyOperation
};