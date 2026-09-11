const request = require("supertest");
const app = require("../src/app");

describe("Employee API routes", () => {
  it("GET /api/employees returns a list", async () => {
    const res = await request(app).get("/api/employees");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/employees creates an employee", async () => {
    const res = await request(app)
      .post("/api/employees")
      .send({ name: "New Hire", department: "Sales", email: "new@example.com" });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe("New Hire");
  });

  it("POST /api/employees rejects missing fields", async () => {
    const res = await request(app).post("/api/employees").send({ name: "Incomplete" });
    expect(res.status).toBe(400);
  });

  it("GET /api/employees/:id returns 404 for unknown id", async () => {
    const res = await request(app).get("/api/employees/99999");
    expect(res.status).toBe(404);
  });
});