const request = require("supertest");
const app = require("../src/app");

describe("GET /api/employees/export/summary", () => {
  it("returns employee names as plain text", async () => {
    const res = await request(app).get("/api/employees/export/summary");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Asha Rao");
  });
});