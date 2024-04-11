import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import { jobsMock } from "../../mocks/jobs.mock";
import handler from "../../../../pages/api/job/submit";
require("dotenv").config({ path: ".env.local" });

const payload = {
  name: "John Doe",
  age: 30,
  phone: "1234567890",
  state: "California",
  city: "Los Angeles",
};

describe("/api/job/submit", () => {
  it("Should return 401 Unauthorized when the request is made with a different secret", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      headers: {
        secret: "wrong-secret",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
  });

  it("Should return 401 Unauthorized when the request is made with a blank secret", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      headers: {
        secret: "",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
  });

  it("Should return 400 Bad Request when the method is not allowed", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      headers: {
        secret: process.env.SECRET_KEY,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
  });

  it("Should return 400 Bad Request when the payload is incorrect", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body: {
        "name": "John Doe",
        "age": 30,
        "phone": "1234567890",
        "state": "California",
      },
      headers: {
        secret: process.env.SECRET_KEY,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getData()).toBe(JSON.stringify({ message: ["city: Required"] }));
  });

  it("Should return 200 OK when the request is made with a valid secret", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body: { ...payload },
      headers: {
        secret: process.env.SECRET_KEY,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  it("Should return 200 OK and the information should be identical to the message", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body: { ...payload },
      headers: {
        secret: process.env.SECRET_KEY,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBe(
      JSON.stringify({
        message: `Thank you for your application, ${payload.name}`,
      })
    );
  });
});
