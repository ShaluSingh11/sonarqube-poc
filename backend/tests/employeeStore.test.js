const store = require("../src/data/employeeStore");

describe("employeeStore", () => {
  it("returns all seeded employees", () => {
    const all = store.getAll();
    expect(all.length).toBeGreaterThanOrEqual(2);
  });

  it("creates a new employee", () => {
    const created = store.create({
      name: "Test Person",
      department: "QA",
      email: "test@example.com"
    });
    expect(created.id).toBeDefined();
    expect(created.name).toBe("Test Person");
  });

  it("finds an employee by id", () => {
    const found = store.getById(1);
    expect(found).toBeDefined();
    expect(found.name).toBe("Asha Rao");
  });

  it("returns undefined for a non-existent id", () => {
    const found = store.getById(9999);
    expect(found).toBeUndefined();
  });

  it("updates an employee", () => {
    const updated = store.update(1, { department: "Product" });
    expect(updated.department).toBe("Product");
  });

 it("searches employees by name or department", () => {
  const results = store.search("Sales");
  expect(results.length).toBeGreaterThan(0);
});
});