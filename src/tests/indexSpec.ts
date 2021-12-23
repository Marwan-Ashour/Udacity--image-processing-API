// test endpoit
// import SuperTest in the spec file.
import supertest from "supertest";
import app from "../index";
// test endpoint
const request = supertest(app);
describe("Tests response of the endpoint", async () => {
  // test when all params are ok
  it("rerurns 200 when request is ok", async () => {
    const response = await request.get(
        "/api/imageConverter?image=fjord&width=300&height=300"
      );
      expect(response.status).toBe(200);
    });
    // test when some params not given
    it("returns 400 when incomplete request", async () => {
      const response = await request.get(
        "/api/imageConverter?image=fjord&width=&height="
      );
      expect(response.status).toBe(400);
    });
    // test when some params equal 0 which is not accepted
    // -1
    it("returns 400 when invalid request", async () => {
      const response = await request.get(
        "/api/imageConverter?image=fjord&width=0&height=300"
      );
      expect(response.status).toBe(400);
    });
    // -2
    it("returns 400 when invalid request", async () => {
      const response = await request.get(
        "/api/imageConverter?image=fjord&width=300&height=0"
      );
      expect(response.status).toBe(400);
    });
  });